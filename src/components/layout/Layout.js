import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/ARAI.png";
import ProfileImg from "../../../public/assets/Ellipse 7.png";
import Link from "next/link";
import { BsFillBellFill } from "react-icons/bs";
import { RiQuestionnaireFill } from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [alert, setAlert] = useState(false);
  const logout = () => {
    deleteCookie("token");
    setAlert(false);
    router.push("/");
  };
  return (
    <div className="z-50 flex justify-between border-b border-black bg-242527 p-4 sticky top-0">
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
        <button
          className="text-2xl text-white mx-3"
          onClick={() => setAlert(true)}
        >
          <HiOutlineLogout />
        </button>
        {alert && (
          <div class="fixed inset-0 overflow-y-auto">
            <div class="flex items-center justify-center min-h-screen">
              <div class="fixed inset-0 bg-272727 bg-opacity-75 backdrop-blur">
                <div
                  id="alert-additional-content-2"
                  class="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800 relative bg-242527 text-white rounded-lg max-w-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 drop-shadow-lg"
                  role="alert"
                >
                  <div class="flex items-center">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Info</span>
                    <h3 class="text-lg font-medium">Log out!</h3>
                  </div>
                  <div class="mt-2 mb-4 text-sm">Are you sure?</div>
                  <div class="flex">
                    <button
                      type="button"
                      class="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
                      data-dismiss-target="#alert-additional-content-2"
                      aria-label="Close"
                      onClick={() => logout()}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      class="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 ml-5"
                      data-dismiss-target="#alert-additional-content-2"
                      aria-label="Close"
                      onClick={() => setAlert(false)}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
        <div class="fixed inset-0 z-50 overflow-y-auto">
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
