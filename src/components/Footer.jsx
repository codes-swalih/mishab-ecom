import { TextField } from "@mui/material";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { IoMailOutline } from "react-icons/io5";
import Link from "next/link";
import { MdEmail, MdPhone } from "react-icons/md";

function Footer() {
  return (
    <div className=" w-full mt-5 md:mt-0 py-20 md:py-10 md:px-20 px-5 h-auto bg-white">
      <div className=" flex flex-col gap-10">
        {/* <div className=" w-full  md:flex items-center justify-between">
          <div className=" flex items-center gap-2 md:w-1/2">
            <h1 className=" text-5xl font-bold">
              <IoMailOutline className="" />
            </h1>
            <div className=" flex flex-col">
              <h1 className=" uppercase text-lg font-bold">
                subscribe to our newsletter
              </h1>
              <h1 className=" text-gray-400 -mt-1 text-sm">
                Get all the information on events,sales and offers
              </h1>
            </div>
          </div>
          <div className=" flex items-center gap-2 md:w-1/2 mt-5 md:mt-0">
            <TextField label="Enter you email address" size="small" fullWidth />
            <div className=" text-white px-5 py-2 rounded-md bg-blue-500">
              <h1>Subscribe</h1>
            </div>
          </div>
        </div> */}
        {/* <hr className=" border border-gray-200" /> */}
        <div className=" md:flex items-end justify-between gap-10">
          <div className=" flex flex-col gap-2 w-2/3 text-sm">
            <Image
              src="/images/logo.png"
              className=" -mt-36"
              alt="logo"
              width={200}
              height={0}
            />
            <h1 className=" text-gray-400 -mt-32">
              Got a question? Call us 24/7
            </h1>
            <h2 className=" font-bold flex items-center gap-2">
              <MdEmail />
              Email: smeraasinnovate@gmail.com
            </h2>
            <h2 className=" font-bold flex items-center gap-2">
              <MdPhone />
              Phone: +91 8590318931
            </h2>
            <h1 className=" text-gray-400">
              9F ,sunpaul blueberry dezeria,Kakkanad,Ernakulam
            </h1>
            {/* <h1 className=" text-gray-400">Up icon coupen start</h1>
            <div className=" flex items-center gap-5 text-white mt-5">
              <div className=" px-2 py-2 rounded-full bg-black">
                <h1>
                  <FaFacebook className=" text-xl" />
                </h1>
              </div>
              <div className=" px-2 py-2 rounded-full bg-blue-500">
                <h1>
                  <FaWhatsapp className=" text-xl" />
                </h1>
              </div>
              <div className=" px-2 py-2 rounded-full bg-red-500">
                <h1>
                  <FaInstagram className=" text-xl" />
                </h1>
              </div>
              <div className=" px-2 py-2 rounded-full bg-yellow-500">
                <h1>
                  <FaTwitter className=" text-xl" />
                </h1>
              </div>
            </div> */}
          </div>

          {/* <div className=" md:w-1/4 flex flex-col gap-4 mt-10 md:mt-0">
            <h1 className=" font-semibold uppercase">Company</h1>
            <div className=" flex flex-col gap-3">
              <h1 className=" text-sm text-gray-500">About us</h1>
              <h1 className=" text-sm text-gray-500">Team member</h1>
              <h1 className=" text-sm text-gray-500">Career</h1>
              <h1 className=" text-sm text-gray-500">Contact us</h1>
              <h1 className=" text-sm text-gray-500">Affliate</h1>
              <h1 className=" text-sm text-gray-500">Order history</h1>
            </div>
          </div>
          <div className=" md:w-1/4 flex flex-col gap-4 mt-10 md:mt-0">
            <h1 className=" font-semibold uppercase">My Account</h1>
            <div className=" flex flex-col gap-3">
              <h1 className=" text-sm text-gray-500">Track my order</h1>
              <h1 className=" text-sm text-gray-500">View Cart</h1>
              <h1 className=" text-sm text-gray-500">Sign in</h1>
              <h1 className=" text-sm text-gray-500">Help</h1>
              <h1 className=" text-sm text-gray-500">My Wallet</h1>
              <h1 className=" text-sm text-gray-500">Privacy policy</h1>
            </div>
          </div> */}
          <div className=" md:w-1/4 flex flex-col gap-4 mt-10 md:mt-0">
            <h1 className=" font-semibold uppercase"></h1>
            <div className=" flex flex-col gap-3">
              <Link href="/pages/privacy_policy">
                <h1 className=" text-sm text-gray-500">Privacy & policy</h1>
              </Link>
              <Link href="/pages/refund_policy">
                <h1 className=" text-sm text-gray-500">
                  Refund & return policy
                </h1>
              </Link>
              <Link href="/pages/terms_conditions">
                <h1 className=" text-sm text-gray-500">Terms & conditions</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
