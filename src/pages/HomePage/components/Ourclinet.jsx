import React from "react";
import adoPng from "../assetes/adobe.png";
import apnaPng from "../assetes/apna.png";
import benPng from "../assetes/benesse.png";
import berPng from "../assetes/berlitz.png";
import slitPng from "../assetes/slti.png";

const Ourclinet = () => {
  return (
    <section class="bg-[#FCFFF6]">
      <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 class="mb-8 lg:mb-8 text-xl font-extrabold tracking-tight leading-tight text-center md:text-4xl">
          Our Clients
        </h2>
        <div class="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 dark:text-gray-400">
          <a href="#" class="flex justify-center items-center">
            <img
              class="w-[18rem] sm:w-[13rem] mb-6 sm:mb-0"
              src={adoPng}
              alt="Adobe"
            />
          </a>
          <a href="#" class="flex justify-center items-center">
            <img class="w-[18rem] sm:w-[13rem]" src={berPng} alt="Ber" />
          </a>
          <a href="#" class="flex justify-center items-center">
            <img class="w-[16rem] sm:w-[12rem]" src={benPng} alt="Ben" />
          </a>
          <a href="#" class="flex justify-center items-center">
            <img class="w-[11rem]" src={apnaPng} alt="Apna" />
          </a>

          <a href="#" class="flex justify-center items-center">
            <img class="w-[11rem]" src={slitPng} alt="Slit" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Ourclinet;
