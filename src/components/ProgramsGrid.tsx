import { useQuery } from "@apollo/client";
import { PROGRAMS_GRID } from "../graphql/queries";
import type { Program } from "../graphql/types";
import ProgramCard from "./ProgramCard";
import LoadingSpinner from "./LoadingSpinner";
import "./ProgramsGrid.css";

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
      <section aria-label={title} className="programs-grid">
        <div className="programs-grid__container">
          <header className={`programs-grid__header ${centered ? 'programs-grid__header--centered' : ''}`}>
            <h2 className="programs-grid__title">
              {title}
            </h2>
            <p className="programs-grid__description">Loading programs…</p>
          </header>
          <div className="programs-grid__loading">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="programs-grid__skeleton">
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
      <section aria-label={title} className="programs-grid">
        <div className="programs-grid__container">
          <header className={`programs-grid__header ${centered ? 'programs-grid__header--centered' : ''}`}>
            <h2 className="programs-grid__title">
              {title}
            </h2>
          </header>
          <div role="alert" className="programs-grid__error">
            <svg
              className="programs-grid__error-icon"
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
            <h3 className="programs-grid__error-title">
              Unable to Load Programs
            </h3>
            <p className="programs-grid__error-message">
              We're having trouble loading the training programs. Please try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="programs-grid__error-button"
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
    <section aria-label={title} className="programs-grid">
      <div className="programs-grid__container">
        <header className={`programs-grid__header ${centered ? 'programs-grid__header--centered' : ''}`}>
          <h2 className="programs-grid__title">
            {title}
          </h2>
          {description && (
            <p className="programs-grid__description">{description}</p>
          )}
        </header>

        {items.length === 0 ? (
          <div className="programs-grid__empty">
            <svg
              className="programs-grid__empty-icon"
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
            <h3 className="programs-grid__empty-title">No Programs Available</h3>
            <p className="programs-grid__empty-message">
              There are currently no training programs available. Check back soon for new offerings.
            </p>
          </div>
        ) : (
          <div className="programs-grid__list">
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
