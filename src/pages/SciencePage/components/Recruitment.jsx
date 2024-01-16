import React from "react";
import InterPng from "../assetes/Interview.png";
const Recruitment = () => {
  return (
    <section className="bg-[#FCFFF6]">
      <div className="md:mx-4 mb-2">
        <div className="flex flex-col md:flex-row mx-2 md:mx-4 mb-2">
          <div className="w-full md:w-[50%]">
            <div className="mx-2 md:mx-4 mt-12 px-4 md:px-8">
              <h1 className="text-xl md:text-4xl font-extrabold pt-4 md:pt-8 pb-2">
                Recruitment <span className="text-[#B8FB3C]">Finesse</span>
              </h1>
              <p className="text-[#6B6B6B] text-xs md:text-base py-2 md:py-4">
                The science of recruitment lies within the intricate art of
                aligning skills with the candidate’s intrinsic skill sets,
                potential, and behavioral capabilities
              </p>
              <p className="text-[#6B6B6B] text-xs md:text-base py-2 md:py-4">
                Sounds complex! Don’t worry, we are here to help. Kyron's niche
                and well-refined system, trained by top-class researchers from
                the Human-Computer Interaction department, screens the skills
                from complex job descriptions to find the perfect candidate for
                your organization. And since we are scientists, our system
                boasts of being:
              </p>
            </div>
          </div>
          <div className="w-full md:w-[50%] items-center pl-0 md:pl-8">
            <img src={InterPng} alt="/" width={'70%'} height={'70%'} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row mx-2 md:mx-4">
  <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 m-2 p-2 md:p-4">
    <h3 className="text-xs md:text-base font-bold px-2 text-center underline">
      Relevant
    </h3>
    <p className="font-semibold p-1 md:p-2">Is the test job-related?</p>
    <p className="text-gray-600 text-xs md:text-sm font-normal p-1 md:p-2">
      Our system finds the right skills to be used to screen the right talent
    </p>
    <p className="text-gray-600 text-xs md:text-sm font-normal p-1 md:p-2">
      Right talent is assessed through the right set of assessments
    </p>
    <p className="text-gray-600 text-xs md:text-sm font-normal p-1 md:p-2">
      Right assessments perfectly capture the skill performance
    </p>
  </div>

  <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 m-2 p-2 md:p-4">
    <h3 className="text-xs md:text-base font-bold px-2 text-center underline">
      Consistent
    </h3>
    <p className="font-semibold p-1 md:p-2">Is the test reliable?</p>
    <p className="text-gray-600 text-xs md:text-sm font-normal p-1 md:p-2">
      Our assessments accurately measure the skills they intend to measure
    </p>
    <p className="text-gray-600 text-xs md:text-sm font-normal p-1 md:p-2">
      Assessments quantitatively measure the skills and competencies
    </p>
    <p className="text-gray-600 text-xs md:text-sm font-normal p-1 md:p-2">
      Right assessments perfectly capture the knowledge areas and skills
    </p>
  </div>

  <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 m-2 p-2 md:p-4">
    <h3 className="text-xs md:text-base font-bold px-2 text-center underline">
      Unbiased
    </h3>
    <p className="font-semibold p-1 md:p-2">Is the test fair?</p>
    <p className="text-gray-600 text-xs md:text-sm font-normal p-1 md:p-2">
      Assessments are curated based on scientific principles and validated
    </p>
    <p className="text-gray-600 text-xs md:text-sm font-normal p-1 md:p-2">
      Assessments are regularly revised and re-curated based on feedback input
    </p>
    <p className="text-gray-600 text-xs md:text-sm font-normal p-1 md:p-2">
      Right assessments perfectly capture the knowledge areas and skills
    </p>
  </div>
</div>

      </div>
    </section>
  );
};

export default Recruitment;
