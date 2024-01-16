import React from "react";
import safePng from "../assetes/Safe.png";
const Technology = () => {
  return (
    <section className="bg-[#FCFFF6]">
    <div className="p-6 container mx-auto">
      <h3 className="text-xl font-extrabold leadi sm:text-4xl">
        Secure, Industry-Leading Technology
      </h3>
      <p className="mt-3 mb-3 text-lg text-[#969696] sm:mb-5">
        We’ve been offering customizable testing solutions since 2019. Because
        we were founded on a culture of continuous improvement, we use every
        challenge we face as a company-wide teachable moment. We listen to
        client and test-taker concerns so we can refine our testing platforms
        and tools and develop new features and functionality that yield even
        better user experiences.
      </p>
      <div className="flex flex-col justify-center lg:flex-row-reverse lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="mt-3 mb-3 text-2xl text-[#969696] sm:mb-5">
            Proctoring Platform
          </h1>
          <p className="mt-3 mb-3 text-base text-[#969696] sm:mb-5">
                   Our proctoring platform, the first of its kind to offer live
                  remote proctoring services at scale, is built on advanced
                  technology and backed by the largest certified proctor and support
                  workforce in the world. Unlike other solutions, our platform
                  combines the most efficient aspects of remote proctoring
                  technology with specialized human oversight and support to create
                  a testing atmosphere that prevents cheating, reduces
                  administrative workload, and helps build equitability. The Kyron
                  Proctoring Platform gives you three service lines to choose from
                  so that you can curate a solution that meets your organization’s
                  specific goals.
          </p>
          <h1 className="mt-3 mb-3 text-2xl text-[#969696] sm:mb-5">
            Kyron Exam Platform
          </h1>
          <p className="mt-3 mb-4 text-bas text-[#969696] sm:mb-5">
                  The Kyron Exam Platform lets you manage every stage of the exam
                  process – design, development, delivery, scoring, and reporting –
                  all in one place. From creating blueprints to writing items,
                  assembling forms, and scoring exams, our platform is the only
                  system on the market that gives you complete control over your
                  exam content without having to jump through hoops to request
                  access. And unlike other exam drivers, our platform can be used as
                  a workflow management tool and integrated with existing item
                  banks, which makes importation easier and eliminates publishing
                  fees..
          </p>
        </div>
        <div className="flex items-center justify-center self-center">
          <img
            src={safePng}
            alt="/"
            className="object-contain max-w-full h-auto"
          />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Technology;

