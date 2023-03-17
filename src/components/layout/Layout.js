import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/ARAI.png";
import ProfileImg from "../../../public/assets/Ellipse 7.png";
import Link from "next/link";
import { BsFillBellFill, BsPersonCircle } from "react-icons/bs";
import { RiQuestionnaireFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="z-10 flex justify-between border-b border-black bg-242527 p-4 sticky top-0">
      <div className="mx-5">
        <Link href={"/home"}>
          <Image src={logo} alt="" width={98} height={45} />
        </Link>
      </div>
      <div className="mx-2">
        <button className="text-2xl text-white mx-3">
          <Link href={"/notification"}>
            <BsFillBellFill />
          </Link>
        </button>
        <button className="text-2xl text-white mx-3">
          <BsPersonCircle />
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglemodal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-md:hidden">
      <button
        className="rounded-lg bg-08D9D6 text-white px-3 py-2 text-4xl fixed bottom-5 right-5"
        onClick={() => togglemodal()}
      >
        <RiQuestionnaireFill />
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
                  <p className="mx-3">Username</p>
                  <p>14 Feb 2023, 21:29</p>
                </div>

                <label className="flex w-full">
                  <span className="sr-only">Search</span>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg
                      className="h-5 w-5 fill-slate-300"
                      viewBox="0 0 20 20"
                    ></svg>
                  </span>
                  <input
                    className="placeholder:font-bold placeholder:text-slate-400 placeholder:text-lg block bg-636363 w-full rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg"
                    placeholder="Question Title"
                    type="text"
                    name="search"
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
                    onClick={() => togglemodal()}
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

export { Header, Footer };
