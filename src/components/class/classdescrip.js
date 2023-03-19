import React from "react";

const classCode = "SF340";
const classFullName =
  "Software Configuration Management and Maintenance (Wed 12:30)";
const Owner = "Dr.Arai";
const Section = "760001";

const ClassDescript = () => {
  return (
    <div className="bg-242527 flex flex-col w-full mt-10 mb-5 rounded-lg p-5 overflow-hidden">
      <text className="flex items-start text-2xl font-black mb-3 text-FF7171">
        {classCode}
      </text>
      <div className="bg-3A3B3D w-full rounded-lg p-5 overflow-hidden">
        <text className="text-xl text-white font-bold">{classFullName}</text>

        <div
          className=" 
              bg-242527 
              text-white
              mt-4
              rounded-lg w-fit"
        >
          <div className="flex flex-col p-4">
            <div className="mb-3">
              <text className="font-bold">Owner : </text>
              <text>{Owner}</text>
            </div>
            <div className="">
              <text className="font-bold">Section : </text>
              <text>{Section}</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDescript;
