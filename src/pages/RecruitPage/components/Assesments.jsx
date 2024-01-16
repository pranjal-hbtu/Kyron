import React from 'react'
import userPng from '../assetes/Userresearch.png'
const Assesments = () => {
  return (
<section className='bg-white'>
  <div className='mx-auto px-4 py-2 md:py-5 md:px-8 lg:px-10'>
    <h1 className="text-xl font-bold leading-tight text-center sm:text-3xl">Kyron Competencies Assessment</h1>
  </div>
  <div className='flex flex-col-reverse md:flex-row mx-4 md:mx-8'>
    <div className='w-full md:w-[50%] mx-4 md:mx-3 px-4 my-2 md:my-10'>
      <div className='px-2 py-2'>
        <p className='text-lg p-1 text-[#8D8D8D]'>Automatic Speech Scoring</p>
        <p className='text-lg p-1 text-[#8D8D8D]'>Automatic Essay Scoring</p>
        <p className='text-lg p-1 text-[#8D8D8D]'>Grammar Error Identification and Correction</p>
        <p className='text-lg p-1 text-[#8D8D8D]'>Automatic Speech Recognition Systems</p>
        <p className='text-lg p-1 text-[#8D8D8D]'>AI-Based Resume Parsing</p>
        <p className='text-lg p-1 text-[#8D8D8D]'>AI-Based PDF to Questions</p>
      </div>
    </div>
    <div className='w-full md:w-[50%] flex items-center justify-center'>
      <img className='' src={userPng} alt="/"  width={'50%'} height={'50%'}/>
    </div>
  </div>
</section>
    


    

        

 
  )
}

export default Assesments