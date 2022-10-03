import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/StateContext";
import Login from "./components/Login";
import Playground from "./components/Playground";

const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function App() {
  
  const {isLogin, setIsLogin} = useStateContext()
  useEffect(() => {
    console.log(Math.trunc(Math.random() * alphabets.length));
  }, []);

  return (
    <div className=" bg-[#2b1a29] text-white w-screen h-screen p-5">
      {isLogin ? <Playground /> : <Login/>}
    </div>
  );
}

export default App;
