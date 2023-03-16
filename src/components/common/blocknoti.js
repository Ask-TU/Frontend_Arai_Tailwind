import React, { useState } from "react";
import Image from "next/image";

import ProfileImg from "../../../public/assets/Ellipse 7.png";
import { BsFillBookmarkFill } from "react-icons/bs";

const username = "Username";
const dateTime = "14 Feb 2023, 21:29";
const titleQuestion = "ถ้าผมตากฝน ฝนจะแห้งมั้ยครับ";
const classTag = "SF 340";
const status = "Comment to your post";

const Blocknoti = () => {
  const [iconColor, setIconColor] = useState("white");

  const handleIconClick = () => {
    setIconColor(iconColor === "white" ? "#08D9D6" : "white");
  };

  return (
    <div className="mt-3 p-5 bg-242527 rounded-lg">
      <text className="text-ACACAC text-sm ml-4">{dateTime}</text>
        <div className= 'mt-2 flex flex-row items-center'>
          <Image className='ml-4'src={ProfileImg} alt="" width={40} height={40}></Image>
            <text className='ml-4 text-white'>{username}</text>
            <text className='ml-1 text-AEC64E text-sm'>{status}</text>
          </div>
    </div>
  );
};

export default Blocknoti;
