import React from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  return (
    <section className="max-w-screen-2xl bg-[#FCFFF6]">
      <div className="py-8 lg:py-16 mx-auto">
        <h1 className=" md:text-4xl text-2xl font-extrabold text-center">
          Ready to Start?
        </h1>
        <div className="flex justify-center mt-8">
          <button
            className="bg-[#B8FB3C] px-6 py-3 mx-2 text-[10px] md:text-sm font-bold hover:bg-black hover:text-white"
            onClick={() => navigate("/recruit")}
          >
            Start Hiring
          </button>
          <button
            className="bg-[#B8FB3C] px-6 py-3 mx-2 text-[10px] md:text-sm font-bold hover:bg-black hover:text-white"
            onClick={() => {
              // navigate("/recruit")
            }}
          >
            Start Learning
          </button>
        </div>
      </div>
    </section>
  );
};

export default Start;
