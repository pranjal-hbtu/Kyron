import React from 'react'
import PlatePng from '../assetes/platform.png'
const Aihumen = () => {
  return (
<section className="dark:bg-gray-800 dark:text-gray-100">
  <div className="container flex flex-col justify-center p-7 mx-auto sm:py-4 lg:py-15 lg:flex-row lg:justify-between">
    <div className="flex flex-col justify-center   rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
      <h1 className="text-lg font-bold leadi sm:text-2xl">Ac mattisAI + Human Proctored Tests</h1>
      <p className="mt-6 mb-4 text-base text-[#969696] sm:mb-5">
        We ensure that each test’s integrity is maintained, and we are proud to present an industry-standard proctoring platform
      </p>
      <p className=" text-sm text-[#969696]">Each candidate’s identity is thoroughly verified by our AI system</p>
      <p className=" text-sm text-[#969696]">Our advanced AI alerts against any flag</p>
      <p className=" text-sm text-[#969696]">Candidates are under the continuous vigil of a dedicated human proctor</p>
    </div>
    <div className="flex items-center justify-center    h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
      <img src={PlatePng} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
    </div>
  </div>
</section>

  
  )
}

export default Aihumen