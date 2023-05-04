import React, { useState } from "react";
import Image from "next/image";
import ProfileImg from "../../../public/assets/Ellipse 7.png";
import { BsFillSendFill } from "react-icons/bs";
import { getCookie } from "cookies-next";

const Typeanswer = () => {
  const [iconColor, setIconColor] = useState("white");
  const userID = getCookie('userID');
  const token = getCookie('token')
  const username = getCookie('username')
  const [answer, setAnswer] = useState("")
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'token': token ?? '' },
    body: JSON.stringify({
        "content": answer,
        "owner": userID,
        "owner_name": username 
    })
  };
  const postAnswer = async () => {
    try {
      const questionId = getCookie("questionId");
      const response = await fetch('http://localhost:8080/api/v2/classrooms/questions/'+questionId+'/answers', requestOptions);
      const json = response.json();
      console.log(json);
    } catch(err) {
      console.log(err);
    }
  }
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
        onChange={(e) => setAnswer(e.target.value)}
      />
      <div className="flex items-center">
        <button onClick={() => postAnswer()}>
          <BsFillSendFill color={iconColor} />
        </button>
      </div>
    </div>
  );
};

export default Typeanswer;
