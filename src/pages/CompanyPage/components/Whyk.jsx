import React from 'react'
import labPng from '../assetes/lab.png'
const Whyk = () => {
  return (


	<section className="bg-white">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-6 lg:py-15 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center py-6 text-center lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-xl font-extrabold leadi sm:text-4xl">Why Kyron?</h1>
          <p className="mt-6 mb-4 text-lg text-[#969696] sm:mb-5">We provide industry-leading technology, personalized service, industry expertise, and extensive infrastructure.</p>
          <p className="p-2 text-sm text-[#969696]">This unique combination allows us to help you exceed your goals, grow your testing program, and move your organization and test-takers forward in a way that other testing providers simply can’t. Having a true test development and delivery partner – not just a vendor – is crucial. Our dedicated team will walk you through the whole process, every step of the way. The best part? You get to choose how involved you want to be. While our concierge-level solutions make it easy for you to work independently, we can also provide expert guidance whenever you need it.</p>
        </div>
        <div className="flex items-center justify-center p-4 mt-8 lg:mt-14 sm:h-60 lg:h-auto xl:h-auto 2xl:h-auto">
          <img src={labPng} alt="/" className="object-contain mt-10 h-30 sm:h-80 lg:h-80 xl:h-auto 2xl:h-auto"/>
        </div>
      </div>
    </section>
  )
}

export default Whyk