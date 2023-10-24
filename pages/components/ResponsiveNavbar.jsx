import React from "react";
import Button from "./Button";
import Link from "next/link";

const ResponsiveNavbar = () => {
  return (
    <div className="">
      <nav class=" fixed w-full bg-[transparent] border-gray-200  z-10">
        <div class=" 2xl:px-[5rem] flex flex-wrap items-center justify-between 2xl:mx-auto p-4">
          <Link href="/" class="flex items-center">
            <img
              src="/assets/logo.png"
              class="h-auto w-42"
              alt="Flowbite Logo"
            />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="menu-03">
                <path
                  id="Vector"
                  d="M13.3334 6.66666H26.6667"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M5.33337 16H26.6667"
                  stroke="#3658C1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M5.33337 25.3333H18.6667"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </button>
          <div className=" hidden w-full md:block md:w-auto" id="navbar-default">
            <div className="flex space-x-7 text-white backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-30 border rounded-full py-2 px-10 border-slate-500 bg-blend-overlay lexend">
              <Link href="/about-us">About Us</Link>
              <Link href="/trading-rules">How Funding Works</Link>
              <Link href="#faq">FAQ</Link>
              <Link href="/contact-us">Help Center</Link>
            </div>
          </div>
          <div className="hidden w-full md:block md:w-auto 2xl:flex gap-4" id="navbar-default">
            <Button
              className=" border border-blue-700 lexend"
              text="Dashboard"
              showArrow={true}
            />
             <Button
              className="bg-[#3658C1] border-none lexend"
              text="get funded"
              showArrow={true}
            />
          </div>
          
        </div>
      </nav>
    </div>
  );
};

export default ResponsiveNavbar;
