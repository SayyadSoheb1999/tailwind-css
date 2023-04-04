import React from "react";

export const Main = () => {
  return (
    <div className="bg-slate-50 h-[85vh] flex pt-20 relative">
      <div className="w-[100%] sm:w-1/2 flex flex-col float-left pl-7 sm:pl-20 pt-20">
        <h2
          style={{ textShadow: "1px 1px orange , 2px 2px black" }}
          className="flex text-lg  sm:text-2xl sm:p-2 font-extrabold  text-red-400"
        >
          {" "}
          SAYYAD SOHEB
        </h2>
        <p
          style={{ textShadow: "1px 1px 10px #ffff" }}
          className="z-10 text-left text-red-600 sm:text-black  text-xs  sm:text-sm mt-2 font-thik w-2/3   text-clip  leading-5"
        >
          This is sayyad soheb working as React js Developer in Fyntune Solution
          Private Limited, Since 2022.
        </p>
        <button className="bg-red-500 hover:bg-red-700  mt-4  w-40 py-1 rounded-full text-white font-thik">
          Check in Detail
        </button>
      </div>
      <div className="flex justify-center align-middle w-1/2 ">
        <img
          className="w-auto h-auto mix-blend-multiply bg-blend-screen absolute top-0  right-0 sm:static "
          src="https://funylife.in/wp-content/uploads/2023/02/5_Boys-DP-WWW.FUNYLIFE.IN_-1024x1024.jpg"
          alt="image"
        />
      </div>
    </div>
  );
};
