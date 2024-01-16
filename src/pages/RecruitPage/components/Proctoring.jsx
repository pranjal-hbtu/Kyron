import React from 'react'
import proctorPng from '../assetes/Proctoring.png'
import proctortestPng from '../assetes/proctor.png'


const Proctoring = () => {
  return (
<section className='bg-[#FCFFF6] '>
  <div className=" mx-12">
  <div className=' px-4 py-2 md:py-6 md:px-8 lg:px-10'>
    <h1 className='text-xl font-bold leading text-center sm:text-3xl'>Kyron Proctoring</h1>
  </div>

  <div className='flex flex-col md:flex-row  '>
    <div className='w-full md:w-[50%] flex items-center justify-center'>
      <img width={'50%'} height={'50%'} className='' src={proctorPng} alt="/" />
    </div>
    <div className='w-full md:w-[50%]   text-[#7C7C7C]'>
      <div className=' py-2'>
        <h3 className='text-lg'>You can’t be everywhere! Our proctors can be.</h3>
        <p className='text-sm pt-2'>Your test-takers expect convenience. You require security. We guarantee both. We have a full suite of solutions designed to save you time and reduce stress for your test-takers; we can securely proctor your exam – anytime, anywhere.</p>
      </div>

      <div className=' py-2'>
        <h3 className='text-lg'>Proctoring Technology.</h3>
        <p className='text-sm pt-2'>Exam security is complex. While you can often prevent cheating or detect it in real-time, it can also slip through the cracks – regardless of whether you administer your test in person or remotely. When that happens, we’re there to prevent widespread damage. Our psychometricians analyze your exam data through a series of research-backed algorithms to identify suspicious patterns that may indicate fraud.</p>
      </div>

      <div className=' py-2'>
        <h3 className='text-lg'>Fulfillment Coordination and Speed.</h3>
        <p className='text-sm pt-2'>Our certified proctors review and validate every exam session, covering thousands of hours of footage within 24 to 72 hours so you can make fast and accurate scoring decisions.</p>
      </div>
    </div>

  </div>

  <div className='flex flex-col md:flex-row '>
    <div className='w-full   text-[#7C7C7C]'>
      <div className=' py-2'>
        <h3 className='text-lg'>Get insight into test-taker behavior.</h3>
        <p className='text-sm pt-2'>With our expertise, you can identify suspicious test-taker patterns, such as abnormally fast response rates, unusually high scores, or activity that indicates collusion or pre-knowledge.</p>
      </div>

      <div className=' py-2'>
        <h3 className='text-lg'>Act on known – or unknown – threats.</h3>
        <p className='text-sm pt-2'>Sometimes the biggest threat to exam security hides out of sight – but it’s impossible to hide from data. We inspect your data to pinpoint suspected problems and eradicate threats you didn’t expect.</p>
      </div>

      <div className=' py-2'>
        <h3 className='text-lg'>Give your test-takers the benefit of the doubt.</h3>
        <p className='text-sm pt-2'>We examine all your data before flagging a test-taker for possible exam misconduct. And because we use only research-validated techniques to identify potential threats, you can be sure that no test-taker will be flagged erroneously.</p>
      </div>
    </div>

    <div className='w-full  flex items-center  justify-center'>
      <img width={'70%'} height={'70%%'} className='shadow-xl' src={proctortestPng} alt="/" />
    </div>
  </div>
  </div>
</section>
  )
}

export default Proctoring