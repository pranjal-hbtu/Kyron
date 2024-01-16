import React from 'react'
import hiringPng from '../assetes/HiringAmico.png'
const Skill = () => {
  return (
<section className='bg-white'>
  <div className='mx-12 px-2'>
  <div className='mx-auto  py-2 md:py-10 '>
    <h1 className='text-xl font-bold leading text-center sm:text-3xl'>Kyron Skill Inventory</h1>
  </div>

  <div className='flex flex-col md:flex-row '>
    <div className='w-full md:w-[50%] '>
      <div className=' py-2'>
        <p className='text-sm text-[#8D8D8D]'>Don’t fit squares in round holes.</p>
      </div>
      <div className=' py-2'>
        <p className='text-sm text-[#8D8D8D]'>Finding the perfect cocktail of skill, behaviors, and motivational factors for your job.</p>
      </div>
      <div className=' py-2'>
        <p className='text-sm text-[#8D8D8D]'>Customized algorithms to find out the competencies and evaluation criteria based on industry talent benchmark.</p>
      </div>
      <div className=' py-2'>
        <p className='text-sm text-[#8D8D8D]'>First and only company in the geo to provide an exhaustive solution about your skill requirements and hire for the right skills.</p>
      </div>
      <div className='py-2'>
        <p className='text-sm text-[#8D8D8D]'>We also offer development centers for advising on upskilling, leadership growth, and managing the expectations of high potential talent.</p>
      </div>
    </div>

    <div className='w-full md:w-[50%] flex items-center justify-center'>
      <img width={300} height={300} className='' src={hiringPng} alt="/" />
    </div>
  </div>
  </div>
</section>
  )
}

export default Skill