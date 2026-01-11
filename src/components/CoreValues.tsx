import { Card, CardContent, Typography } from "@mui/material";

type CoreValue = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const values: CoreValue[] = [
  {
    title: "Safety First",
    description:
      "Every decision we make is guided by our commitment to safety, whether it's our training, our work routines, or the procedures we use.",
    icon: <img src="/protectIcon.svg" alt="protect icon" className="w-16 h-16" />,
  },
  {
    title: "Excellence",
    description:
      "We commit to thorough preparation and use our overall expertise to deliver the very best educational outcomes.",
    icon: (
      <img src="/badgeIcon.svg" alt="excellenceIcon" className="w-16 h-16" />
    ),
  },
  {
    title: "Service",
    description:
      "We are dedicated to our students and to providing all the right communities, we work with a commitment to helping others.",
    icon: <img src="/agreeIcon.svg" alt="agree icon" className="w-16 h-16" />,
  },
];

export default function CoreValues() {
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

        <div className="mt-12 flex flex-wrap justify-center gap-8 ">
          {values.map((value) => (
            <Card
              key={value.title}
              onClick={() => console.log(`${value.title} clicked`)}
              className="cursor-pointer border border-gray-100 shadow-sm hover:shadow-md transition w-full sm:w-[48%] lg:w-[30%] max-w-xs"
            >
              <CardContent className="flex flex-col items-center text-center gap-4 p-8 w-full break-words">
                {/* Icon */}
                <div className="flex items-center justify-center">
                  {value.icon}
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
          ))}
        </div>
      </div>
    </section>
  );
}
