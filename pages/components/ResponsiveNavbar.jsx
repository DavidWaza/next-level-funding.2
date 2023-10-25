import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";
import { Container } from "@mui/material";

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar fixed top-0 right-0 left-0 2xl:px-[10rem]">
        <div className="navbar-start  py-4">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link href="/about-us">About Us</Link>
              <Link href="/trading-rules">How Funding Works</Link>
              <Link href="/#faq">FAQ</Link>
              <Link href="/contact-us">Help Center</Link>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <img
              src="/assets/logo.png"
              className="h-auto xl:w-44 w-28 px-4"
              alt=""
            />
          </Link>
        </div>
        <div
          class="items-center justify-between hidden xl:flex md:w-auto md:order-0"
          id="navbar-sticky"
        >
          <div className=" w-[500px] text-center flex space-x-7 text-white backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-30 border rounded-full py-2 px-4 border-slate-500 bg-blend-overlay lexend">
            <Link href="/about-us">About Us</Link>
            <Link href="/trading-rules">How Funding Works</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/contact-us">Help Center</Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="hidden 2xl:block">
          <Button
            className="bg-[#295cf7] border-none lexend"
            text="get funded"
            showArrow={true}
          />
          </div>
          
          <div className="2xl:hidden block">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 mr-[10rem]"
            >
              <Link href="/about-us">About Us</Link>
              <Link href="/trading-rules">How Funding Works</Link>
              <Link href="/#faq">FAQ</Link>
              <Link href="/contact-us">Help Center</Link>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveNavbar;
