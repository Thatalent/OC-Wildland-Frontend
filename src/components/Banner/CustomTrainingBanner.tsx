import { MapPin, Calendar, ClipboardCheck, Tag } from "lucide-react";
import img from "/Firefighters.png";

export default function CustomTrainingBanner() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE TEXT */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Why Choose Custom Training?
        </h2>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Our custom group training programs offer the flexibility and personalization that
          standard courses can't provide. Whether you're training a fire department,
          corporate safety team, or community organization, we adapt our curriculum to
          meet your unique requirements and goals.
        </p>

        <ul className="space-y-4 text-gray-700">

          <li className="flex items-start gap-3">
            <MapPin className="text-orange-500 w-6 h-6 mt-1" />
            <span>
              <strong>On-Site Training Available</strong> – instructors delivered directly to your location
            </span>
          </li>

          <li className="flex items-start gap-3">
            <Calendar className="text-orange-500 w-6 h-6 mt-1" />
            <span>
              <strong>Flexible Scheduling Options</strong> – weekend, evening, and hybrid formats
            </span>
          </li>

          <li className="flex items-start gap-3">
            <ClipboardCheck className="text-orange-500 w-6 h-6 mt-1" />
            <span>
              <strong>Customized Curriculum</strong> – built specifically for your organization's needs
            </span>
          </li>

          <li className="flex items-start gap-3">
            <Tag className="text-orange-500 w-6 h-6 mt-1" />
            <span>
              <strong>Group Discounts</strong> – save more when training teams together
            </span>
          </li>

        </ul>

        <a
          href="/consultation"
          className="inline-block mt-8 bg-orange-500 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-orange-600 transition"
        >
          Schedule a Consultation
        </a>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex justify-center">
        <img
          src={img}
          alt="Custom Group Training"
          className="rounded-xl w-full max-w-[480px] object-cover shadow-md"
        />
      </div>

    </section>
  );
}
