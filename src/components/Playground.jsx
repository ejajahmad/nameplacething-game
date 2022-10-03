import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context/StateContext";

const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function Playground() {

const {loginData} = useStateContext();

  useEffect(() => {
    console.log(Math.trunc(Math.random() * alphabets.length));
  }, []);

  return (
    <div className="">
      <h1 className=" text-sm text-red-500">WORD is {alphabets[Math.trunc(Math.random() * alphabets.length)].toUpperCase()}</h1>
      <p className=" text-sm text-green-500">{loginData.username} score: 10</p>
      <p className=" text-sm ">Player 2 score: 10</p>

      <div className="p-5 bg-gray-200 bg-opacity-5 mt-5 ">
        
      </div>
    </div>
  );
}

export default Playground;
