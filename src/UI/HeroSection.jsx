import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const HeroSection = () => {
  return (
    <div>
      <main className="max-w-[1040px] m-auto pt-10 px-4">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0">
          {/* Text Section */}
          <div className="text lg:w-full lg:w-1/2 flex flex-col gap-5 text-center lg:text-left">
            <h1 className="lg:text-5xl text-3xl font-semibold">
              Explore the World, One Country at a Time.
            </h1>
            <p className="text-sm text-gray-400">
              Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
            </p>
            <button className="flex items-center justify-center gap-3 border-2 border-white px-6 py-2 rounded-2xl w-48 mx-auto lg:mx-0 hover:bg-blue-500 hover:border-blue-500 transition-all">
              Start Exploring <FaArrowRightLong />
            </button>
          </div>

          {/* Image Section */}
          <div className="image lg:w-1/2 w-full">
            <img
              src="Images/world.png"
              alt="world is beauty"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
