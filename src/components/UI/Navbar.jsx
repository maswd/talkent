import React from "react";

import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full lg:max-w-7xl mx-auto text-gray-700">
      <div className="flex p-3 rounded-b-md items-center justify-center">
        <Link to="/" className=" mb-4 md:mb-0">
          <img
            src="/svg/logo-no-background.png"
            alt=""
            className="md:w-20 w-14 align-middle"
          />
        </Link>
        <nav className="mr-auto md:mr-auto md:py-1 space-x-2 md:space-x-4 md:space-x-reverse space-x-reverse flex flex-wrap items-center justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive && "text-[#F9A826]"
              } hover:text-[#F9A826] ease-out transition-all delay-75`
            }
          >
            خانه
          </NavLink>

          <NavLink
            to="/new-posts"
            className={({ isActive }) =>
              `${
                isActive && "text-[#F9A826]"
              } hover:text-[#F9A826] ease-out transition-all delay-75`
            }
          >
            جدیدترین ها
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              `${
                isActive && "text-[#F9A826]"
              } hover:text-[#F9A826] ease-out transition-all delay-75`
            }
          >
            مطالب
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive && "text-[#F9A826]"
              } hover:text-[#F9A826] ease-out transition-all delay-75`
            }
          >
            درباره ما
          </NavLink>
          <NavLink
            to="/call"
            className={({ isActive }) =>
              `${
                isActive && "text-[#F9A826]"
              } hover:text-[#F9A826] ease-out transition-all delay-75`
            }
          >
            تماس با ما
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
