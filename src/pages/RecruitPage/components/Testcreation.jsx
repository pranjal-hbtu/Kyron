import React from 'react'
import TestJpeg from '../assetes/Testdetails.jpeg'
const Testcreation = () => {
  return (
<section class="bg-[#FCFFF6]">
  <div class="container flex flex-col justify-center p-4 mx-auto sm:py-4 lg:py-8 lg:flex-row-reverse lg:justify-between">
    <div class="flex flex-col justify-center p-4  rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
      <h1 class="text-base font-bold leading-tight sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Modular Test Creation & Assessment Methodology</h1>
      <p class="mt-2 mb-2 text-sm md:text-base text-[#969696]">Our well-researched methodology creates unique tests for every job profile.</p>
      <p class="mt-2 mb-2 text-sm md:text-base text-[#969696]">Each job role is seen through the perspective of detailed Skill Inventory</p>
      <p class="mt-2 mb-2 text-sm md:text-base text-[#969696]">Test is created using the modular system to assess each Skill</p>
      <p class="mt-2 mb-2 text-sm md:text-base text-[#969696]">Scoring methodology is defined & normalized using the industry data and organization data</p>
    </div>
    <div class="flex items-center justify-center p-4 mt-4 lg:mt-0 h-32 sm:h-48 md:h-60 lg:h-80 xl:h-96 2xl:h-112">
      <img src={TestJpeg} alt="" class="object-contain h-32 sm:h-48 md:h-60 lg:h-70 shadow-2xl 2xl:h-112"/>
    </div>
  </div>
</section>
  )
}

export default Testcreation