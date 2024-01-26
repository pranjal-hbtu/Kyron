import React from "react";
import adoPng from "../assetes/adobe.png";
import apnaPng from "../assetes/apna.png";
import benPng from "../assetes/benesse.png";
import berPng from "../assetes/berlitz.png";
import slitPng from "../assetes/slti.png";
import { useNavigate } from "react-router-dom";

const Customers = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#FCFFF6]">
      <div className="mx-4 lg:mx-12">
        <div className="mb-4 lg:mb-10 text-center">
          <h1 className="text-xl lg:text-4xl text-[#0a2134] font-extrabold mb-4 pt-8">
            Our <span className="text-[#B8FB3C]">Customers</span>
          </h1>
          <p className="mb-2 lg:mb-4 font-bold text-[#43505b] text-sm lg:text-base">
            Some of our very esteemed clients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  lg:gap-10 ">
          {/* Customer 1 */}
          <div className="rounded bg-white overflow-hidden shadow-lg hover:scale-110 ">
            <div className="bg-white h-48  flex items-center justify-center">
              <img className="w-full p-5" src={adoPng} alt="/" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-base mb-2">Adobe</div>
            </div>
            <div
              onClick={() => window.open("https://www.adobe.com/in/")}
              className="flex items-center justify-center p-6 pt-0"
            >
              <button
                className="select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                Read More
              </button>
            </div>
          </div>

          {/* Customer 2 */}
          <div className="rounded bg-white overflow-hidden shadow-lg hover:scale-110">
            <div className="bg-white h-48 flex items-center justify-center">
              <img className="w-full p-5" src={benPng} alt="/" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-base mb-2">Benessa</div>
            </div>
            <div
              onClick={() => window.open("https://www.benesse-hd.co.jp/en/")}
              className="flex items-center justify-center p-6 pt-0"
            >
              <button
                className="select-none font-sans justify-center font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                Read More
              </button>
            </div>
          </div>

          {/* Customer 3 */}
          <div className="rounded bg-white overflow-hidden shadow-lg hover:scale-110">
            <div className="bg-white h-48 flex items-center justify-center">
              <img className="w-full p-5" src={berPng} alt="/" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-base mb-2">Berlitz</div>
            </div>
            <div
              onClick={() => window.open("https://www.berlitz.com/")}
              className="flex items-center justify-center p-6 pt-0"
            >
              <button
                className="select-none font-sans justify-center font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                Read More
              </button>
            </div>
          </div>

          {/* Customer 4 */}
          <div className="rounded bg-white overflow-hidden shadow-lg  hover:scale-110">
            <div className="bg-white h-48  flex items-center justify-center">
              <img className="w-full p-5" src={slitPng} alt="/" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-base mb-2">Slti</div>
            </div>
            <div
              onClick={() =>
                window.open("https://www.linkedin.com/company/2lti/")
              }
              className="flex items-center justify-center p-6 pt-0"
            >
              <button
                className="select-none font-sans justify-center font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                Read More
              </button>
            </div>
          </div>

          {/* Customer 5 */}
          <div className="rounded bg-white overflow-hidden shadow-lg hover:scale-110">
            <div className="bg-white h-48 flex items-center justify-center">
              <img className="w-full p-10" src={apnaPng} alt="/" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-base mb-2">Apna</div>
            </div>
            <div
              onClick={() => window.open("https://apna.co/")}
              className="flex items-center justify-center p-6 pt-0"
            >
              <button
                className="select-none font-sans justify-center font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl lg:text-3xl text-center font-bold mt-10 mb-4 ">
            Are you ready to revolutionize how you hire tech talent?
          </h3>
          <button
            className="bg-[#B8FB3C] hover:bg-black hover:text-white cursor-pointer font-semibold mx-auto px-4 py-2 my-6 rounded-md"
            onClick={() => navigate("/contactus")}
          >
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Customers;
