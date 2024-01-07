import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import Photo from "@/Images/Image2.png";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div className="bg-[#FFAD01] mt-20 md:flex md:justify-between md:w-full pb-[5rem]">
        <div className="">
          <div className="px-[2rem] pt-[3rem]">
            <form>
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  className="block w-full p-4 ps-10 text-sm focus:outline-none  text-gray-900   rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your Email"
                  required
                />
                <button
                  type="submit"
                  className="text-white xxs:absolute xxs:mr-[2rem] end-2.5 bottom-2.5  hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <div className="flex xxs:text-orange-600 ">
                    <h1>Subscribe</h1>
                    <span className="flex justify-center items-center xxs:pl-3">
                      {" "}
                      <FaArrowRightLong />
                    </span>
                  </div>
                </button>
              </div>
            </form>
          </div>

          <div>
            <div className="flex flex-col-reverse md:flex-row md:gap-[2rem] md:pl-[5rem] md:pt-[3rem] md:justify-center md:items-center">
              <div className="flex flex-warp flex-col gap-6 text-center md:text-start">
                <h1 className="font-bold text-[1.4rem]">
                  Pti<span className="text-orange-600">.</span>
                </h1>
                <p className="font-bold md:text-[.8rem]">
                  Copyright@Tripp.All Right Reserved
                </p>
              </div>

              <div className="py-[3rem]">
                <div className="flex  justify-center items-center gap-5">
                  <div className=" w-8 h-8 bg-orange-600 rounded-full text-white flex justify-center items-center">
                    <FaGoogle />
                  </div>
                  <div className=" w-8 h-8 bg-orange-600 rounded-full text-white flex justify-center items-center">
                    <CiTwitter />
                  </div>
                  <div className=" w-8 h-8 bg-orange-600 rounded-full text-white flex justify-center items-center">
                    <AiOutlineInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:pr-[2rem]">
          <div>
            <Image src={Photo} width={300} height={200} className="h-[17rem]" />
          </div>
        </div>
      </div>
    </>
  );
}
