import React, { useState } from "react";
import Image from "next/image";
import ProfileImg from "../../../public/assets/Ellipse 7.png";

const ResultBlock = () => {
  const [iconColor, setIconColor] = useState("white");

  const [owner, setOwner] = useState("Dr.Arai");
  const [className, setClassName] = useState("SF 340");
  const [sec, setSec] = useState("760001");
  const [des, setDes] = useState(
    "Software Configuration Management and Maintenance (Wed 12:30)"
  );

  return (
    <div className="relative bg-242527 flex flex-col w-full my-5 rounded-lg text-white p-4">
      <div className="flex items-center">
        <Image src={ProfileImg} alt="" width={40} height={40}></Image>
        <text className="mx-4">Owner : {owner}</text>
        <text className="text-ACACAC text-sm"></text>
      </div>

      <div className="ml-14">
        <div className="flex">
          <text className="text-FF4E4E font-bold text-xl mr-4 ">
            {className}
          </text>
          <div className="bg-3A3B3D w-fit p-1 pr-10 rounded-md text-sm h-fit">
            {sec}
          </div>
        </div>
        <text className="text-sm">{des}</text>
        <button
          className="
        absolute bottom-3 right-4
        bg-AEC64E rounded-md py-1 px-3"
        >
          Join Class
        </button>
      </div>
    </div>
  );
};

export default ResultBlock;
