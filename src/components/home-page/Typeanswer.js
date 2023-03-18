
import React, { useState } from "react";
import Image from "next/image";
import ProfileImg from "../../../public/assets/Ellipse 7.png";
import { BsFillSendFill } from "react-icons/bs";
const Typeanswer = () => {
    const [iconColor, setIconColor] = useState("white");

    const handleIconClick = () => {
      setIconColor(iconColor === "white" ? "#08D9D6" : "white");
    };
  return (
    <div className="flex flex-rol m-auto max-w-5xl h-52 text-white p-4   rounded-lg bg-242527  items-center ml-auto">
      <Image className="mb-2 ml-12" src={ProfileImg} alt="" width={40} height={40}></Image>
      <textarea
        className="bg-3A3B3D  rounded-lg w-11/12 h-9 mt-9  ml-7 mr-5 mb-11 items-center Static "
        placeholder="Type Answer"
      />
      <button className="text-3xl mr-12" onClick={() => handleIconClick()}>
        <BsFillSendFill color={iconColor}/>
      </button>
    </div>
  );
};

export default Typeanswer;
