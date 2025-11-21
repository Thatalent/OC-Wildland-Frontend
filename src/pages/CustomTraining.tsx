import CustomTrainingBanner from "../components/Banner/CustomTrainingBanner";

export default function CustomTraining() {
  return (
    <>
      {/* HERO SECTION — matches Figma */}
      <section
        className="relative w-full h-[384px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/HeroCustomTraining.png')" }} 
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* TEXT CONTENT */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Custom &amp; Group Training
          </h1>

          <p className="text-white mt-4 text-lg max-w-[550px]">
            Tailored training solutions for individuals, organizations,
            departments, and specialized groups.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="/consultation"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium"
            >
              Schedule a Consultation
            </a>

            <a
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded-lg font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* SECOND SECTION — Custom Training Banner */}
      <CustomTrainingBanner />
    </>
  );
}
