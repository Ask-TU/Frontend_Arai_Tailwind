import React, { useState } from "react";
import Image from "next/image";

import ProfileImg from "../../../public/assets/Ellipse 7.png";
import { BsFillBookmarkFill } from "react-icons/bs";

const username = "Username";
const dateTime = "14 Feb 2023, 21:29";
const titleQuestion = "ถ้าผมตากฝน ฝนจะแห้งมั้ยครับ";
const classTag = "SF 340";

const Blockpost = () => {
  const [iconColor, setIconColor] = useState("white");

  const handleIconClick = () => {
    setIconColor(iconColor === "white" ? "#08D9D6" : "white");
  };

  return (
    <div className="bg-242527 flex flex-col w-full h-fit my-5 rounded-md text-white pb-3">
      <div className="flex">
        <div className="m-3 h-10">
          <Image src={ProfileImg} alt="" width={46.59} height={45.6}></Image>
        </div>
        <text className="mt-5 h-10">{username}</text>
        <text className="mt-5 ml-4 h-10 text-ACACAC">{dateTime}</text>
        <button className="text-4xl text-white ml-72 h-1" onClick={handleIconClick}>
          <BsFillBookmarkFill color={iconColor} />
        </button>
      </div>
      <div className=" ml-16">
        <text className="text-FF4E4E font-bold text-xl">Q: </text>
        <text className="font-bold text-xl">{titleQuestion}</text>

        <div className="justify-center bg-FF4E4E w-fit p-1 rounded text-black mt-3">
          {classTag}
        </div>
      </div>
    </div>
  );
};

export default Blockpost;
