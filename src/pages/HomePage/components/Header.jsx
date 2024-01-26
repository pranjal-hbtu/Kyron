import React, { useState } from "react";
import studentJpg from "../assetes/student.jpg";
import arrowPng from "../assetes/Backarrow.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Start Hiring");
  return (
    <section className="bg-[#FCFFF6]  ">
      <div className=" flex flex-col md:flex-row mx-3 sm:mx-4 lg:mx-[50px] py-6  lg:mb-10 pb-2 sm:pb-4 lg:pb-6">
        <div className="w-full md:w-[50%] py-4">
          <h1 className="text-xl sm:text-2xl lg:text-5xl font-extrabold py-1 md:py-2">
            Hiring Talent is now
          </h1>
          <h1 className="text-xl sm:text-2xl lg:text-5xl font-extrabold py-1 md:py-1 text-[#B8FB3C]">
            Reliable
          </h1>
          <p className="text-[#6B6B6B] text-[10px] md:text-xl py-2">
            Experience a transformative learning journey with Kyron, offering
            personalized tests grounded in competency mapping. Benefit from our
            rigorous validation process by human and AI proctors, ensuring
            integrity. Showcase your skills on the Kyron blockchain, connecting
            seamlessly with industry partners for streamlined hiring
            opportunities.
          </p>

          <div className="mt-4 sm:mt-6 w-full flex max-w-md mx-auto lg:mx-0">
            <form
              action="#"
              className="py-1 w-full pl-5 flex gap-3 items-center bg-white text-heading-3 shadow-lg shadow-box-shadow border-black rounded-full ease-linear focus-within:bg-body focus-within:border-primary"
            >
              {/* <input className="w-full py-3 outline-none bg-white" /> */}
              <CustomMenu setSelectedVal={setSelected} />

              <button variant="primary " className="">
                <img
                  className="hidden sm:flex rounded-md relative z-[5]"
                  src={arrowPng}
                  alt="/"
                  onClick={() => {
                    if (selected === "Start Hiring") navigate("/recruit");
                    // else if(selected === "Start Learning")navigate("/recruit")
                    // else if(selected === "Start Practicing")navigate("/recruit")
                  }}
                />
              </button>
            </form>
          </div>
        </div>

        <div className="hidden sm:block w-full md:w-[50%] items-center px-1 py-4">
          <img className="w-full h-auto" src={studentJpg} alt="/" />
        </div>
      </div>
    </section>
  );
};

export default Header;

const list = ["Start Hiring", "Start Learning", "Start Practicing"];

function CustomMenu({ setSelectedVal }) {
  const [selected, setSelected] = useState(list[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleListClick = (val) => {
    setSelected(val);
    setSelectedVal(val);
    setIsMenuOpen(false);
  };

  return (
    <div class="relative mt-2 w-full">
      <button
        type="button"
        class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 bg-transparent sm:text-lg sm:leading-6"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span class="flex items-center">
          {/* <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" /> */}
          <span class="ml-3 block truncate">{selected}</span>
        </span>
        <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <svg
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>

      {isMenuOpen && (
        <ul
          class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          {list.map((val) => (
            <li
              class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
              id="listbox-option-0"
              role="option"
              onClick={() => handleListClick(val)}
            >
              <div class="flex items-center">
                {/* <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                <span class="font-normal ml-3 block truncate">{val}</span>
              </div>
              {selected === val && (
                <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
