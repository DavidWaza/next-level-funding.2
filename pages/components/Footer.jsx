import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-9 bg-[transparent] pt-4 lg:px-[12rem] px-[0rem] text-white">
      <div className="flex justify-center">
        <div className=" lg:hidden">
          <img src="/assets/logo.png" alt="" className="w-32 h-auto" />
          <div className="flex gap-5 mt-6 hidden lg:block">
            <div className="border-none border bg-slate-700 rounded-full p-3">
              <img src="/assets/bulb.svg" className="w-5 h-auto" alt="" />
            </div>
            <div className="border-none border bg-slate-700 rounded-full p-3">
              <img src="/assets/mail.svg" className="w-5 h-auto" alt="" />
            </div>
          </div>
        </div>
      </div>
      <footer className="flex md:flex-row space-y-2 md:space-y-0 px-4 py-10 text-base-content">
        <div className="flex items-start">
          <div className="hidden lg:flex items-center justify-center gap-6">
            <img src="/assets/logo.png" alt="" className="w-32 h-auto " />
            <Link href="">
              <img
                src="/assets/ig.png"
                className="w-[80px] h-auto bg-slate-700 p-2 rounded-full"
              />
            </Link>
            <Link href="">
              <img
                src="/assets/email.png"
                className="w-[80px] h-auto bg-slate-700 p-2 rounded-full"
              />
            </Link>
          </div>
        </div>
        <div className="flex items-end w-full justify-center lg:justify-end gap-1">
          <nav className="flex lexend text-[10px] lg:text-[15px] text-white">
            <Link
              href="/cookie-policy"
              className="link link-hover  border-r border-slate-200 px-2"
            >
              Cookie Policy
            </Link>
            <Link
              href="/privacy-policy"
              className="link link-hover  border-r border-slate-200 px-2"
            >
              Privacy Policy
            </Link>
            <Link
              href="/refund-policy"
              className="link link-hover  border-r border-slate-200 px-2"
            >
              Refund Policy
            </Link>
            <Link href="/terms-of-service" className="link link-hover px-2">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
      <p className="mx-4 xl:text-justify text-white opacity-70 lexend text-[10px] lg:text-sm px-10 text-center lg:text-left lg:px-0">
        All information provided on this site is intended solely for the study
        purposes related to trading on financial markets and does not serve in
        any way as a specific investment recommendation, business
        recommendation, investment opportunity analysis or similar general
        recommendation regarding the trading of investment instruments.
      </p>
      <div className="h-[0.5px] opacity-80 bg-white my-8 mx-4" />
      <div className="lg:flex lg:justify-between text-center my-8">
        <div>
          <nav className="flex justify-center lexend text-[10px] mt-7 lg:text-[15px]">
            <Link
              href="/about-us"
              className="link link-hover  border-r border-slate-200 px-4"
            >
              About us
            </Link>
            <Link
              href="/trading-funds"
              className="link link-hover  border-r border-slate-200 px-4"
            >
              Trading Funds
            </Link>
            <Link
              href="/#faq"
              className="link link-hover  border-r border-slate-200 px-4"
            >
              FAQ
            </Link>
            <Link href="/contact-us" className="link link-hover px-4">
              Help Center
            </Link>
          </nav>
        </div>
        <p className="mx-4 text-white text-center lexend text-[12px] lg:text-sm mt-7">
            2023 © - Next Level Funding - Powered by OTB Solutions{" "}
          </p>
      </div>

      <div className="flex gap-5 py-6 justify-center lg:hidden">
        <Link href="">
          <img
            src="/assets/ig.png"
            className="w-[50px] h-auto bg-slate-700 p-2 rounded-full"
          />
        </Link>
        <Link href="">
          <img
            src="/assets/email.png"
            className="w-[50px] h-auto bg-slate-700 p-2 rounded-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
