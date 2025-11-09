
function MissionCard() {
  return (
    <section className="bg-gray-50 py-20 px-6 text-center">

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Our Mission
      </h2>

      <p className="text-lg md:text-xl text-gray-800 font-medium max-w-4xl mx-auto leading-relaxed">
        At{" "}
        <span className="text-orange-600 font-semibold">OC Wildland</span>, our
        mission is to train individuals with the{" "}
        <span className="text-orange-600 font-semibold">skills and knowledge</span>{" "}
        necessary to serve as wildland firefighters.
      </p>

      <p className="text-sm md:text-base text-gray-500 mt-6 max-w-2xl mx-auto leading-snug">
        Our mission extends to ensuring wildfire preparedness that everyone is
        prepared to protect against the hazards of wildland fires.
      </p>
    </section>
  );
}

export default MissionCard;
