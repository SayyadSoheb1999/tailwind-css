import React from "react";

export const Footer = () => {
  return (
    <div className="flex justify-center  px-7 py-20 bg-slate-10   ">
      <ul className="flex w-2/3 justify-between">
        <li className="">
          <p className="py-5">Social Media</p>
          <div className="flex flex-col  ">
            <span className="p-2 text-red-300 hover:text-red-500 text-xs text-left ">
              Instagram
            </span>
            <span className="p-2 text-red-300 hover:text-red-500 text-xs text-left ">
              Facebooke
            </span>
            <span className="p-2 text-red-300 hover:text-red-500 text-xs text-left ">
              Twitter
            </span>
          </div>
        </li>
        <li className="">
          <p className="py-5 text-left">Contact</p>
          <div className="flex flex-col  ">
            <span className="p-2 text-red-300 hover:text-red-500 text-xs text-left ">
              Email :{" "}
              <a
                href="mailto:sohebs5050@gmail.com"
                className="text-yellow-400 pl-2"
              >
                sohebs5050@gmail.com
              </a>
            </span>
            <span className="p-2 text-red-300 hover:text-red-500 text-xs text-left ">
              Mobile No :
            </span>
          </div>
        </li>
        <li className="">
          <p className="py-5">About Us</p>
          {/* <div className="flex flex-col  ">
            <span className="p-2 text-red-300 hover:text-red-500 text-xs text-left ">
              Email :
            </span>
            <span className="p-2 text-red-300 hover:text-red-500 text-xs text-left ">
              Mobile No :
            </span>
          </div> */}
        </li>

        {/* <button className="btn ">Contact</button> */}
      </ul>
    </div>
  );
};
