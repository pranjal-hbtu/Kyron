import React from "react";
import skillPng from "../assetes/Skill.png";

const Aiskill = () => {
  return (
    <section className="md:mx-6">
      <div className="border shadow-3xl w-auto h-auto  ">
        <div className="w-full mx-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[100%] md:flex  md:items-center">
              <div className="w-full md:w-[50%]  ">
                <div className="px-2 py-2">
                  <h1 className="text-lg md:text-xl font-medium">
                    AI-based skills matching
                  </h1>
                  <p className="text-[10px] md:text-sm  text-[#8D8D8D] py-1 px-2">
                    93% of millennials look for jobs suiting their skill sets
                  </p>
                </div>
                <div className="px-2 py-2">
                  <h1 className="text-xl font-medium">
                    Kyron state of the art fully customizable platform
                  </h1>
                  <p className="text-[10px] md:text-sm  text-[#8D8D8D] py-1 px-2">
                    94% of recruiters say that using the right recruitment
                    software has positively impacted their hiring process.
                  </p>
                </div>
                <div className="px-2 py-2">
                  <h1 className="text-xl font-medium">
                    Human+AI proctored exam platform
                  </h1>
                  <p className="text-[10px] md:text-sm  text-[#8D8D8D] py-1 px-2">
                    72% of candidates admitted cheating in some form during
                    virtual assessments
                  </p>
                </div>
                <div className="px-2 py-2">
                  <h1 className="text-xl font-medium">
                    AI-based behavioral check
                  </h1>
                  <p className="text-[10px] md:text-sm  text-[#8D8D8D] py-1 px-2">
                    89% recruiters admitted difficulty in assessing behavior
                    during HR rounds
                  </p>
                </div>
                <div className="px-2 py-2">
                  <h1 className="text-xl font-medium">
                    Suitable candidate onboarding
                  </h1>
                  <p className="text-[10px] md:text-sm  text-[#8D8D8D] py-1 px-2">
                    68% of employees have mentioned they have experienced poor
                    onboarding experience.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[50%] flex items-center justify-center">
                <img className="max-w-full h-auto" src={skillPng} alt="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aiskill;
