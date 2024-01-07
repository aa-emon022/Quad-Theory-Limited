
"use client"
import React, { useState } from 'react';
import Popup from "./Popup"; 

const AddCardButton = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [data, setData] = useState("");

  const handleButtonClick = () => {
    setData([...data, "New Card Created!"]);
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  return (
   <>
   <div className="bg-gray-200 md:w-1/2 flex flex-wrap  flex-col pt-[3rem]">
        {data && data.map((item, index) => (
          <p key={index} className="bg-gray-200 w-screen p-2 mb-2 flex justify-center items-center rounded">{item}</p>
        ))}
      </div>
     <div className="flex flex-wrap flex-col ">
      <button
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 md:mb-0"
        onClick={handleButtonClick}
      >
        Add New Card
      </button>

      {isPopupOpen && (
        <Popup onClose={handlePopupClose} />
      )}

     
    </div>
    
   </>
  );
};

export default AddCardButton;
