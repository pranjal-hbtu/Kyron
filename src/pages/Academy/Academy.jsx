import React from "react";

const Academy = () => {
  return (
    <div className="w-[98%] md:w-[90%] lg:w-[80%] mx-auto pt-[3rem] flex flex-col gap-4">
      <img
        src="https://kyron.in/static/media/poster1.bc43f18fc2c8aba3a634.png"
        alt=""
      />
      <img
        src="https://kyron.in/static/media/poster2.b18a450b93bdc8c07b16.png"
        alt=""
      />
      <h1 className="text-[#39424e] text-center text-[1.8rem] font-medium">
        Fill this form to prepare for software engineering and machine learning
        interviews from professors of top universities and industry
        professionals.
      </h1>
      <div className="flex items-center justify-center">
        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdeVuKZtuFAqbjHaJBihyNXA5cqbcN9hHnRE2_PgHzetvlcoQ/viewform"
            )
          }
          style={{ boxShadow: "0 4px 12px #1ba94c80" }}
          className="w-auto text-[#000000b3] bg-[#b8fb3c] rounded-[2px] cursor-pointer text-[1.3rem] font-semibold py-[0.5rem] px-[1rem] hover:text-[#fff] hover:bg-[#000000b3]"
        >
          Enroll in Kyron Academy
        </button>
      </div>
    </div>
  );
};

export default Academy;
