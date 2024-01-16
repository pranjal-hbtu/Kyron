import React from 'react'
import video from '../assetes/demo.mp4'
const Demo = () => {
  return (
<section className='bg-[#FCFFF6]'>
  <div className="mx-auto px-4 py-2 md:py-10 md:px-8 lg:px-10">
    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight text-center">
      KYRON <span className='text-[#B8FB3C]'>Demo video</span>
    </h1>
    <div className='flex flex-col-reverse md:flex-row w-full my-4 md:my-10 py-4'>
      <div className='md:w-1/2 flex items-center justify-center  mb-4 md:mb-0'>
        <video width={"80%"} height={"80%"} autoPlay controls>
          <source src={video} type="video/mp4"/>
        </video>
      </div>

      <div className='md:w-1/2 flex items-center justify-center md:ml-4'>
        <p className='mx-2 text-sm md:text-base lg:text-lg text-center'>
          Kyron presents a state-of-the-art candidate assessment and onboarding platform that helps companies in hiring suitable talents. First, it discovers talented candidates who have appropriate skills. Next, these candidates go through our proctored exam platform. Finally, the right candidates with the desired skills get selected for the company.
        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Demo