import React from "react";
import banner from "../../assetes/banner.webp";

const Aicts = () => {
  return (
    <div className="w-[98%] md:w-[90%] lg:w-[80%] mx-auto pt-[3rem] flex flex-col">
      <h1 className="text-center text-[2rem] md:text-[2.8rem] font-normal mb-4">
        All India Coding Test Series
      </h1>
      <img className="w-full mb-[3rem]" src={banner} alt="Banner" />
      <h1 className="text-[1.5rem] font-bold text-[#000] ">Test Features</h1>
      <ul className="list-disc pl-8 text-[#576871]">
        <li className="mt-[0.8rem] text-[1.1rem]">
          Same exam interface as GATE exam
        </li>
        <li className="mt-[0.8rem] text-[1.1rem]">
          Detailed Solutions for students reference
        </li>
        <li className="mt-[0.8rem] text-[1.1rem]">
          Question wise detailed video solutions for student reference
        </li>
        <li className="mt-[0.8rem] text-[1.1rem]">
          Facility of Ask an Expert ; where you can ask doubts related to
          questions
        </li>
        <li className="mt-[0.8rem] text-[1.1rem]">
          Overall Analysis report : This report will have
          <ul className="pl-8 list-disc">
            <li className="mt-[0.3rem] text-[0.9rem]">
              Overall Analysis report : This report will have Your Score in that
              test, along with the number of questions attempted, Time Taken and
              the Rank secured.
            </li>
            <li className="mt-[0.3rem] text-[0.9rem]">
              Marks Distribution (positive , negative and unattempted questions)
            </li>
            <li className="mt-[0.3rem] text-[0.9rem]">
              Time wise Pi Chart ( Skipped, unproductive and productive)
            </li>
          </ul>
        </li>
        <li className="mt-[0.8rem] text-[1.1rem]">
          Comparison Reports: Comparison reports clearly demonstrate your
          <ul className="pl-8 list-disc">
            <li className="mt-[0.3rem] text-[0.9rem]">
              Your score /Toppers Score
            </li>
            <li className="mt-[0.3rem] text-[0.9rem]">
              Your Time /Time taken by Topper
            </li>
            <li className="mt-[0.3rem] text-[0.9rem]">
              Your Accuracy/Topper's Accuracy
            </li>
            <li className="mt-[0.3rem] text-[0.9rem]">
              Top Ten toppers' score comparison
            </li>
          </ul>
        </li>
      </ul>

      <div className="flex w-full gap-6 my-16 items-center justify-between flex-col md:flex-row">
        <div
          className="text-[#fff] w-full md:flex-1"
          style={{ boxShadow: "0 40px 48px 0 #67724f80" }}
        >
          <h1 className="p-4 text-[1.4rem] font-semibold bg-[#688236]">
            Exact simulation
          </h1>
          <ul className="pl-12 pr-6 py-4 md:h-[17rem] lg:h-[13rem] bg-[#81a244] list-disc text-[0.9rem] font-semibold">
            <li>
              Kyron AICTS is the ultimate way to acquaint oneself with the
              actual tests
            </li>
            <li>Questions are set similarly to that of actual exam</li>
            <li>
              Helps students guage the exam pattern, syllabus and difficulty
              level
            </li>
          </ul>
        </div>
        <div
          className="text-[#fff] w-full md:flex-1"
          style={{ boxShadow: "0 40px 48px 0 #67724f80" }}
        >
          <h1 className="p-4 text-[1.4rem] font-semibold bg-[#688236]">
            Exact simulation
          </h1>
          <ul className="pl-12 pr-6 py-4 md:h-[17rem] lg:h-[13rem] bg-[#81a244] list-disc text-[0.9rem] font-semibold">
            <li>
              Our system provides with the same pattern and time limit as real
              of the exam
            </li>
            <li>Level of difficulty is similar to real time coding tests</li>
            <li>Level of difficulty is similar to real time coding tests</li>
          </ul>
        </div>
        <div
          className="text-[#fff] w-full md:flex-1"
          style={{ boxShadow: "0 40px 48px 0 #67724f80" }}
        >
          <h1 className="p-4 text-[1.4rem] font-semibold bg-[#688236]">
            Exact simulation
          </h1>
          <ul className="pl-12 pr-6 md:h-[17rem] lg:h-[13rem] py-4 bg-[#81a244] list-disc text-[0.9rem] font-semibold">
            <li>
              Our system finds the rightway to simulate the real-life exam hall
              situation
            </li>
            <li>A great way to frame the mindset for online coding tests</li>
            <li>
              Helps to think out out-of-the box and come across situations that
              might not be appparent otherwise
            </li>
          </ul>
        </div>
      </div>

      <h1 className="text-[1.5rem] my-8 font-bold text-[#000] ">
        Fee structure
      </h1>
      <table className="text-[#576871] border-solid border-[1px] border-collapse">
        <thead>
          <tr className="text-[#000] font-normal">
            <th className="border-solid border-[1px] border-collapse w-[6%]">
              S. No.
            </th>
            <th className="border-solid border-[1px] border-collapse w-[42%]">
              Package
            </th>
            <th className="border-solid border-[1px] border-collapse w-[20%]">
              Commencing Dates
            </th>
            <th className="border-solid border-[1px] border-collapse w-[25%]">
              Fee (inclusive of GST)
            </th>
            <th className="border-solid border-[1px] border-collapse w-[7%]">
              Enroll
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              1.
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              SheCodes Online All India Coding Test Series (includes 5 online
              tests)
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              31st Oct 2022
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[1rem] max-w-[70%]">
              Rs. 1500 /-only
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              <button className="boreder-none rounded-[4px] text-[#000000b3] cursor-pointer px-4 py-1 font-semibold text-[1rem] bg-[#b8fb3c]">
                Enroll
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              2.
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              ML Challenge Online All India Test Series (includes 5 online
              tests)
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              31st Oct 2022
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[1rem] max-w-[70%]">
              Rs. 1500 /-only
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              <button className="boreder-none rounded-[4px] text-[#000000b3] cursor-pointer px-4 py-1 font-semibold text-[1rem] bg-[#b8fb3c]">
                Enroll
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              3.
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              Developer (Intern) Online All India Coding Test Series (includes 5
              online tests)
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              6 Nov 2022
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[1rem] max-w-[70%]">
              Rs. 1500 /-only
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              <button className="boreder-none rounded-[4px] text-[#000000b3] cursor-pointer px-4 py-1 font-semibold text-[1rem] bg-[#b8fb3c]">
                Enroll
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              4.
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              Developer (Intern) Online All India Coding Test Series (includes
              10 online tests)
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              6 Nov 2022
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[1rem] max-w-[70%]">
              Rs. 2500 /-only
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              <button className="boreder-none rounded-[4px] text-[#000000b3] cursor-pointer px-4 py-1 font-semibold text-[1rem] bg-[#b8fb3c]">
                Enroll
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              5.
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              Developer (Graduate) Online All India Coding Test Series (includes
              5 online tests)
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              6 Nov 2022
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[1rem] max-w-[70%]">
              Rs. 1500 /-only
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              <button className="boreder-none rounded-[4px] text-[#000000b3] cursor-pointer px-4 py-1 font-semibold text-[1rem] bg-[#b8fb3c]">
                Enroll
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              6.
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              Developer (Graduate) Online All India Coding Test Series (includes
              10 online tests)
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              6 Nov 2022
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[1rem] max-w-[70%]">
              Rs. 2500 /-only
            </td>
            <td className="border-solid text-center border-[1px] border-collapse p-[0.7rem] max-w-[70%]">
              <button className="boreder-none rounded-[4px] text-[#000000b3] cursor-pointer px-4 py-1 font-semibold text-[1rem] bg-[#b8fb3c]">
                Enroll
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Aicts;
