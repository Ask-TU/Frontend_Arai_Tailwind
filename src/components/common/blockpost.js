import React, { useState } from "react";
import Image from "next/image";

import ProfileImg from "../../../public/assets/Ellipse 7.png";
import { BsFillBookmarkFill, BsChatTextFill } from "react-icons/bs";
import Link from "next/link";

const username = "Username";
const dateTime = "14 Feb 2023, 21:29";
const titleQuestion =
  "ถ้าผมตากฝน ฝนจะแห้งมั้ยครับ แล้วถ้าฝนตากผม ผมจะเปียกมั้ย";
const classTag = "SF 340";
const comment = 2;

const Blockpost = ({username, dateTime, titleQuestion, classTag, comment}) => {
  const [iconColor, setIconColor] = useState("white");

  const handleIconClick = () => {
    setIconColor(iconColor === "white" ? "#08D9D6" : "white");
  };

  return (
    <div className="relative bg-242527 flex flex-col w-full my-5 rounded-lg text-white p-4 overflow-hidden">
      {/* บรรทัดข้างบน มี relative ทำให้เวลากด new class pop up จาก navbar มันจะอยู่ล่าง blockpost แต่กดจาก toggleไม่มีปัญหา */}
      <div className="flex items-center">
        <Image src={ProfileImg} alt="" width={40} height={40}></Image>
        <div className="max-lg:flex flex-col">
          <text className="ml-4">{username}</text>
          <text className="text-ACACAC text-sm ml-4">{dateTime}</text>
        </div>
      </div>

      <div className="ml-14">
        <div className="my-3">
          <text className="text-FF7171 font-bold text-xl">
            Q:{" "}
            <span className="text-white font-bold text-xl">
              {titleQuestion}
            </span>
          </text>
        </div>

        <div className="bg-FF7171 font-semibold w-fit py-1 px-2 rounded-md text-xs">
          {classTag}
        </div>
      </div>

      <button
        className="text-3xl absolute top-0 right-8"
        onClick={() => handleIconClick()}
      >
        <BsFillBookmarkFill color={iconColor} />
      </button>

      <div
        className="flex items-center absolute bottom-4 right-8"
        // href={"/home/question"}
      >
        <span className="text-xl">
          <BsChatTextFill />
        </span>
        <text className="mx-2">{comment}</text>
      </div>
    </div>
  );
};

export default Blockpost;
