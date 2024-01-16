import React from 'react'
import trakPNG from "../assetes/tracking.png"
const Tracking = () => {
  return (
<section className='bg-[#FCFFF6]'>
  <div className='mx-auto px-4 py-2 md:py-10 md:px-8 lg:px-10'>
    <h1 className='text-xl font-bold leading text-center sm:text-3xl'>Kyron Applicant Tracking</h1>
  </div>

  <div className='flex flex-col md:flex-row-reverse mx-4 md:mx-14'>
    <div className='w-full  mx-4 md:mx-10 mt-4 px-6 text-[#7C7C7C]'>
      <div className=' py-2'>
        <h3 className='text-base'>Reduce 80% of Recruiter Workload with the Kyron ATS.</h3>
      </div>
      
      <div className=' py-2'>
        <h3 className='text-base'>Faster and better hiring with all-in-one recruitment software.</h3>
      </div>

      <div className=' py-2'>
        <h3 className='text-base'>Grammar Error Identification and Correction.</h3>
      </div>

      <div className=' py-2'>
        <h3 className='text-base'>You are one step away from an applicant tracking system with</h3>
        <p className='text-sm  pt-2'>One-click job posting to multiple-job boards.</p>
        <p className='text-sm  pt-2'>Customizable free career site for employee branding.</p>
        <p className='text-sm  pt-2'>40% faster resume screening with automatic parsing.</p>
        <p className='text-sm  pt-2'>Powerful automation to filter and advance candidates across stages.</p>
        <p className='text-sm  pt-2'>Access to pre-interview screening with integrated testing tools.</p>
        <p className='text-sm  pt-2'>Best interview scheduling features.</p>
      </div>
    </div>

    <div className='w-full  flex items-center justify-center'>
      <img width={'60%'} height={'60%'} className='' src={trakPNG} alt="/" />
    </div>
  </div>
</section>
  )
}

export default Tracking