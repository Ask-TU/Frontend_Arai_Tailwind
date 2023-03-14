import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/ARAI.png";
import { BsFillBellFill, BsPersonCircle } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex justify-between border-b border-black bg-242527 p-4 sticky top-0">
      <div className="mx-5">
        <Image src={logo} alt="" width={98} height={45} />
      </div>
      <div className="mx-2">
        <button className="text-2xl text-white mx-3">
          <BsFillBellFill />
        </button>
        <button className="text-2xl text-white mx-3">
          <BsPersonCircle />
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex justify-between border-t border-black bg-242527 p-4 sticky bottom-0">
      <button className="rounded-lg bg-08D9D6 text-white  px-3 py-2 ml-5">
        New question
      </button>
    </div>
  );
};

export { Header, Footer };
