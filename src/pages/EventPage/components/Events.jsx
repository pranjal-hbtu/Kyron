import React from "react";
import adoPng from "../assetes/adobe.png";
import maiPang from "../assetes/maidas.png";
import upcoPng from "../assetes/upcoming.png";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#FCFFF6]">
      <div className="mb-2 lg:mb-10 text-center">
        <h1 className="text-base lg:text-2xl text-[#0a2134] mx-2 sm:mx-4 lg:mx-10 px-6 font-bold mb-2 lg:mb-4 pt-8 lg:pt-10">
          Hackathons, Programming Challenges, And Coding Competitions
        </h1>
        <p className="mb-2 lg:mb-4 font-medium text-[#43505b] text-sm lg:text-base">
          Source top talents and innovative ideas by conducting best-in-class
          assessments.
        </p>
      </div>
      <div className="p-4 lg:p-10 grid justify-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-10">
        <div className="rounded bg-white hover:scale-110 shadow-lg">
          <div className="bg-white h-32 sm:h-48 flex items-center justify-center">
            <img className="w-full p-2 sm:p-5" src={adoPng} alt="/" />
          </div>
          <div className="px-4 sm:px-6 py-2 sm:py-4">
            <div className="text-xs sm:text-sm mb-2">Adobe Career Academy</div>
          </div>
          <div className="flex items-center justify-center p-2 sm:p-6 pt-0">
            <button
              className="select-none font-sans justify-center font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              private event
            </button>
          </div>
        </div>
        <div className="rounded bg-white hover:scale-110 shadow-lg">
          <div className="bg-white h-32 sm:h-48 flex items-center justify-center">
            <img className="w-full p-2 sm:p-5" src={adoPng} alt="/" />
          </div>
          <div className="px-4 sm:px-6 py-2 sm:py-4">
            <div className="text-xs sm:text-sm mb-2">Adobe Emerge</div>
          </div>
          <div className="flex items-center justify-center p-2 sm:p-6 pt-0">
            <button
              className="select-none font-sans justify-center font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              private event
            </button>
          </div>
        </div>
        <div className="rounded bg-white hover:scale-110 shadow-lg">
          <div className="bg-white h-32 sm:h-48 flex items-center justify-center">
            <img className="w-full p-2 sm:p-5" src={maiPang} alt="/" />
          </div>
          <div className="px-4 sm:px-6 py-2 sm:py-4">
            <div className="text-xs sm:text-sm mb-2">
              Midas Hindi Essay Competi..
            </div>
          </div>
          <div className="flex items-center justify-center p-2 sm:p-6 pt-0">
            <button
              className="select-none font-sans justify-center font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              private event
            </button>
          </div>
        </div>
        <div className="rounded bg-white hover:scale-110 shadow-lg">
          <div className="bg-white h-32 sm:h-48 flex items-center justify-center">
            <img className="w-full p-2 sm:p-5" src={upcoPng} alt="/" />
          </div>
          <div className="px-4 sm:px-6 py-2 sm:py-4">
            <div className="text-xs sm:text-sm mb-2">Coming soon...</div>
          </div>
          <div className="flex items-center justify-center p-2 sm:p-6 pt-0">
            <button
              className="select-none font-sans justify-center font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              private event
            </button>
          </div>
        </div>
        {/* Repeat similar structure for other cards */}
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-lg sm:text-xl lg:text-2xl text-center font-bold mt-6 sm:mt-10 mb-3 sm:mb-4 lg:mb-6">
          Are you ready to revolutionize how you hire tech talent?
        </h3>
        <button
          className="bg-[#B8FB3C] hover:bg-black hover:text-white cursor-pointer font-semibold px-4 sm:px-6 py-2 sm:py-3 my-3 sm:my-6"
          onClick={() => navigate("/contactus")}
        >
          Try for free
        </button>
      </div>
    </section>
  );
};

export default Events;
