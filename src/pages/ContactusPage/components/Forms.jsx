import React, { useState } from "react";
import Conactus from "../assetes/Contact-us.png";

const Forms = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <section className="bg-[#FCFFF6]">
      <div className="flex flex-col md:flex-row w-full p-4 md:px-12 md:py-5">
        <div className="md:w-1/2 w-full mb-4 md:mb-0">
          <div className="mb-3 md:mb-5">
            <label
              htmlFor="name"
              className="mb-2 md:mb-3 block text-lg md:text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={(e) => handleChange(e)}
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base md:text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-3 md:mb-5">
            <label
              htmlFor="email"
              className="mb-2 md:mb-3 block text-lg md:text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={(e) => handleChange(e)}
              placeholder="example@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base md:text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-3 md:mb-5">
            <label
              htmlFor="subject"
              className="mb-2 md:mb-3 block text-lg md:text-base font-medium text-[#07074D]"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={data.subject}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base md:text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-3 md:mb-5">
            <label
              htmlFor="message"
              className="mb-2 md:mb-3 block text-lg md:text-base font-medium text-[#07074D]"
            >
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              value={data.message}
              onChange={(e) => handleChange(e)}
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base md:text-sm font-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button
              className="hover:shadow-form rounded-md bg-black py-3 px-8 text-base md:text-sm font-semibold text-white outline-none"
              onClick={() => {
                fetch("https://api.kyron.in/api/form/contact-us", {
                  method: "POST",
                  body: JSON.stringify(data),
                });
                setData({
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                });
              }}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex items-start justify-center ">
          <img
            className=""
            width={"80%"}
            height={"80%"}
            src={Conactus}
            alt="/"
          />
        </div>
      </div>
    </section>
  );
};

export default Forms;
