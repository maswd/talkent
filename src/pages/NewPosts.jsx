import React, { useState } from "react";
import Editor from "../components/editor/Editor";
import Profile from "../components/UI/Profile";
// import Filter from "../components/UI/Filter";
import Button from "../components/UI/Button";
import { Outlet } from "react-router-dom";

const NewPosts = () => {
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);
  //   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
    <section className="text-gray-600 ">
      <div className="container  py-5 mx-auto">
        <div className="flex flex-wrap justify-center ">
          <div className=" md:w-3/5 w-full ">
            <div className=" shadow-sm ">
              <Outlet />
            </div>
          </div>
          <div className=" hidden lg:block w-1/5">
            <div className=" shadow-sm relative">
              <Profile
                mobileProfileOpen={mobileProfileOpen}
                setMobileProfileOpen={setMobileProfileOpen}
              >
                <div className="space-y-2 ">
                  <Button
                    link=""
                    text="پست های جدید"
                    bg="bg-red-200"
                    color="text-red-500"
                    svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  }
                  />
                  <Button
                    link="createpost"
                    text="ایجاد پست "
                    bg="bg-green-200"
                    color="text-green-500"
                    svg={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        />
                      </svg>
                    }
                  />
                  <Button
                    link="/logout"
                    text="خروج"
                    bg="bg-gray-200"
                    color="text-gray-500"
                    svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                  </svg>
                  }
                  />
                </div>
                <p className="text-sm text-center ltr bottom-0 inset-x-0 absolute">
                  © 2022 Talkent
                </p>
              </Profile>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewPosts;
