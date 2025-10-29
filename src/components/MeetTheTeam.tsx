import { useQuery } from "@apollo/client";
import { GET_TEAM_MEMBERS } from "../pages/Home";

export default function MeetTheTeam() {
  const { data, loading, error } = useQuery(GET_TEAM_MEMBERS);

  if (loading)
    return (
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Meet Our Expert Team
        </h2>
        <p className="text-gray-600 mb-10">Loading team information...</p>
      </section>
    );

  if (error)
    return (
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Meet Our Expert Team
        </h2>
        <p className="text-red-500">Failed to load team members</p>
      </section>
    );

  const members = data?.teamMembers || [];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Meet Our Expert Team
        </h2>
        <p className="text-[rgba(102,128,153,1)] mb-12 mx-auto">
          Our team members are experts with decades of real-world firefighting and
          emergency response experience
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member: any) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-lg transition duration-300"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                {member.avatar?.url ? (
                  <img
                    src={member.avatar.url}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 21a8.25 8.25 0 1115 0H4.5z"
                    />
                  </svg>
                )}
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {member.name || "Team Member"}
              </h3>
              <p className="text-sm text-orange-600 font-medium mb-2">
                {member.title || "Position"}
              </p>
              <p className="text-[rgba(102,128,153,1)] text-sm leading-relaxed">
                {member.roleDescription || "Role description goes here."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
