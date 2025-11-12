import { useQuery } from "@apollo/client";
import { PROGRAMS_GRID } from "../graphql/queries";
import type { Program } from "../graphql/types";
import ProgramCard from "./ProgramCard";
import LoadingSpinner from "./LoadingSpinner";

type QueryData = {
  programs: Program[];
};

type ProgramsGridProps = {
  title?: string;
  description?: string;
  limit?: number;
  buttonText?: string;
  buttonLink?: (slug: string) => string;
  centered?: boolean;
};

export default function ProgramsGrid({
  title = "Training Programs",
  description = "Master wildfire essentials with hands-on instruction.",
  limit = 9,
  buttonText = "Learn more",
  buttonLink = (slug) => `/programs/${slug}`,
  centered = true,
}: ProgramsGridProps) {
  const { data, loading, error } = useQuery<QueryData>(PROGRAMS_GRID, {
    variables: { limit },
  });

  if (loading) {
    return (
      <section aria-label={title} className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <header className={`mb-8 ${centered ? 'text-center' : ''}`}>
            <h2 className="font-bold" style={{
              fontSize: '24px',
              lineHeight: '32px',
            }}>
              <span className="sm:hidden">{title}</span>
              <span className="hidden sm:inline" style={{ fontSize: '36px', lineHeight: '40px' }}>{title}</span>
            </h2>
            <p className="mt-2 text-gray-600">Loading programs…</p>
          </header>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-64 rounded-2xl bg-gray-100 grid place-items-center">
                <LoadingSpinner />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section aria-label={title} className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <header className={`mb-8 ${centered ? 'text-center' : ''}`}>
            <h2 className="font-bold" style={{
              fontSize: '24px',
              lineHeight: '32px',
            }}>
              <span className="sm:hidden">{title}</span>
              <span className="hidden sm:inline" style={{ fontSize: '36px', lineHeight: '40px' }}>{title}</span>
            </h2>
          </header>
          <div
            role="alert"
            className="rounded-2xl bg-red-50 border border-red-200 p-8 text-center"
          >
            <svg
              className="mx-auto h-12 w-12 text-red-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-red-900 mb-2">
              Unable to Load Programs
            </h3>
            <p className="text-red-700 mb-4">
              We're having trouble loading the training programs. Please try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center rounded-xl px-5 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  const items = data?.programs ?? [];

  return (
    <section aria-label={title} className="py-10 sm:py-14 bg-[rgba(241,245,249,0.5)]">
      <div className="mx-auto max-w-7xl px-4">
        <header className={`mb-8 ${centered ? 'text-center' : ''}`}>
          <h2 className="font-bold" style={{
            fontSize: '24px',
            lineHeight: '32px',
          }}>
            <span className="sm:hidden">{title}</span>
            <span className="hidden sm:inline" style={{ fontSize: '36px', lineHeight: '40px' }}>{title}</span>
          </h2>
          {description && <p className="mt-2 text-gray-600">{description}</p>}
        </header>

        {items.length === 0 ? (
          <div className="rounded-2xl bg-white border border-gray-200 p-12 text-center">
            <svg
              className="mx-auto h-16 w-16 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Programs Available</h3>
            <p className="text-gray-600">
              There are currently no training programs available. Check back soon for new offerings.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <ProgramCard
                key={p.id}
                program={p}
                buttonText={buttonText}
                buttonLink={buttonLink(p.slug)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
