import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  // const [navBackground, setNavBackground] = useState(false);

  return (
    <nav>
      <div
        className={` home-bg justify-between px-4 mx-auto lg:px-[12rem] lg:items-center lg:flex bg-[transparent]`}
      >
        <div>
          <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
            <Link href="/">
              <img src="/assets/logo.png" alt="" />
            </Link>
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border bg-white"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 hidden justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0`}
          >
            <div className="w-[500px]  text-center flex space-x-7 text-white backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-30 border rounded-full py-2 px-4 border-slate-500 bg-blend-overlay lexend">
              <Link href="/about-us">About Us</Link>
              <Link href="/trading-rules">How Funding Works</Link>
              <Link href="/#faq">FAQ</Link>
              <Link href="/contact-us">Help Center</Link>
            </div>
          </div>
          {navbar && (
            <div className="navbar-slide-out flex flex-col justify-center items-center px-10 py-5 gap-6 bg-black text-white lexend">
              <Link href="/about-us">About Us</Link>
              <Link href="/trading-rules">How Funding Works</Link>
              <Link href="/#faq">FAQ</Link>
              <Link href="/contact-us">Help Center</Link>
            </div>
          )}
        </div>
        <div className="hidden space-x-2 lg:inline-block">
          <Button
            className="bg-[#295cf7] border-none lexend hover:bg-blue-800"
            text="get funded"
            showArrow={true}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
