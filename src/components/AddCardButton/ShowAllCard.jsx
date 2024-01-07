'use client'
import React, { useContext, useState } from 'react'
import { FaCartPlus } from "react-icons/fa";
import dataContext from '@/Context/dataContext';
import Image from 'next/image';
export default function ShowAllCard() {
    const data = useContext(dataContext);
    
  
    if (!data || !data.data || !data.data.Items) {
       
        return <div>Loading...</div>;
      }
    const items = data.data.Items;
    console.log(items)
  return (
   <>
    <div>
    <div>
            {/* data Show */}
            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-4 2xl:gap-9 ">
              {items.map((item, index) => (
                <div key={index} className="flex flex-col justify-center items-center">
                  <Image
                    src={item.ImageUrl}
                    alt="Picture of the author"
                    width={400}
                    height={500}
                    className="xxxs:w-[10rem] xxxs:h-[9rem] xxs:w-[14rem] xxs:h-[9rem] xm:w-[16rem] sm:w-[18rem] sm:h-[11rem] md:w-[14rem] md:h-[15rem] lg:w-[16rem] lg:h-[13rem] xl:w-[20rem] xl:h-[18rem] rounded-[.80rem]"
                  />
                  <div className="pt-[1.2rem] flex gap-14">{item.Name}
                  <span><FaCartPlus className='w-[3rem] h-[1.3rem]' /></span></div>
                </div>
              ))}
            </div>
          </div>
    </div>
   </>
  )
}
