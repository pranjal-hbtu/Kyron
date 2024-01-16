import React from 'react'
import onlinePng from '../assetes/Onlinetest.png'
import testJpeg from '../assetes/testpage.jpeg'
import resultPng from '../assetes/result.png'
const Examplatform = () => {
  return (
<section className='bg-white'>
  <div className='mx-auto px-4 py-2 md:py-5 md:px-8 lg:px-10'>
    <h1 className="text-xl font-bold leading-tight text-center sm:text-3xl">Kyron Exam Platform</h1>
  </div>
  
  <div className='flex flex-col-reverse md:flex-row mx-4 md:mx-8'>
    <div className='w-full md:w-[50%] mx-4 md:mx-2 mt-4 md:mt-0 px-4 text-[#7C7C7C]'>
      <div className='py-2'>
        <h3 className='text-lg'>Combining Candidate Experience and Test Integrity Into One Solution.</h3>
      </div>
      <div className='py-2'>
        <h3 className='text-lg'>Custom Test at your convenience …. Administered</h3>
        <p className='text-sm pt-2'>Whether you’re creating a blueprint, writing innovative items, administering an exam, or more. Built for every stage of the exam process – design, development, delivery, and analysis – Kyron Exam platform helps you do it all in one place.</p>
      </div>
      <div className='py-2'>
        <h3 className='text-lg'>Develop and manage your exam – without limits.</h3>
        <p className='text-sm pt-2'>Tackle every step of the exam creation and assembly process – from item development and banking to form assembly – in a single, secure platform.</p>
      </div>
      <div className='py-2'>
        <h3 className='text-lg'>Reimagine the way you item bank.</h3>
        <p className='text-sm pt-2'>Map competency frameworks by customizing item bank hierarchy, and then use the platform as a workflow management tool to ensure that only vetted and approved items make it on your exam. You can also see items formatted in the exact way your test-takers will see them, giving you confidence that your items have been formatted correctly. And because your item bank lives on the same platform as the exam driver, you can publish forms whenever you want without the hassle or expense of “publishing fees.”</p>
        <p className='text-sm pt-1'>But don’t worry: If you want us to handle the item banking process for you, we can do that too.</p>
      </div>
    </div>
    <div className='w-full md:w-[50%] flex items-center justify-center'>
      <img className='w-full max-w-[450px] h-auto' src={onlinePng} alt="/" />
    </div>
  </div>

  <div className='flex flex-col-reverse md:flex-row mx-4 md:mx-8'>
    <div className='w-full md:w-[50%] mx-4 md:mx-2 mt-8 px-4 text-[#7C7C7C]'>
      <div className='py-2'>
        <h3 className='text-lg'>Deliver your online exam with confidence.</h3>
        <p className='text-sm pt-2'>Unlike other exam drivers, our platform is totally customizable. This means you can manage exam settings, like locked or toggled questions, exam time, time reminders, cut scores, competency areas, and more. You can also add extra accommodations and resources, such as calculators, notepads, or helpful links. Plus, you can generate immediate feedback and provide a detailed diagnostic report.</p>
        <p className='text-sm pt-2'>Want more? Because the platform is fully integrated with the Kyron Proctoring Solution, you can increase exam security and ensure your test-takers have a positive experience.</p>
      </div>
      <div className='py-2'>
        <h3 className='text-lg'>Seamlessly manage your test-takers.</h3>
        <p className='text-sm pt-2'>Specify required information when your test-takers are ready to set up their profiles. Then they can buy exams, schedule sessions, and view their results in one central location.</p>
      </div>
      <div className='py-2'>
        <h3 className='text-lg'>Get full visibility into your exam.</h3>
        <p className='text-sm pt-2'>Instead of contacting a support center and requesting exam information, you get 24/7 access to your exam content, test-taker information, and reports. Say hello to transparency and goodbye to traditional gatekeeping policies.</p>
      </div>
      <div className='py-2'>
        <h3 className='text-lg'>Derive greater value from your data and analytics.</h3>
        <p className='text-sm pt-1'>Whether you need data spreadsheets or visualizations such as graphs and charts, you can create customized reports and export them to Excel or .csv files.</p>
      </div>
    </div>
    <div className='w-full md:w-[50%] flex items-center  justify-center'>
      <img className=' shadow-xl' src={testJpeg} alt="/" width={'70%'} height={'70%'} />
    </div>
  </div>

  <div className='flex flex-col-reverse md:flex-row mx-4 md:mx-8'>
    <div className='w-full md:w-[50%] mx-4 md:mx-2 mt-8 px-4 text-[#7C7C7C]'>
      <div className='py-2'>
        <h3 className='text-lg'>Manage your test-takers with ease.</h3>
        <p className='text-sm pt-2'>Gain support from a dedicated account or program manager, who works with you to manage test-taker eligibility and communication. We help your test-takers tackle availability, registration, and scheduling while responding directly to any questions or concerns they may have.</p>
      </div>
      <div className='py-2'>
        <h3 className='text-lg'>Specify your exam day rules.</h3>
        <p className='text-sm pt-2'>Create a fair test-taking experience by equipping our proctor and support staff with your program’s unique documentation. From exam start procedures to test-taker rules and security measures, you have the power to set your test-takers up for success.</p>
      </div>
      <div className='py-2'>
        <h3 className='text-lg'>Get help when you need it most.</h3>
        <p className='text-sm pt-2'>Need assistance? No problem. You can call our support team for immediate help on exam day. We’re here to answer any questions you may have and walk you through the steps that’ll get you back on track.</p>
      </div>
      <div className='py-2'>
        <h3 className='text-lg'>Transition with ease.</h3>
        <p className='text-sm pt-1'>If you’re moving from a different provider, changing exam drivers, or transitioning to online testing, you can breathe a sigh of relief. We’ve got your back. Our team is here to support you every step of the way – from early decisions to migration and quality control.</p>
      </div>
    </div>
    <div className='w-full md:w-[50%] flex items-center justify-center'>
      <img className=' shadow-xl ' src={resultPng} alt="/"  width={'70%'} height={'70%'}/>
    </div>
  </div>
</section>
  )
}

export default Examplatform