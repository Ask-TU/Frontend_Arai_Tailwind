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
    <div className="flex m-auto text-white p-4 rounded-lg bg-242527">
      <div className="flex items-center">
        <Image
          className=""
          src={ProfileImg}
          alt=""
          width={40}
          height={40}
        ></Image>
      </div>
      <textarea
        role="textbox"
        className="bg-3A3B3D rounded-lg w-full p-2 mx-5 text-sm resize"
        placeholder="Type Answer"
      />
      <div className="flex items-center">
        <button className="">
          <BsFillSendFill color={iconColor} />
        </button>
      </div>
    </div>
  );
};

export default Typeanswer;
