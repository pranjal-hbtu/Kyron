import React from 'react'
import adoPng from '../assetes/adobe.png'
import apnaPng from '../assetes/apna.png'
import benPng from '../assetes/benesse.png'
import berPng from '../assetes/berlitz.png'
import slitPng from '../assetes/slti.png'

const Ourclinet = () => {
  return (
<section class="bg-[#FCFFF6]">
  <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
    <h2 class="mb-8 lg:mb-16 text-xl font-extrabold tracking-tight leading-tight text-center dark:text-white md:text-4xl">Our Clients</h2>
    <div class="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 dark:text-gray-400">
      <a href="#" class="flex justify-center items-center">
        <img class="h-6 sm:h-6 md:h-10 " src={adoPng} alt='Adobe' />
      </a>
      <a href="#" class="flex justify-center items-center">
        <img class="h-6 sm:h-6 md:h-10 " src={berPng} alt='Ber' />
      </a>
      <a href="#" class="flex justify-center items-center">
        <img class="h-9 sm:h-10 md:h-16 " src={slitPng} alt='Slit' />
      </a>
      <a href="#" class="flex justify-center items-center">
        <img class="h-9 sm:h-10 md:h-16 " src={apnaPng} alt='Apna' />
      </a>
      <a href="#" class="flex justify-center items-center">
        <img class="h-9 sm:h-10 md:h-16 " src={benPng} alt='Ben' />
      </a>
    </div>
  </div>
</section>

  )
}

export default Ourclinet