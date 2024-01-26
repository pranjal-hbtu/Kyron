import React from "react";
import rajivePng from "../assetes/Rajiv.png";
const About = () => {
  return (
    <section class="bg-[#FCFFF6]">
      <div class="mx-auto flex flex-col items-center px-4 py-2 text-center md:py-6 md:px-8 lg:px-10 xl:max-w-5xl">
        <h1 class="text-3xl font-bold mt-3 leadi sm:text-5xl">About Us</h1>
        <p class="px-5 mt-8 mb-3 text-sm md:text-lg">
          Kyron is a technology hiring and skilling platform that is the
          standard for assessing developer skills for many top companies around
          the world. By enabling tech recruiters and hiring managers to
          objectively evaluate talent at every stage of the recruiting process,
          Kyron helps companies hire skilled developers and innovate faster.
        </p>
      </div>
      <div class="mx-auto flex flex-col items-center md:flex-row px-4 py-2 md:py-4 md:px-8 lg:px-10 xl:max-w-5xl">
        <div class="w-full md:w-1/2 mx-0 md:mx-10 px-8">
          <p class="text-xs">
            “My academic tenure at IIIT Delhi, NUS Singapore & mentoring
            experience with students from Harvard University, CMU, MIT, IIT have
            illustrated the widening gap between the theoretical know-how and
            practical application. As an advisor and consultant to major
            companies such as Adobe, Microsoft, and Google, further strengthened
            my notions around the widening gap between academia and industry.
            With the help of behavioral sciences lab & HR experts from IIM A,
            Harvard & XLRI, we have created an ecosystem to make students
            job-ready, access based on competency mapping, and get them to the
            perfect job through industry collaboration. And all of this, through
            trusted, integrated, validated AI system and thoroughly researched
            learning psychology.”
          </p>
          <div class="flex flex-col items-center justify-end my-4 py-2 md:items-end">
            <b class="font-semibold">- Dr Rajiv Ratn Shah</b>
            <p class="text-black text-[8px] font-normal leading-3">
              PhD in Computer Science{" "}
            </p>
            <p class="text-black text-[8px] font-normal leading-3">
              Head Department of{" "}
              <a
                class="text-blue-500 text-[8px] font-normal underline leading-3"
                href="https://hcd.iiitd.ac.in/"
              >
                Human-Centered Design (HCD),
              </a>{" "}
            </p>
            <p class="text-black text-[8px] font-normal leading-3">
              IIIT-D Assistant Professor, Department of CSE & HCD,{" "}
            </p>
            <p class="text-black text-[8px] font-normal leading-3">
              IIIT-D Director{" "}
              <a
                class="text-blue-500 text-[8px] font-normal underline leading-3"
                href="https://midas.iiitd.ac.in/"
              >
                Multi modal Digital Media Analysis Lab (MIDAS)
              </a>{" "}
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <img
            class=" mx-auto shadow-lg"
            src={rajivePng}
            alt="/"
            width={"60%"}
            height={"60%"}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
