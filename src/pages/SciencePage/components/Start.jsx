import React from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  return (
    <section className="max-w-screen-2xl bg-white">
      <div className="flex flex-col">
        <div className="py-8 lg:py-16 mx-auto text-center px-4">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold">
            Ready to Start?
          </h1>
        </div>
        <div className="flex flex-row justify-center items-center">
          <button
            className="bg-[#B8FB3C] px-4 md:px-6 py-2 md:py-3 mx-2 md:mx-4 text-[10px] md:text-sm  font-bold hover:bg-black hover:text-white"
            onClick={() => navigate("/recruit")}
          >
            Start Hiring
          </button>
          <button
            className="bg-[#B8FB3C] px-4 md:px-5 py-2 md:py-3 mx-2 md:mx-4 text-[10px] md:text-sm  font-bold hover:bg-black hover:text-white"
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
