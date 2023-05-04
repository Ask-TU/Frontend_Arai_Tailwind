import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfileImg from "../../../public/assets/Ellipse 7.png";
import { useSelector } from "react-redux";
import { getCookie } from "cookies-next";

const ResultBlock = () => {
  const publicSlice = useSelector((state) => state.publicData);
  const [iconColor, setIconColor] = useState("white");
  const token = getCookie('token')
  const userID = getCookie('userID');
  const [owner, setOwner] = useState("Dr.Arai");
  const [className, setClassName] = useState("SF 340");
  const [sec, setSec] = useState("760001");
  const [des, setDes] = useState(
    "Software Configuration Management and Maintenance (Wed 12:30)"
  );
  useEffect(() => {
    // setOwner(publicSlice.searchResult.class_owner);
    setClassName(publicSlice.searchResult.subject_name);
    setSec(publicSlice.searchResult.section);
    setDes(publicSlice.searchResult.description);
  }, []);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'token': token ?? '' },
  };
  const joinClass = async () => {
    const join =  await fetch('http://localhost:8080/api/v2/classrooms/join/' + publicSlice.searchResult.ID + '/' + userID, requestOptions);
    const toJson = await join.json();
    console.log(toJson);
  }

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
        onClick={()=>joinClass()}
        >
          Join Class
        </button>
      </div>
    </div>
  );
};

export default ResultBlock;
