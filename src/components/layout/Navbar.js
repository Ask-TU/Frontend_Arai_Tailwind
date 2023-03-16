import React from "react";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav className="fixed left-10">
      <div className="flex flex-col bg-242527 text-white rounded-lg p-3 w-48">
        <button className="flex justify-start items-center p-2 rounded-lg hover:bg-08D9D6">
          <FaHome />
          <p className="ml-2">Home</p>
        </button>
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
  return (
    <button className="rounded-lg bg-3D3D3D text-white ml-3 px-4">
      <RxHamburgerMenu />
    </button>
  );
};

export { Navbar, ToggleNav };
