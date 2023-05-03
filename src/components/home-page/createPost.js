import Image from "next/image";
import ProfileImg from "../../../public/assets/Ellipse 7.png";
import React, { useState } from "react";
import { getCookie } from "cookies-next";

const CreatePost = ({classID}) => {
  const [isOpen, setIsOpen] = useState(false);
  const token = getCookie('token')
  const togglemodal = () => {
    setIsOpen(!isOpen);
  };
  const currentdate = new Date()
  const userID = getCookie('userID');
  const username = getCookie('username');
  const [content ,setContent] =useState("");
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'token': token ?? '' },
    body: JSON.stringify({
        "content": content,
        "owner": userID,
        "owner_name": username
    })
  };
  const post = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v2/classrooms/'+classID+'/questions', requestOptions);
      const json = response.json();
      console.log(json);
      setIsOpen(!isOpen); 
    } catch (err) {
      console.log(err);
    }

  }

  return (
    <div className="bg-242527 flex items-center rounded-lg px-4 h-36 my-5 overflow-hidden">
      <Image src={ProfileImg} alt="Profile icon" width={40} height={40} />
      <button
        className="
        flex 
        justify-start 
        bg-3D3D3D 
        text-white 
        text-sm 
        rounded-full 
        py-2 px-5 mx-4 
        w-full 
        hover:bg-828282"
        onClick={() => togglemodal()}
      >
        Have any question?
      </button>

      {isOpen && (
        <div class="fixed z-50 inset-0 overflow-y-auto">
          <div class="flex items-center justify-center min-h-screen">
            <div class="fixed inset-0 bg-272727 bg-opacity-75 backdrop-blur">
              <div
                class="relative bg-242527 text-white rounded-lg max-w-2xl top-1/2 left-1/2 
                transform -translate-x-1/2 -translate-y-1/2 p-5 drop-shadow-lg"
              >
                <div className="flex items-center text-sm mb-5">
                  <Image
                    src={ProfileImg}
                    alt="Profile icon"
                    width={40}
                    height={40}
                  />
                  <p className="mx-3">{username}</p>
                  <p>{currentdate.toLocaleString()}</p>
                </div>

                <label className="flex w-full">
                  <input
                    className="placeholder:font-bold placeholder:text-slate-400 placeholder:text-lg block bg-636363 w-full rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg"
                    placeholder="Question Title"
                    type="text"
                    name="search"
                    onChange={(e) => setContent(e.target.value)}
                  />
                </label>

                <button className="my-3 bg-FF7171 rounded-lg w-fit">
                  <p className="text-sm p-1">Class Name</p>
                </button>

                <label className="flex w-full">
                  <span className="sr-only">Search</span>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg
                      className="h-5 w-5 fill-slate-300"
                      viewBox="0 0 20 20"
                    ></svg>
                  </span>
                  <textarea
                    className="placeholder:font-bold placeholder:text-slate-400 block bg-636363 w-full rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-28 resize-y"
                    placeholder="Description"
                    type="text"
                    name="search"
                  />
                </label>

                <div className="flex justify-center">
                  <button
                    className="text-white text-lg bg-08D9D6 w-fit py-1 px-4 rounded-lg mt-3"
                    onClick={() => post()}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
