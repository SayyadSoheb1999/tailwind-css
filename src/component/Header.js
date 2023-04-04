import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-between bg-red-300 px-10 py-3">
      <div className="flex align-middle text-white font-extrabold">
        <h3>Sayyad Soheb</h3>
      </div>
      <ul className="flex flex-row sm:mr-0 md:mr-20">
        <li className="text-sm bg-tomato-400 px-2 py-[5px] font-thik mr-2 rounded-md border-[1px] text-white cursor-pointer   hover:text-black-300 hover:border-[1px] hover:border-solid hover:border-white text-center box-content">
          Home
        </li>
        <li className="text-sm bg-tomato-400 px-2 py-[5px] font-thik mr-2 rounded-md border-[1px]  text-white cursor-pointer   hover:text-black-300 hover:border-[1px] hover:border-solid hover:border-white text-center box-content">
          Products
        </li>
        <li className="text-sm bg-tomato-400 px-2 py-[5px] font-thik mr-2 rounded-md border-[1px] text-white cursor-pointer   hover:text-black-300 hover:border-[1px] hover:border-solid hover:border-white text-center box-content">
          Services
        </li>
        <li className="text-sm bg-tomato-400 px-2 py-[5px] font-thik mr-2 rounded-md border-[1px] text-white cursor-pointer   hover:text-black-300 hover:border-[1px] hover:border-solid hover:border-white text-center box-content">
          Contact
        </li>
      </ul>
    </header>
  );
};
