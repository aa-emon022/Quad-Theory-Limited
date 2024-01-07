"use client";
import React, { useContext, useState } from "react";
import dataContext from "@/Context/dataContext";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Loading from "../LazyLoading/LazyLoader";

export default function SliderDataTwo() {
  const data = useContext(dataContext);

  if (!data || !data.data ) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  const items = data.data.Items;
  console.log(items);
  const idsToRetrieve = [
    "1280cb1b-9115-45c5-babd-601febd462de",
    "39487b87-09e0-4e6c-acfa-6ac907e0742a",

    "38332e95-7f66-45af-829b-c51b3d23caba",

    "2b1bca6f-f7d6-4854-86dd-126db70776a2",
    "14f0a9d0-49f9-4020-a656-e23b7ac59216",
    "2b1bca6f-f7d6-4854-86dd-126db70776a2",
    "1ac400fd-98bd-46ee-b4e8-d2f983f2bbc2",
    "a3ef9e36-c7ee-48c5-99e2-6f966157e116",
    "f6fdc153-052a-4eab-8b7d-bb1478d2179c",
  ];
  const filteredData = items
    .filter((item) => idsToRetrieve.includes(item.Id))
    .sort((a, b) => idsToRetrieve.indexOf(a.Id) - idsToRetrieve.indexOf(b.Id));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPage = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(startIndex, endIndex);
  const isNextButtonRed = currentPage === 1;
  console.log(filteredData);
  return (
    <>
      <div className="container px-[1rem] pt-[8rem] lg:px-0 lg:mx-auto">
        <div className="">
          {/* bar */}
          <div className="flex justify-between mb-6">
            <div className="xxxs:pl-[.5rem] xm:pl-[1.8rem]  ">Popular</div>
            <div className="flex">
              <div className="text-orange-500 pr-[1.50rem]">AddMore</div>
              <div>
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <p
                    className={`${
                      isNextButtonRed ? "text-gray-400" : "text-black"
                    } w-[2rem] h-[1rem]`}
                  >
                    <FaChevronLeft />
                  </p>
                </button>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPage}
                >
                  <p
                    className={`${
                      isNextButtonRed ? "text-black" : "text-gray-300"
                    } w-[2rem] h-[1rem]`}
                  >
                    <FaChevronRight />
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div >
            {/* data Show */}
            <div className="grid grid-cols-2  md:grid-cols-5 lg:grid-cols-5 gap-4 2xl:gap-9 ">
              {currentData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center"
                >
                  <Image
                    src={item.ImageUrl}
                    alt="Picture of the author"
                    width={400}
                    height={500}
                    className="object-cover xxxs:w-[10rem] xxxs:h-[9rem] xxs:w-[14rem] xxs:h-[9rem] xm:w-[16rem] sm:w-[18rem] sm:h-[11rem] md:w-[12rem] md:h-[14rem] lg:w-[16rem] lg:h-[13rem] xl:w-[20rem] xl:h-[18rem] rounded-[.80rem]"
                  />
                  <div className="pt-[1.2rem]">{item.Name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
