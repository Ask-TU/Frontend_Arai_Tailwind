import Image from "next/image";
import ProfileImg from "../../../public/assets/Ellipse 7.png";
import React from "react";

const classCode = "SF340";
const classFullName =
  "Software Configuration Management and Maintenance (Wed 12:30)";
const Owner = "Dr.Arai";
const Section = "760001";

const ClassDescript = () => {
  return (
    <div className="relative bg-242527 flex flex-col w-full my-5 rounded-lg p-4">
      <text className="flex items-start text-2xl font-extrabold mb-3 text-FF7171">
        {classCode}
      </text>
      <div className="relative bg-3A3B3D w-full h-full rounded-lg px-10 pt-4 pb-6">
        <text className="text-xl text-white font-bold">{classFullName}</text>

        <div
          className="relative 
              bg-242527 
              flex flex-row 
              text-white
              font-medium 
              mt-4
              md:w-1/2 rounded-lg w-full py-3 px-5"
        >
          <div className="flex items-start">
            <Image src={ProfileImg} alt="" width={40} height={40}></Image>
          </div>
          <div className="flex flex-col text-lg ml-5 w-full">
            <div className="grid grid-cols-5 gap-4 mb-3">
              <text className="col-span-2 font-bold">Owner</text>
              <text>{Owner}</text>
            </div>
            <div className="grid grid-cols-5 gap-4">
              <text className="col-span-2 font-bold">Section</text>
              <text>{Section}</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDescript;
