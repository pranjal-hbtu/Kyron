import React, { useEffect, useState } from "react";
import logoPng from "../assetes/Kyron-logo.png";
import close from "../assetes/close.png";
import menu from "../assetes/menu.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const menuList = () => {
    return (
      <>
        <li
          onClick={() => setMobileNav(false)}
          className="mx-1 cursor-pointer hover:bg-[#e5ffb6] px-2 py-1 rounded-xl"
        >
          <NavLink to="/">Home</NavLink>
        </li>
        <li
          onClick={() => setMobileNav(false)}
          className="mx-1 cursor-pointer  hover:bg-[#e5ffb6] px-2 py-1 rounded-xl"
        >
          <NavLink to="/recruit">Recruit</NavLink>
        </li>
        <li
          onClick={() => setMobileNav(false)}
          className="mx-1 cursor-pointer  hover:bg-[#e5ffb6] px-2 py-1 rounded-xl"
        >
          <NavLink to="/academy">Academy</NavLink>
        </li>

        <li
          onClick={() => setMobileNav(false)}
          className="mx-1 cursor-pointer  hover:bg-[#e5ffb6] px-2 py-1 rounded-xl"
        >
          <NavLink to="/science">Science</NavLink>
        </li>
        <li
          onClick={() => setMobileNav(false)}
          className="mx-1 cursor-pointer  hover:bg-[#e5ffb6] px-2 py-1 rounded-xl"
        >
          <NavLink to="/customers">Customers</NavLink>
        </li>
        <li
          onClick={() => setMobileNav(false)}
          className="mx-1 cursor-pointer  hover:bg-[#e5ffb6] px-2 py-1 rounded-xl"
        >
          <NavLink to="/company">Company</NavLink>{" "}
        </li>
        <li
          onClick={() => setMobileNav(false)}
          className="mx-1 cursor-pointer  hover:bg-[#e5ffb6] px-2 py-1 rounded-xl"
        >
          <NavLink to="/events">Event</NavLink>
        </li>
        <li
          onClick={() => setMobileNav(false)}
          className="mx-1 cursor-pointer  hover:bg-[#e5ffb6] px-2 py-1 rounded-xl"
        >
          <NavLink to="/faq">FAQ</NavLink>
        </li>
        {mobileNav ? (
          <li
            onClick={() => setMobileNav(false)}
            className="mx-1 cursor-pointer  hover:bg-[#e5ffb6] px-2 py-1 rounded-xl"
          >
            <NavLink to="/contactus">Contact Us</NavLink>
          </li>
        ) : null}
      </>
    );
  };

  return (
    <div
      className="bg-[#f2f2f2] z-50 py-2 fixed top-0 w-full"
      style={{ boxShadow: "0 1px 3px #0003" }}
    >
      <nav className="w-full flex justify-between py-2 lg:px-8 items-center">
        <img
          onClick={() => navigate("/")}
          className="cursor-pointer w-[10rem] pl-4 lg:pl-0"
          src={logoPng}
          alt="/"
        />

        <ul className="hidden lg:flex text-[14px] font-normal">{menuList()}</ul>

        <div className="hidden lg:block">
          <div className="flex justify-between">
            <button class="py-[8px] px-10  text-[14px] font-bold mx-2 hover:bg-black hover:text-white">
              <NavLink to="/contactus">Contact Us</NavLink>
            </button>
            <button
              class="bg-[#B8FB3C] px-10 py-[8px] text-[12px] font-bold hover:bg-black
             hover:text-white mx-2"
              onClick={() => window.open("https://app.kyron.in/")}
            >
              Log in
            </button>
          </div>
        </div>

        {mobileNav ? (
          <img
            className="w-[1.2rem] cursor-pointer z-20 absolute top-3 right-3 lg:hidden"
            onClick={() => setMobileNav(false)}
            src={close}
          />
        ) : (
          <img
            src={menu}
            className="w-[1.4rem] cursor-pointer z-20 absolute top-3 right-3 lg:hidden"
            onClick={() => setMobileNav(true)}
          />
        )}

        {mobileNav && (
          <ul className="w-full z-10 absolute top-0 h-[100vh] bg-[#11b2b2] flex flex-col items-center gap-5 text-[1.6rem] pt-16">
            {menuList()}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
