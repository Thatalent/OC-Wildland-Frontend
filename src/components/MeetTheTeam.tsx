import { useQuery } from "@apollo/client";
import { GET_TEAM_MEMBERS } from "../graphql/queries";
import { Card, CardContent, Typography } from "@mui/material";

export default function MeetTheTeam() {
  const { data, loading, error } = useQuery(GET_TEAM_MEMBERS);

  const members = data?.teamMembers || [];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#F1F5F980" }}>
      <div className="max-w-6xl w-full text-center mx-auto">
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontSize: "36px",
            fontWeight: 700,
            lineHeight: "40px",
            color: "#1F2630",
            mb: 2,
          }}
        >
          Meet Our Expert Team
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "16.88px",
            lineHeight: "28px",
            color: "#667F99",
            mb: 5,
          }}
        >
          Our team members are experts with decades of real-world firefighting
          and emergency response experience
        </Typography>

        {loading && <p>Loading team information...</p>}
        {error && <p className="text-red-500">Failed to load team members</p>}

        <div className="mt-12 flex flex-wrap justify-center gap-8 w-full">
          {members.map((member: any) => (
            <Card
              key={member.id}
              className="cursor-pointer border border-gray-100 shadow-sm hover:shadow-md transition w-full sm:w-[50%] lg:w-[22%] max-w-xs"
            >
              <CardContent className="flex flex-col items-center text-center gap-4 p-8 w-full break-words">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent">
                  {member.avatar?.url ? (
                    <img
                      src={member.avatar.url}
                      alt={member.name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  ) : (
                    <img
                      src="/teamIcon.svg"
                      alt="team icon"
                      className="w-12 h-12"
                    />
                  )}
                </div>

                {/* Name */}
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "24px",
                    color: "#1F2630",
                  }}
                >
                  {member.name || "Team Member"}
                </Typography>

                {/* Role */}
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    fontSize: "13.78px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "#F36E1B",
                  }}
                >
                  {member.title || "Position"}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "13.56px",
                    lineHeight: "20px",
                    color: "#667F99",
                  }}
                >
                  {member.roleDescription || "Description"}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
