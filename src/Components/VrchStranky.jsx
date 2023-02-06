import React from "react";

// dievca to je moje pomenovanie
import dievca from "../Obrazky/img1.jpg";
import dievca2 from "../Obrazky/irena.webp";
import dievca3 from "../Obrazky/retrato.jpg";
import kvety from "../Obrazky/bylinky.jpg";

import { AiFillStar } from "react-icons/ai";
const VrchStranky = () => {
  return (
    <div>
      <div className="mx-auto  flex">
        <div className="w-1/2 flex flex-col ">
          <h1 className="text-5xl font-extrabold text-center">
            {/* <br/> zapis do noveho riadku */}
            We Are Cella <br />
            Agriculture
          </h1>
          <h2 className="text-2xl text-center my-10">
            we belive in Future of Food is here
          </h2>
          <div className="flex  w-fit mx-auto shadow-lg rounded-full border border-blue-200 ">
            <input
              className="pl-10 mr-16 rounded-l-full"
              type="text"
              placeholder="What are you looking for ?"
            />
            <button className="bg-green-700 p-4 px-10 rounded-full">
              Search
            </button>
          </div>
          <div className="flex space-x-20 justify-center mt-10 ">
            <div className="flex -space-x-6">
              <img
                src={dievca}
                alt="foto1"
                className="w-[100px] h-[100px] rounded-full border border-black "
              />
              <img
                src={dievca2}
                alt="foto2"
                className="w-[100px] h-[100px] rounded-full border border-black "
              />
              <img
                src={dievca3}
                alt="foto1"
                className="w-[100px] h-[100px] rounded-full border border-black"
              />
            </div>
            <div className="">
              <AiFillStar size={60} className="text-lime-600 my-4 " />
            </div>
            <div className="flex flex-col justify-center">
              <h3>Join our comunity</h3>
              <p> We are waiting for you</p>
            </div>
          </div>
        </div>

        <div className="flex w-1/2 h-1/4  ">
          <AiFillStar size={60} className="text-yellow-400 mx-16 mt-2 " />

          <div className="w-[150px] h-[150px] rounded-full   bg-yellow-400 z-10 "></div>
          <img
            src={kvety}
            alt="bylinky"
            id="obrazok"
            className=" ml-20 mt-2  w-[250px] h-[350px] "
          />
        </div>
      </div>

      <div className=" flex justify-center">
        <h1 className="text-4xl font-bold mt-20">
          Trust by overs 20,000 Partners
        </h1>
      </div>
    </div>
  );
};

export default VrchStranky;
