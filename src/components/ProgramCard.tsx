import { Link } from "react-router-dom";
import type { Program } from "../graphql/types";
import { formatPrice } from "../lib/utils";

type Props = {
  program: Program;
  buttonText?: string;
  buttonLink?: string;
};

export default function ProgramCard({
  program,
  buttonText = "Learn more",
  buttonLink,
}: Props) {
  const link = buttonLink || `/programs/${program.slug}`;
  // Format date if available
  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <article
      className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition focus-within:ring-2 focus-within:ring-orange-500"
      aria-labelledby={`program-${program.id}-title`}
    >
      <div className="aspect-[16/10] overflow-hidden rounded-t-2xl bg-gray-100">
        {program.thumbnail ? (
          <img
            src={program.thumbnail}
            alt={`${program.title} thumbnail`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-gray-400">
            <svg
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 id={`program-${program.id}-title`} className="text-lg font-semibold text-orange-600">
          {program.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{program.summary}</p>

        {/* Metadata section */}
        {(program.startDate || program.location || program.duration) && (
          <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-500">
            {program.startDate && (
              <div className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{formatDate(program.startDate)}</span>
              </div>
            )}
            {program.location && (
              <div className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{program.location}</span>
              </div>
            )}
            {program.duration && (
              <div className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{program.duration}</span>
              </div>
            )}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">{formatPrice(program.price)}</span>
          <Link
            to={link}
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 transition-all"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </article>
  );
}
