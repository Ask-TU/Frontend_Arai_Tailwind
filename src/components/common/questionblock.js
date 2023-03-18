import React, { useState } from "react";
import Image from "next/image";

import ProfileImg from "../../../public/assets/Ellipse 7.png";
import { BsFillBookmarkFill } from "react-icons/bs";

const username = "Username";
const dateTime = "14 Feb 2023, 21:29";
const titleQuestion = "ถ้าผมตากฝน ฝนจะแห้งมั้ยครับ";
const classTag = "SF 340";

const Questionblock = () => {
  const [iconColor, setIconColor] = useState("white");

  const handleIconClick = () => {
    setIconColor(iconColor === "white" ? "#08D9D6" : "white");
  };

  return (
    <div className="relative bg-242527 flex flex-col  my-5 text-white p-4   rounded-lg w-full h-full  ">
      <div className=" flex flex-row  items-center mt-9">
        <div className="ml-14">
          <div className="mb-3">
            <text className="text-FF4E4E font-bold text-xl">
              Q:{" "}
              <span className="text-white font-bold text-xl">
                {titleQuestion}
              </span>
            </text>
          </div>

          <div className="bg-FF4E4E w-fit p-1 rounded-md text-xs">
            {classTag}
          </div>
        </div>
        <div className="flex items-center ml-auto mb-8 mr-12 ">
          <Image src={ProfileImg} alt="" width={40} height={40}></Image>
          <text className="mx-4">{username}</text>
          <text className="text-ACACAC text-sm">{dateTime}</text>
        </div>

        <div className="absolute top-0 right-8">
          <button className="text-3xl" onClick={() => handleIconClick()}>
            <BsFillBookmarkFill color={iconColor} />
          </button>
        </div>
      </div>

      <textarea 
        className="bg-3A3B3D  rounded-lg w-11/12 h-40 mt-9 ml-12  mb-11 items-center Static "
        placeholder="พอดีผมสงสัยอะครับว่า ถ้าเกิดว่าผมตากฝน ฝนจะแห้งมั้ยครับ เพราะอะไร"
      />
    </div>
  );
};

export default Questionblock;
