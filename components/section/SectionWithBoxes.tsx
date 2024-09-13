import React from "react";

const SectionWithBoxes = () => {
  return (
    <>
      <section className="flex items-center justify-center pt-20">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-2">Advanced Statistics</h2>
          <p className="text-gray-500">
            Track how your links are performing across the web with
            <br /> our advanced statistics dashboard
          </p>
        </div>
      </section>
      <div className="relative flex flex-col justify-center items-center mt-8">
        <ul className="flex space-x-11">
          <li className="relative p-4 bg-blue-100 flex-1 space-y-2">
            <h4 className="text-2xl font-bold">Brand recognition</h4>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instill confidence in your
              content.
            </p>
          </li>
          <li className="relative p-4 bg-blue-100 flex-1 mt-4 border-4 rounded-lg space-y-2">
            <div className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 h-1 w-[50px] bg-blue-500"></div>
            <div className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 h-1 w-[50px] bg-blue-500"></div>
            <h4 className="text-2xl font-bold">Detailed records</h4>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </li>
          <li className="relative p-6 bg-blue-100 flex-1 mt-8 space-y-2">
            <h4 className="text-2xl font-bold">Fully Customizable</h4>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SectionWithBoxes;
