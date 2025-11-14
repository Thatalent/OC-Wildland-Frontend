import { BannerProps } from "./BannerTypes";

export default function Banner({
  title,
  body,
  ctaPrimary,
  ctaSecondary,
  checklist = [],
  image,
}: BannerProps) {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20 py-12">
      {/* Left Content */}
      <div className="max-w-xl flex flex-col">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h1>

        <p className="text-gray-700 text-base md:text-lg mb-6">
          {body}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Orange gradient button */}
          <button className="px-6 py-3 rounded-md text-white font-medium bg-gradient-to-r from-orange-500 to-orange-600 shadow-md">
            {ctaPrimary}
          </button>

          {ctaSecondary && (
            <button className="px-6 py-3 rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-50">
              {ctaSecondary}
            </button>
          )}
        </div>

        {/* Checklist */}
        {checklist.length > 0 && (
          <ul className="space-y-2">
            {checklist.slice(0, 4).map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <span className="mt-1 h-2 w-2 rounded-full bg-orange-500"></span>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={image}
          alt="Banner"
          className="w-full max-w-md rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
