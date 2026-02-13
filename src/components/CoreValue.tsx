import { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";

type CoreValue = {
  id: string;
  title: string;
  description: string;
  icon: string; // comes from backend as string
};

// map backend icon names to your SVG files
const iconMap: Record<string, string> = {
  Shield: "/protectIcon.svg",
  Badge: "/badgeIcon.svg",
  Agree: "/agreeIcon.svg",
};

export default function CoreValues() {
  const [values, setValues] = useState<CoreValue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoreValues = async () => {
      try {
        const res = await fetch(
          import.meta.env.VITE_GRAPHQL_ENDPOINT ||
            "http://localhost:3000/api/graphql",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query: `
              query {
                coreValues {
                  id
                  title
                  description
                  icon
                }
              }
            `,
            }),
          },
        );

        const json = await res.json();

        if (json.errors) {
          throw new Error(json.errors.map((e: any) => e.message).join(", "));
        }

        setValues(json.data.coreValues);
      } catch (err) {
        console.error(err);
        setError("Failed to load core values");
      } finally {
        setLoading(false);
      }
    };

    fetchCoreValues();
  }, []);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontSize: "36px",
            fontWeight: 700,
            lineHeight: "40px",
            color: "#1F2630",
            mb: 3,
          }}
        >
          Our Core Values
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "16.88px",
            lineHeight: "20px",
            color: "#667F99",
            mb: 6,
          }}
        >
          These values guide everything we do and shape how we serve our
          community
        </Typography>

        {/* Loading & Error states */}
        {loading && <p>Loading core values...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {values.map((value) => {
            const iconSrc = iconMap[value.icon] || "/protectIcon.svg";

            return (
              <Card
                key={value.id}
                onClick={() => console.log(`${value.title} clicked`)}
                className="cursor-pointer border border-gray-100 shadow-sm hover:shadow-md transition w-full sm:w-[48%] lg:w-[30%] max-w-xs"
              >
                <CardContent className="flex flex-col items-center text-center gap-4 p-8 w-full break-words">
                  {/* Icon */}
                  <div className="flex items-center justify-center">
                    <img
                      src={iconSrc}
                      alt={value.title}
                      className="w-16 h-16"
                    />
                  </div>

                  {/* Title */}
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontSize: "22px",
                      fontWeight: 600,
                      lineHeight: "28px",
                      color: "#1F2630",
                    }}
                  >
                    {value.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "13.67px",
                      lineHeight: "20px",
                      color: "#667F99",
                    }}
                  >
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
