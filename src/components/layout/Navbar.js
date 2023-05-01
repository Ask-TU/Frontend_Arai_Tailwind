import React, { useState } from "react";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import NewClass from "@/components/home-page/NewClass";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "@/redux/slices/publicSlice";
import { setClass } from "@/redux/slices/fetchSlice";

const Navbar = () => {
  const token = getCookie('token');
  const dispatch = useDispatch();
  // const classData = useSelector((state) => state.fetchData.class);

  // const [path, setPath] = useState("");
  // const [isLoading, setLoading] = useState(true);
  // useEffect(() => {
  //   if (isLoading) {
  //     dispatch(setToken(token));
  //     console.log(publicSlice.token);
  //     setPath('/api/getAllClass/' + token);
  //     getAllClass();
  //     setLoading(false);
  //   }
  // }, [isLoading]);
  const [path, setPath] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [classData, setClassData] = useState([])
  useEffect(() => {
    setPath('/api/getAllClass/' + token);  
    console.log("set patch!")
    const getAllClass = async () => {
      try {
        setLoading(true)
        const response = await fetch(path, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        })
        const json = await response.json()
        // dispatch(setClass(json))
        setClassData(json)
        console.log(json)
      } catch(err) {
        console.log(err)
      } finally {
        console.log("get class data!")
        setLoading(false)
      }
    }
    getAllClass();
  }, []);

  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  // const getAllClass = async () => {
  //   await fetch(path, requestOptions)
  //     .then(response => {
  //       response.json()
  //           .then(data => {
  //             classData.push(data);
  //             console.log(data);
  //           });
  //   })
  //   .catch (error => {
  //     console.error(error);
  //   }) 
  // }  
  // const classData = [
  //   {class: "SF340"},
  //   {class: "SF341"},
  //   {class: "SF342"},
  //   {class: "SF343"},
  // ]

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
          {classData && classData.map((items)=>(
            <Link
              href={"/class"}
              className="flex justify-center rounded-lg hover:bg-08D9D6"
            >
              <button className="p-2" key={items.total_count}>{items.total_count}</button>
            </Link>
          ))}
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
