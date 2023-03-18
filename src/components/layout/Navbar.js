import React, { useState } from "react";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed left-10">
      <div className="flex flex-col bg-242527 text-white rounded-lg p-3 w-48">
        <Link
          href={"/Home"}
          className="flex justify-start items-center p-2 rounded-lg hover:bg-08D9D6"
        >
          <button className="flex items-center">
            <FaHome />
            <p className="ml-2">Home</p>
          </button>
        </Link>
        <button className="flex justify-start items-center p-2 rounded-lg hover:bg-08D9D6">
          <FaUserCircle />
          <p className="ml-2">My question</p>
        </button>
        <button className="flex justify-start items-center p-2 rounded-lg hover:bg-08D9D6">
          <BsFillBookmarkFill />
          <p className="ml-2">Book</p>
        </button>
      </div>

      <div className="relative flex flex-col bg-242527 text-white rounded-lg my-5 p-3 w-48">
        <p className="absolute top-3 left-5 text-sm">Class</p>
        <div className="mt-6 flex flex-col">
          <button className="p-2 rounded-lg hover:bg-08D9D6">SF340</button>
          <button className="p-2 rounded-lg hover:bg-08D9D6">SF340</button>
          <button className="p-2 rounded-lg hover:bg-08D9D6">SF340</button>
        </div>
      </div>
    </nav>
  );
};

const ToggleNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggledropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="rounded-lg bg-3D3D3D text-white ml-3 px-3 py-2.5 hover:bg-989898"
        onClick={() => toggledropdown()}
      >
        <RxHamburgerMenu />
      </button>

      {isOpen && (
        <div className="absolute top-10 right-0 w-48 p-3 mt-2 bg-242527 rounded-lg shadow-md z-10">
          <Link
            href={"/home"}
            className="flex justify-start items-center p-2 rounded-lg hover:bg-08D9D6"
            onClick={() => toggledropdown()}
          >
            <button className="flex items-center text-white">
              <FaHome />
              <p className="ml-2">Home</p>
            </button>
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 text-sm rounded-lg text-white hover:bg-08D9D6"
            onClick={() => toggledropdown()}
          >
            <FaUserCircle />
            <p className="ml-2">My question</p>
          </Link>

          <Link
            href="#"
            className="flex items-center p-2 text-sm rounded-lg text-white hover:bg-08D9D6"
            onClick={() => toggledropdown()}
          >
            <BsFillBookmarkFill />
            <p className="ml-2">Book</p>
          </Link>

          <div className="relative flex flex-col bg-242527 text-white rounded-lg my-5 p-3 w-full">
            <p className="absolute top-3 left-5 text-sm">Class</p>
            <div className="mt-6 flex flex-col">
              <button
                className="p-2 rounded-lg hover:bg-08D9D6"
                onClick={() => toggledropdown()}
              >
                SF340
              </button>
              <button
                className="p-2 rounded-lg hover:bg-08D9D6"
                onClick={() => toggledropdown()}
              >
                SF340
              </button>
              <button
                className="p-2 rounded-lg hover:bg-08D9D6"
                onClick={() => toggledropdown()}
              >
                SF340
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { Navbar, ToggleNav };
