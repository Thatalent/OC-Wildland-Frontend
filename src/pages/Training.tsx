function Training() {
  const classes = [
    {
      id: 1,
      title: "Basic Wildland Firefighter Course Blended (S-130, S-190, L-180)",
      description:
        "Equip new recruits with the essential skills and knowledge for safe and effective work in wildland fire environments.",
      date: "Various",
      time: "Full Schedule",
      location: "OC Training Center",
      spots: "16 spots available",
      price: "$350",
    },
    {
      id: 2,
      title: "RT-130 Annual Wildland Fire Refresher",
      description:
        "Essential training for new wildland firefighters covering fire behavior, safety, and suppression techniques.",
      date: "Aug 22, 2025",
      time: "8:00 AM - 4:00 PM",
      location: "OC Training Center",
      spots: "18 spots available",
      price: "$200",
    },
  ];

  return (
    <section className="bg-[#F7F8FA] py-24 font-[400] text-[#1F2937]">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* ===== HEADER ===== */}
        <div className="mb-10">
          {/* Title */}
          <h2 className="font-inter text-[36px] leading-[44px] font-semibold text-[#111827] mb-6">
            Featured &amp; Upcoming Classes
          </h2>


          {/* Filter Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Filter Buttons */}
            <div className="flex flex-1 bg-white rounded-md border border-gray-200 p-1 justify-between shadow-sm md:max-w-[800px]">
              <button className="flex-1 px-4 py-2 text-sm font-medium rounded-md bg-[#E8EDF9] text-[#1E40AF]">
                Wildland Fire
              </button>
              <button className="flex-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#1E40AF] transition-colors">
                CPR & First Aid
              </button>
            </div>

            {/* Dropdown */}
            <select className="text-sm border border-gray-300 rounded-md px-3 py-2 text-gray-600 bg-white w-full md:w-auto">
              <option>All Locations</option>
              <option>OC Training Center</option>
              <option>Online</option>
            </select>
          </div>
        </div>

        {/* ===== CLASS CARDS ===== */}
        <div className="flex flex-col gap-5">
          {classes.map((cls) => (
            <div
              key={cls.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm px-6 py-5 flex flex-col md:flex-row md:items-start md:justify-between"
            >
              {/* LEFT SIDE */}
              <div className="text-[15.25px] leading-[24px] font-[400] text-[#1F2937] md:w-3/4">
                <h3 className="text-[#F34E1B] font-semibold text-[16px] mb-1">
                  {cls.title}
                </h3>
                <p className="text-[#4B5563] mb-3">{cls.description}</p>
                <div className="flex flex-wrap items-center gap-2 text-[#6B7280] text-[14px]">
                  <span>{cls.date}</span>
                  <span>•</span>
                  <span>{cls.time}</span>
                  <span>•</span>
                  <span>{cls.location}</span>
                  <span>•</span>
                  <span>{cls.spots}</span>
                </div>
              </div>

              {/* RIGHT SIDE: PRICE + BUTTON */}
              <div className="flex flex-col items-start md:items-end mt-4 md:mt-0 md:w-1/4">
                <p className="text-[18px] font-semibold text-[#111827] mb-2">
                  {cls.price}
                </p>
                <button className="bg-[#F34E1B] hover:bg-[#D94312] text-white font-semibold text-[14px] leading-[22px] rounded-md px-6 py-2 transition-all shadow-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ===== FOOTER BUTTON ===== */}
        <div className="mt-10 flex justify-center">
          <button className="border border-gray-300 rounded-md px-8 py-3 text-[15px] font-medium text-gray-800 hover:bg-gray-100 transition-all">
            View All Wildfire Courses
          </button>
        </div>
      </div>
    </section>
  );
}

export default Training;
