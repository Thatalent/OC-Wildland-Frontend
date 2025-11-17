import { MapPin, Clock, Layers, Users } from "lucide-react";
import img from "../../public/Firefighters.png"

export default function CustomTrainingSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 py-24 items-start">

      {/* LEFT TEXT BLOCK */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Why Choose Custom Training?
        </h2>

        <p className="text-gray-600 mb-10 leading-relaxed">
          Our custom group training programs offer the flexibility and personalization that
          standard courses can't provide. Whether you're training a fire department,
          corporate safety team, or community organization, we adapt our curriculum
          to meet your unique requirements and goals.
        </p>

        {/* FEATURES */}
        <div className="space-y-8">

          {/* FEATURE 1 */}
          <div>
            <div className="flex gap-3 items-start text-gray-800 font-semibold">
              <MapPin className="text-orange-500" />
              On-Site Training Available
            </div>
            <p className="ml-9 text-gray-600 text-sm">
              We bring our certified instructors directly to your location, saving time and cost.
            </p>
          </div>

          {/* BLUE DASH */}
          <div className="border-t border-dashed border-blue-300 w-full" />

          {/* FEATURE 2 */}
          <div>
            <div className="flex gap-3 items-start text-gray-800 font-semibold">
              <Clock className="text-orange-500" />
              Flexible Scheduling Options
            </div>
            <p className="ml-9 text-gray-600 text-sm">
              Choose training dates and times that work best for your team's schedule.
            </p>
          </div>

          {/* FEATURE 3 */}
          <div>
            <div className="flex gap-3 items-start text-gray-800 font-semibold">
              <Layers className="text-orange-500" />
              Customized Curriculum
            </div>
            <p className="ml-9 text-gray-600 text-sm">
              Tailored content that addresses your organization’s real-world challenges.
            </p>
          </div>

          {/* FEATURE 4 */}
          <div>
            <div className="flex gap-3 items-start text-gray-800 font-semibold">
              <Users className="text-orange-500" />
              Group Discounts
            </div>
            <p className="ml-9 text-gray-600 text-sm">
              Cost-effective pricing when training multiple team members together.
            </p>
          </div>
        </div>

        {/* CTA BUTTON */}
        <a
          href="/consultation"
          className="inline-block mt-10 bg-gradient-to-r from-orange-600 to-orange-400 text-white px-8 py-3 rounded-lg font-medium"
        >
          Schedule a Consultation
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <img
        src={img}
        className="rounded-xl w-[660px] h-[495px] object-cover"
        alt="Custom Wildland Training"
      />
    </section>
  );
}
