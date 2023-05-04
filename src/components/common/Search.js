import { useRouter } from "next/router";
import React, { useState } from "react";
import {HiOutlineDocumentSearch} from 'react-icons/hi'
import { getCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setSearchResult } from "@/redux/slices/publicSlice";

const Search = () => {
  const publicSlice = useSelector((state) => state.publicData);
  const router = useRouter();
  const dispatch = useDispatch();
  const token = getCookie('token');
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'token': token ?? ''},
    body: JSON.stringify({
        "subject_name": publicSlice.search,
    })
  };
  const search = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v2/classrooms/search', requestOptions);
      const json = await response.json();
      console.log(json.result.data);
      dispatch(setSearchResult(json.result.data))
      router.push('/result');
    } catch (err) {
      console.log(err);
    }
    
  }
  return (
    <label className="flex w-full">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
      </span>
      <input
        className="placeholder:italic placeholder:text-slate-400 text-white block bg-636363 w-full rounded-full py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Search"
        type="text"
        name="search"
        value={publicSlice.search}
        onChange={(e)=>dispatch(setSearch(e.target.value))}
      />
      <button className="text-2xl text-white mx-3" onClick={()=>search()}>
        <HiOutlineDocumentSearch />
      </button>
    </label>
  );
};

export default Search;
