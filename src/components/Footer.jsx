import React from "react";
import logoPng from "../assetes/Kyron-logo.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <section className=" bg-white mt-10 py-10 w-full">
      <div className="container mx-auto w-full">
        <div clasNames="lg:flex w-full">
          <div className="w-full flex items-center justify-center my-10">
            <img
              onClick={() => window.open("https://kyron.in/")}
              src={logoPng}
              alt="Kyron-logo"
              className="cursor-pointer img-fluid w-[15rem]"
            />
          </div>
          <div className="w-full flex items-start justify-between px-5 sm:px-20">
            <div className="hidden lg:block">
              <div className="footer-links">
                <span className="text-[#0a2134] text-[18px] font-semibold leading-6">
                  Links
                </span>
                {/* <ul className=" mt-6 mb-4">
                  <li className="mb-3">
                    <a
                      href="\"
                      className="text-[#43505b] text-[16px]  hover:underline"
                    >
                      Home
                    </a>
                  </li>
                  <li class="mb-3">
                    <a
                      href="\"
                      className="text-[#43505b] text-[16px]  hover:underline"
                    >
                      {" "}
                      Recruit
                    </a>
                  </li>
                  <li class="mb-3">
                    <a
                      href="\"
                      className="text-[#43505b] text-[16px]  hover:underline"
                    >
                      Acadmy
                    </a>
                  </li>
                  <li class="mb-3">
                    <a
                      href="\"
                      className="text-[#43505b] text-[16px]  hover:underline"
                    >
                      Science
                    </a>
                  </li>
                  <li class="mb-3">
                    <a
                      href="\"
                      className="text-[#43505b] text-[16px]  hover:underline"
                    >
                      Customers
                    </a>
                  </li>
                  <li class="mb-3">
                    <a
                      href="\"
                      className="text-[#43505b] text-[16px]  hover:underline"
                    >
                      Company
                    </a>
                  </li>
                  <li class="mb-3">
                    <a
                      href="\"
                      className="text-[#43505b] text-[16px]  hover:underline"
                    >
                      Event
                    </a>
                  </li>
                  <li class="mb-3">
                    <a
                      href="\"
                      className="text-[#43505b] text-[16px]  hover:underline"
                    >
                      FAQ
                    </a>
                  </li>
                </ul> */}
                <ul className=" mt-6 mb-4">
                  <li className="text-[#43505b] text-[16px] mb-3 hover:underline">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="text-[#43505b] text-[16px] mb-3 hover:underline">
                    <NavLink to="/recruit">Recruit</NavLink>
                  </li>
                  <li className="text-[#43505b] text-[16px] mb-3 hover:underline">
                    Acadmy
                  </li>

                  <li className="text-[#43505b] text-[16px] mb-3 hover:underline">
                    <NavLink to="/science">Science</NavLink>
                  </li>
                  <li className="text-[#43505b] text-[16px] mb-3 hover:underline">
                    <NavLink to="/customers">Customers</NavLink>
                  </li>
                  <li className="text-[#43505b] text-[16px] mb-3 hover:underline">
                    <NavLink to="/company">Company</NavLink>{" "}
                  </li>
                  <li className="text-[#43505b] text-[16px] mb-3 hover:underline">
                    <NavLink to="/events">Event</NavLink>
                  </li>
                  <li className="text-[#43505b] text-[16px] mb-3 hover:underline">
                    <NavLink to="/faq">FAQ</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="footer-links">
                <span className="text-[#0a2134] text-[18px] font-semibold leading-6">
                  Policy
                </span>
                <ul className=" mt-4">
                  <li className="mb-3">
                    <a
                      href="/privacy"
                      className="text-[#43505b] text-[16px]  hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="/return-policy"
                      className="text-[#43505b] text-[16px]  hover:underline"
                    >
                      Return Policy
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="/terms-of-service"
                      className="text-[#43505b] text-[16px]  hover:underline"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="">
              <div class="footer-links">
                <span class="text-[#0a2134] text-[18px] font-semibold leading-6">
                  Contact Us
                </span>
                <div class=" ">
                  <h3 class=" mt-4 mb-1">Sales Inquiries:</h3>
                  <p class="text-[#7D7D7D] text-sm">
                    Email:{" "}
                    <a
                      href="mailto:sales@kyron.in"
                      class="section-company-form-link underline"
                    >
                      {" "}
                      sales@kyron.in
                    </a>
                  </p>
                  <p class="text-[#7D7D7D] text-sm">
                    Phone:{" "}
                    <a
                      href="tel:+91-8800966082"
                      class="section-company-form-link underline"
                    >
                      +91-8800966082
                    </a>
                  </p>
                  <h3 class="mt-4 mb-1">Support:</h3>
                  <p class="text-[#7D7D7D] text-sm">
                    Email:{" "}
                    <a
                      href="mailto:helpdesk@kyron.in"
                      class="section-company-form-link underline"
                    >
                      {" "}
                      helpdesk@kyron.in
                    </a>
                  </p>
                  <p class="text-[#7D7D7D] text-sm">
                    Phone:{" "}
                    <a
                      href="tel:+91-8800966082"
                      class="section-company-form-link underline"
                    >
                      +91-8800966082
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
