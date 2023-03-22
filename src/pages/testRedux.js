import { increment, decrement } from "@/redux/slices/counterSlice";
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

  return (
    <div className="text-white">
      <text className="text-2xl font-black">Test Redux Page.</text>
      <div className="flex flex-col">
        <text>Counter : {counter.count}</text>
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
      </div>
    </div>
  );
};

export default testRedux;
