import React, { useState } from "react";
import Image from "next/image";

import ProfileImg from "../../../public/assets/Ellipse 7.png";
import { AiTwotoneHeart } from "react-icons/ai";

const username = "Username";
const dateTime = "14 Feb 2023, 21:29";
const answer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const like = "0";
const Answerblock = ({username, dateTime, answer}) => {
  const [iconColor, setIconColor] = useState("white");
  const [like, setLike] = useState("0");
  const handleIconClick = () => {
    setIconColor(iconColor === "white" ? "#08D9D6" : "white");
    setLike(like === "0" ? "1" : "0");
  };

  return (
    <div className=" bg-242527 flex flex-col my-5 text-white p-4 rounded-lg">
      <div className="flex items-center mb-5">
        <Image src={ProfileImg} alt="" width={40} height={40}></Image>
        <div className="max-lg:flex flex-col">
          <text className="ml-4">{username}</text>
          <text className="text-ACACAC text-sm ml-4">{dateTime}</text>
        </div>
      </div>
      <div className="flex flex-row font-bold text-AEC64E ml-14">
        A: <div className="text-white ml-2">{answer}</div>
      </div>
      <div className="flex flex-row flex-grow">
        <div className="mt-1 ml-auto " onClick={() => handleIconClick()}>
          <AiTwotoneHeart color={iconColor} />
        </div>
        <div className="font-blod ml-2 ">{like}</div>
      </div>
    </div>
  );
};

export default Answerblock;
