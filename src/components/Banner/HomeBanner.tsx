import { CheckCircle } from "lucide-react";
import Image from "../../../public/Image+Shadow.png";

export default function HomeBanner() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20">
      {/* LEFT TEXT SECTION */}
      <div>
        <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
          Empowering Southern California with Essential Wildland Fire and CPR Training Programs
        </h1>

        <p className="text-gray-600 mb-6">
          At OC Wildland Fire and CPR Training, we provide comprehensive training programs designed
          to equip individuals with life-saving skills. Our courses cover NWCG-certified wildland
          fire suppression, ensuring that you are prepared for emergencies.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-2 items-start">
            <CheckCircle className="text-orange-500 shrink-0" />
            Wildland Firefighter Training for All Skill Levels
          </li>
          <li className="flex gap-2 items-start">
            <CheckCircle className="text-orange-500 shrink-0" />
            CPR Certification Courses to Save Lives
          </li>
          <li className="flex gap-2 items-start">
            <CheckCircle className="text-orange-500 shrink-0" />
            Hands-On Training with Experienced Instructors
          </li>
          <li className="flex gap-2 items-start">
            <CheckCircle className="text-orange-500 shrink-0" />
            Flexible Scheduling with Online & Hybrid Options
          </li>
        </ul>

        <div className="flex gap-4 mt-8">
          <a
            href="/training"
            className="bg-gradient-to-r from-orange-600 to-orange-400 text-white px-6 py-3 rounded-lg font-medium"
          >
            View Courses
          </a>

          <a
            href="/consultation"
            className="border border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium"
          >
            Schedule Consultation
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <img
        src={Image}              
        className="rounded-xl w-[548px] h-[384px] object-cover"
        alt="Wildland Training"
      />
    </section>
  );
}
