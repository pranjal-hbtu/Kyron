import React from 'react'
import talentPng from '../assetes/talent.png'
const Discovery = () => {
  return (
<section className='bg-[#FCFFF6]'>
  <div className='mx-auto px-4 py-2 md:py-5 md:px-8 lg:px-10'>
    <h1 className="text-xl font-bold leading-tight text-center sm:text-3xl">Kyron Talent Discovery</h1>
  </div>
  
  <div className='flex flex-col-reverse md:flex-row mx-4 md:mx-8'>
    <div className='w-full  flex items-center justify-center'>
      <img className='' src={talentPng} alt="/" width={'50%'} height={'50%'}/>
    </div>
    <div className='w-full  mx-4 md:mx-2 mt-4 md:mt-0 px-4 text-[#7C7C7C]'>
      <div className='py-2'>
        <h3 className='text-lg'>Magnet for your needle in our talent haystack.</h3>
      </div>
      <div className='py-2'>
        <h3 className='text-lg'>Compete for great talent.</h3>
        <p className='text-sm pt-2'>Search the world's most diverse and active talent pool.</p>
        <p className='text-sm pt-1'>With over 3.9 lakh resumes updated every month on Kyron, you can reach candidates for nearly any role, industry, or location.</p>
      </div>
      <div className='py-2'>
        <h3 className='text-lg'>Zero in on the right talent.</h3>
        <p className='text-sm pt-2'>Identify relevant talent with over 25 search filters. Reach out to candidates immediately using email.</p>
      </div>
      <div className='py-2'>
        <h3 className='text-lg'>Keep your pipeline organized.</h3>
        <p className='text-sm pt-2'>Organize your pipeline into projects to align with your workflow. Easily monitor candidate responses.</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Discovery