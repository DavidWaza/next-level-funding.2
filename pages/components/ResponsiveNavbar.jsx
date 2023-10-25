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
    <Container maxWidth="xl">
      <nav class=" fixed w-full z-20 top-0 left-0 dark:border-gray-600 px-4">
        <div class="max-w-screen-2xl w-full flex flex-wrap items-center justify-between mx-auto py-4">
          <Link href="/" class="flex items-center">
            <img
              src="/assets/logo.png"
              className="h-auto xl:w-44 w-28 px-4"
              alt="Flowbite Logo"
            />
          </Link>
          <div class=" flex md:order-2 gap-9">
            <Button
              className="bg-[#295cf7] border-none lexend"
              text="get funded"
              showArrow={true}
            />
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center z-0 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="true"
              onClick={toggleMenu}
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
          </div>
            <div>
              {isMenuOpen && (
                <div className="flex flex-col items-center justify-center bg-slate-900 w-screen py-4 px-6 mt-4">
                  <Link href="/about-us">About Us</Link>
                  <Link href="/trading-rules">How Funding Works</Link>
                  <Link href="/#faq">FAQ</Link>
                  <Link href="/contact-us">Help Center</Link>
                </div>
              )}
            </div>
          <div
            class="items-center justify-between hidden w-full xl:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <div className="flex space-x-7 text-white backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-30 border rounded-full py-2 px-10 border-slate-500 bg-blend-overlay lexend">
              <Link href="/about-us">About Us</Link>
              <Link href="/trading-rules">How Funding Works</Link>
              <Link href="#faq">FAQ</Link>
              <Link href="/contact-us">Help Center</Link>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default ResponsiveNavbar;
