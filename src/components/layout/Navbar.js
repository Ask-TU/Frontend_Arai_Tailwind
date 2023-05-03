import React, { useEffect, useState } from "react";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import NewClass from "@/components/home-page/NewClass";
import axios from "axios";
import { getCookie } from "cookies-next";

const Navbar = () => {
  const userID = getCookie("userID");
  const [userData, setUserData] = useState();
  const getUserbyID = async () => {
    await axios.get("api/fetchUserByID/" + userID).then((res) => {
      setUserData(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getUserbyID();
    console.log(userID);
  }, []);

  return (
    <nav className="fixed left-10 z-10">
      <div className="flex flex-col bg-242527 text-white rounded-lg p-3 w-48">
        <Link
          href={"/home"}
          className="flex justify-start items-center p-2 rounded-lg hover:bg-08D9D6"
        >
          <button className="flex items-center">
            <FaHome />
            <p className="ml-2">Home</p>
          </button>
        </Link>
        <Link
          href={"/myquestions"}
          className="flex justify-start items-center p-2 rounded-lg hover:bg-08D9D6"
        >
          <button className="flex items-center">
            <FaUserCircle />
            <p className="ml-2">My question</p>
          </button>
        </Link>

        <button className="flex justify-start items-center p-2 rounded-lg hover:bg-08D9D6">
          <BsFillBookmarkFill />
          <p className="ml-2">Book</p>
        </button>
      </div>

      <div className="relative flex flex-col bg-242527 text-white rounded-lg my-5 p-3 w-48">
        <p className="absolute top-3 left-5 text-sm">Class</p>
        <div className="mt-6 flex flex-col">
          {!userData ? (
            <p>No class added</p>
          ) : (
            userData.classrooms_id.map((item) => {
              return (
                <Link
                  href={`/classroom/${item}`}
                  className="flex justify-start items-center p-2 rounded-lg hover:bg-08D9D6"
                >
                  <button className="flex items-center">
                    <p className="ml-2">{item}</p>
                  </button>
                </Link>
              );
            })
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <NewClass />
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
    <div className="relative xl:hidden">
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
            href="/myquestions"
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

          <div className="relative flex flex-col bg-242527 text-white rounded-lg mt-5 p-3 w-full">
            <p className="absolute top-3 left-5 text-sm">Class</p>
            <div className="mt-6 flex flex-col">
              <Link href={"/class"}>
                <button
                  className="p-2 rounded-lg hover:bg-08D9D6 w-full"
                  onClick={() => toggledropdown()}
                >
                  SF340
                </button>
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <NewClass />
          </div>
        </div>
      )}
    </div>
  );
};

export { Navbar, ToggleNav };
