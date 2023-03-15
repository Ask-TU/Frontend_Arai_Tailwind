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
    <div className="relative bg-242527 flex flex-col w-full my-5 rounded-lg text-white p-4">
      <div className="flex items-center">
        <Image src={ProfileImg} alt="" width={40} height={40}></Image>
        <text className="mx-4">{username}</text>
        <text className="text-ACACAC text-sm">{dateTime}</text>
      </div>

      <div className="ml-14">
        <div className="mb-3">
          <text className="text-FF4E4E font-bold text-xl">
            Q:{" "}
            <span className="text-white font-bold text-xl">
              {titleQuestion}
            </span>
          </text>
        </div>

        <div className="bg-FF4E4E w-fit p-1 rounded-md text-xs">{classTag}</div>
      </div>

      <div className="absolute top-0 right-8">
        <button className="text-3xl" onClick={() => handleIconClick()}>
          <BsFillBookmarkFill color={iconColor} />
        </button>
      </div>
    </div>
  );
};

export default Blockpost;
