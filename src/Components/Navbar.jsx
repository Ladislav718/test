import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [otvor, setOtvor] = useState(false);

  const otvorNaClick = () => {
    setOtvor(!otvor);
  };

  console.log(otvor);

  return (
    <div className="">
      {/* LAPTOP MENU */}
      <div className="">
        <div className="hidden md:flex  h-16 justify-around items-center w-full bg-black text-white ">
          <h1>LOGO</h1>
          <ul className="flex space-x-10 items-center ">
            <li className="rounded bg-yellow-300 p-4">home</li>
            <li>about</li>
            <li>shop</li>
          </ul>
        </div>
      </div>

      {/* MOBIL */}
      <div className="md:hidden ">
        <button
          onClick={otvorNaClick}
          className="absolute top-4 right-4 bg-black p-4"
        ></button>

        {otvor ? (
          <div className="w-[300px] bg-black h-screen ">true</div>
        ) : (
          "false"
        )}
      </div>
    </div>
  );
};

export default Navbar;
