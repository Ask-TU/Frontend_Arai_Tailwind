import React from "react";
import { HiFilter } from "react-icons/hi";
import {AiOutlineSearch} from "react-icons/ai"

const Search = () => {
  return (
    <label className="flex w-full">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
      </span>
      <input
      
        className="placeholder:italic placeholder:text-slate-400 block bg-636363 w-full rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Search"
        type="text"
        name="search"
      />

      <button className="rounded-lg bg-3D3D3D text-white ml-3 px-4">
        <HiFilter />
      </button>
    </label>
  );
};

export default Search;
