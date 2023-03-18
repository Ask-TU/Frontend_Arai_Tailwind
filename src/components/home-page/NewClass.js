import React, { useState } from "react";

const NewClass = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglemodal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center">
      <button
        className="
      flex 
      justify-center
      text-08D9D6 
      hover:text-white"
        onClick={() => togglemodal()}
      >
        New Class
      </button>

      {isOpen && (
        <div class="fixed z-20 inset-0 overflow-y-auto">
          <div class="flex items-center justify-center min-h-screen">
            <div class="fixed inset-0 bg-272727 bg-opacity-75 backdrop-blur">
              <div
                class="relative bg-242527 text-white rounded-lg max-w-2xl top-1/2 left-1/2 
                transform -translate-x-1/2 -translate-y-1/2 p-5 drop-shadow-lg"
              >
                <div className="flex items-start text-lg font-bold mb-5">
                  <text>New Class</text>
                </div>

                <label className="flex w-full">
                  <input
                    className="placeholder:font-bold 
                    placeholder:text-slate-400 
                    placeholder:text-sm block 
                    bg-636363 w-full rounded-lg py-2 px-4 shadow-sm 
                    focus:outline-none 
                    focus:border-sky-500 
                    focus:ring-sky-500 
                    focus:ring-1 
                    sm:text-sm
                    mb-3"
                    placeholder="Class Name"
                    type="text"
                    name="search"
                  />
                </label>

                <label className="flex w-full">
                  <input
                    className="placeholder:font-bold 
                    placeholder:text-slate-400 
                    placeholder:text-sm block 
                    bg-636363 w-full rounded-lg py-2 px-4 shadow-sm 
                    focus:outline-none 
                    focus:border-sky-500 
                    focus:ring-sky-500 
                    focus:ring-1 
                    sm:text-sm
                    mb-3"
                    placeholder="Sec"
                    type="text"
                    name="search"
                  />
                </label>

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
                    className="text-white text-lg bg-08D9D6 w-fit py-1 px-4 rounded-lg mt-3 
                    hover:bg-white 
                    hover:text-08D9D6
                    active:bg-white"
                    onClick={() => togglemodal()}
                  >
                    Create
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

export default NewClass;