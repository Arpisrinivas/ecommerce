import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCartLine, RiMenuLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { kart } = useSelector((state) => state.kart1);
  let count = 0;
  kart.map((k) => {
    count += k.count;
    return "";
  });

  return (
    <>
      <div className="w-full bg-blue-500 flex justify-between px-5 py-3  fixed ">
        <div className="flex ">
          <Link to="/">
            <h2 className="font-mono text-xl ">FakeStore</h2>
          </Link>
          <ul className="sm:flex sm:list-none sm:m-0 sm:px-4 hidden "  data-testid={"button"+i}>
            >
            <li className="mx-3 hover:bg-blue-400 px-3 rounded text-white">
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li className="mx-3 hover:bg-blue-400 px-3 rounded text-white">
              <Link to="/aboutUs">About Us</Link>
            </li>
          </ul>
        </div>

        <div className="flex sm:justify-end  w-30 ">
          <Link to="/kart" className="mr-6 h-6 w-12 flex justify-start" >

            <RiShoppingCartLine className="text-xl hover:text-white inline-block" />

            {kart.length > 0 && (
              <span className="text-xs px-1 pb-0 max-h-4 rounded-full bg-red-600 inline-block">
                {count}
              </span>
            )}
          </Link>
          <form>
            <input
              type="search"
              className="rounded focus:ring-black focus:ring-2 outline-none px-2 w-20"
              placeholder="Search Products"
            />
          </form>
          <RiMenuLine
            className="sm:hidden visible cursor-pointer text-xl ml-4 hover:text-white"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      <div
        className={`sm:hidden my-12 fixed   ${
          open ? "w-full bg-blue-500" : "hidden"
        }`}>
        <hr />
        <ul className="flex flex-col p-2">
          <li className=" ">
            <Link
              to="/"
              className="mx-3 hover:bg-blue-400 px-3 rounded text-white block">

              Home
            </Link>
          </li>
          <li className="">
            <Link
              to="/aboutUs"
              className="mx-3 hover:bg-blue-400 px-3 rounded text-white block">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
