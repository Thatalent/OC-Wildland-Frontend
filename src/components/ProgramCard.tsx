import { Link } from "react-router-dom";
import type { Program } from "../graphql/types";
import { formatPrice } from "../lib/utils";

type Props = {
  program: Program;
};

export default function ProgramCard({ program }: Props) {
  return (
    <article
      className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition focus-within:ring-2 focus-within:ring-orange-500"
      aria-labelledby={`program-${program.id}-title`}
    >
      <div className="aspect-[16/10] overflow-hidden rounded-t-2xl bg-gray-100">
        {program.thumbnail?.url ? (
          <img
            src={program.thumbnail.url}
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
        <h3 id={`program-${program.id}-title`} className="text-lg font-semibold">
          {program.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{program.summary}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-base font-semibold">{formatPrice(program.price)}</span>
          <Link
            to={`/programs/${program.slug}`}
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium ring-1 ring-orange-500 hover:bg-orange-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
          >
            Learn more
          </Link>
        </div>
      </div>
    </article>
  );
}
