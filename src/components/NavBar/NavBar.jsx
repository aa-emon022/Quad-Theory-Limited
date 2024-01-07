"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { usePathname } from "next/navigation";
export default function NavBar() {
  const [show, SetShow] = useState();
  const pathname = usePathname();
  const DropdownHandle = () => {
    SetShow(!show);
  };
  return (
    <>
      <div className="pt-[5rem] hidden md:block ">
        <div className="grid grid-cols-4 grid-rows-1 gap-2">
          <div className="flex justify-center">
            <h1 className="text-[1.40rem] font-bold pr-[4rem]">pti.</h1>
          </div>
          {/* --------------------- */}
          <div className="col-span-2 flex">
            <div className="relative w-[27rem] xl:w-[44rem] bg-white shadow-inner rounded-lg">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-orange-400 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Audiobook"
                required
              />
            </div>

            {/* -------------------- */}
            <div className="p-2 ml-[.80rem]  w-[11rem] shadow-inner  bg-white rounded-xl ">
              <button
                onClick={DropdownHandle}
                className="flex items-center justify-between  py-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                <h3 className="pl-[.70rem]">MENU</h3>
                <p className="pl-[4rem]">
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5   text-orange-400 transform ${
                      show ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </p>
              </button>
              {show && (
                <div className="z-10 absolute ml-[-.70rem] mt-[1rem] opacity-100   font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <Link
                        href="/"
                        className={
                          pathname === "/"
                            ? "text-orange-500 px-4 py-2"
                            : "text-black block px-4 py-2 hover:bg-gray-100 "
                        }
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cardshow"
                        className={
                          pathname === "/cardshow"
                            ? "text-orange-500 px-4 py-2"
                            : "text-black block px-4 py-2 hover:bg-gray-100 "
                        }
                      >
                        Add new Card
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className={
                          pathname === ""
                            ? "text-orange-500 px-4 py-2"
                            : "text-black block px-4 py-2 hover:bg-gray-100 "
                        }
                      >
                        Details
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/fromvalid"
                        className={
                          pathname === "/fromvalid"
                            ? "text-orange-500 px-4 py-2"
                            : "text-black block px-4 py-2 hover:bg-gray-100 "
                        }
                      >
                        From Valid
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/*  -------------------- */}

          <div className="col-start-4 flex flex-wrap justify-end md:pr-[4rem] pt-1">
            <div className="bg-orange-500 rounded-full h-[2rem] text-white w-[2rem] flex justify-center items-center">
              <CiUser />
            </div>
          </div>
          {/* ---------------------- */}
        </div>
      </div>
      {/* -----------------------phone    */}{" "}
      <div className="md:hidden pt-8">
        <div className=" px-5 flex gap-3">
          <div className="text-center">
            <h1 className="text-[1.40rem] font-bold ">pti.</h1>
          </div>
          <div className=" ">
            <div className="relative  bg-white shadow-inner rounded-lg">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-orange-400 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Audiobook"
                required
              />
            </div>
          </div>
          <div className=" ">
            <div className="p-2 h-[2.3rem] xxs:w-[10rem] shadow-inner  bg-white rounded-xl ">
              <button
                onClick={DropdownHandle}
                className="flex items-center justify-between    text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                <h3 className="xxs:pl-[1.3rem]">MENU</h3>
                <p className="xxs:ml-[2rem]">
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5   text-orange-400 transform ${
                      show ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center md:hidden pt-[6rem]">
        {show && (
          <div className="z-10 absolute ml-[-.70rem]  mt-[1rem] opacity-100   font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
              <li>
                <Link
                  href="/"
                  className={
                    pathname === "/"
                      ? "text-orange-500 px-4 py-2"
                      : "text-black block px-4 py-2 hover:bg-gray-100 "
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/cardshow"
                  className={
                    pathname === "/cardshow"
                      ? "text-orange-500 px-4 py-2"
                      : "text-black block px-4 py-2 hover:bg-gray-100 "
                  }
                >
                  Add new Card
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className={
                    pathname === ""
                      ? "text-orange-500 px-4 py-2"
                      : "text-black block px-4 py-2 hover:bg-gray-100 "
                  }
                >
                  Details
                </Link>
              </li>

              <li>
                <Link
                  href="/fromvalid"
                  className={
                    pathname === "/fromvalid"
                      ? "text-orange-500 px-4 py-2"
                      : "text-black block px-4 py-2 hover:bg-gray-100 "
                  }
                >
                  From Valid
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="border-b-2 border-gray-300 md:hidden pb-[1rem]"></div>
    </>
  );
}
