"use client";
import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { IoIosSearch, IoMdMenu, IoMdClose } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { LuMenuSquare } from "react-icons/lu";
import Link from "next/link";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full  mt-1 md:mt-0 ">
      <div className="w-full md:w-full mx-auto ">
        <div className="flex items-center justify-between gap-3 h-16">
          <div className="hidden md:flex items-center space-x-4">
            <TextField
              label="Search"
              sx={{ width: "400px" }}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IoIosSearch className="text-2xl" />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center gap-2">
              <IoCallOutline className="text-2xl" />
              <div className="flex flex-col">
                <span className="text-xs">Live chat or call</span>
                <span className="text-sm font-semibold">+91 7736447760</span>
              </div>
            </div>
            <Link href={"/wishList"} className="text-xl">
              <FaRegHeart />
            </Link>
            <BsCart className="text-xl" />
            <FaRegUser className="text-xl" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">
              Login
            </button>
          </div>

          {/* <div className="md:hidden flex items-center space-x-4">
            <TextField
              label="Search"
              size="small"
              sx={{ width: "350px" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IoIosSearch className="text-xl" />
                  </InputAdornment>
                ),
              }}
            />
          </div> */}
          <input
            type="text"
            placeholder="Search"
            className=" w-[100%] block md:hidden  border border-black rounded-lg  md:w-auto py-2 px-2"
          />
          <button
            className="text-3xl block md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <LuMenuSquare className=" text-black" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Slider */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-4 flex flex-col h-full">
          <button
            className="text-2xl self-end mb-8"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <IoMdClose />
          </button>
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              <IoCallOutline className="text-2xl" />
              <div className="flex flex-col">
                <span className="text-xs">Live chat or call</span>
                <span className="text-sm font-semibold">+91 7736447760</span>
              </div>
            </div>
            <Link href={"/wishList"} className="text-xl">
              <FaRegHeart />
            </Link>
            <BsCart className="text-xl" />
            <FaRegUser className="text-xl" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
