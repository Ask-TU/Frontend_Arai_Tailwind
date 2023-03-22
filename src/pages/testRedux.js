import { increment, decrement, changeLog } from "@/redux/slices/counterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const testRedux = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleLog = () => {
    dispatch(changeLog());
  };

  return (
    <div className="text-white">
      <text className="text-2xl font-black">Test Redux Page.</text>
      <div className="flex flex-col">
        <text>Counter : {counter.count}</text>
        {counter.loading === true ? (
          <text>this is high-secure message.</text>
        ) : (
          <text>You need to sign in to see the content.</text>
        )}

        <button
          className="flex justify-start border w-fit p-1 my-2"
          onClick={() => handleIncrement()}
        >
          increment
        </button>
        <button
          className="flex justify-start border w-fit p-1"
          onClick={() => handleDecrement()}
        >
          decrement
        </button>

        <button
          className="flex justify-start border w-fit p-1 mt-2"
          onClick={() => handleLog()}
        >
          {counter.loading === true ? "LogOut" : "LogIn"}
        </button>
      </div>
    </div>
  );
};

export default testRedux;
