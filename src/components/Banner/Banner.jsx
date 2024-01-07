import Image from 'next/image'
import React from 'react'
import PIC from "@/Images/Image1.png"
export default function Banner() {
  return (
    <>
        <div className='md:px-[1.5rem] lg:px-[6rem] mt-16'>
            <div className='md:bg-orange-400 md:px-[3rem] lg:h-[12rem] rounded-[2rem]'>
             <div className="w-full md:flex md:justify-between">
             <div className='md:w-[50%] lg:w-2/5 flex flex-col justify-center items-center text-center'>
               <div><h1 className='text-[1.6rem] md:text-white'>Deliver Food To Yours Door Steps|</h1></div>
               <div><p className='text-[.85rem] pt-5 md:text-gray-300'>Authentic Food|,Quick Service,Fast Delivery</p></div>
             </div>


             <div className='md:w-3/12 bg-orange-400 md:bg-none xxxs:h-[8rem] xxs:h-[15rem]  xm:h-[16rem] md:h-[10rem] mt-[5rem] md:mt-0 flex md:flex-none  justify-center '>
             <div className="absolute  md:relative z-10 md:z-0  mt-[-5rem] md:mt-0 ">
                <Image src={PIC} width={500} height={500} className='md:h-[10rem] lg:h-[12rem] md:object-fit ' />
                </div>
             </div>
            
             </div>
            </div>
        </div>
    </>
  )
}
