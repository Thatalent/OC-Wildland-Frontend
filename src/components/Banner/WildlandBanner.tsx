import { CheckCircle } from "lucide-react";
import wildlandImg from "../../../public/WildlandFire.png";

export default function WildlandBanner() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20">

      {/* LEFT IMAGE FIRST (REVERSED FROM HOME PAGE) */}
      <img
        src={wildlandImg}
        className="rounded-xl w-[548px] h-[384px] object-cover"
        alt="Wildland Fire Training"
      />

      {/* RIGHT TEXT SECTION */}
      <div>
        <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
          Empowering Communities Through Training and Awareness
          <br /> in Wildland Fire Safety
        </h1>

        <p className="text-gray-600 mb-6">
          Founded in respinse to increaing threat of Wildland fires ,OC wildland Fire and CPR Training is dedicated to providing top-notch training programs that equip individuals and communities with the skills and knowledge needed to effectively respond to wildland fire emergencies.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-2 items-start">
            <CheckCircle className="text-orange-500 shrink-0" />
            Entry-Level & Advanced Wildland Courses
          </li>
          <li className="flex gap-2 items-start">
            <CheckCircle className="text-orange-500 shrink-0" />
            NWCG-Aligned Curriculum
          </li>
          <li className="flex gap-2 items-start">
            <CheckCircle className="text-orange-500 shrink-0" />
            Experienced Wildland Instructors
          </li>
          <li className="flex gap-2 items-start">
            <CheckCircle className="text-orange-500 shrink-0" />
            Scenario-Based Field Training
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
    </section>
  );
}
