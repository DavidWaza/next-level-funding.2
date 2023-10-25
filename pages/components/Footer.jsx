import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-9 bg-[transparent] pt-4">
      <div className="flex justify-center">
        <div className="block lg:hidden">
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
      <footer className="flex md:flex-row space-y-2 md:space-y-0 px-4 md:px-24 py-10 text-base-content">
        <div className="flex flex-col items-start">
          <div className="hidden lg:block">
            <img src="/assets/logo.png" alt="" className="w-32 h-auto" />
            <div className="flex gap-5 mt-6">
              <div className="border-none border bg-slate-700 rounded-full p-3">
                <img src="/assets/bulb.svg" className="w-5 h-auto" alt="" />
              </div>
              <div className="border-none border bg-slate-700 rounded-full p-3">
                <img src="/assets/mail.svg" className="w-5 h-auto" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-end w-full justify-center lg:justify-end gap-10">
          <nav className="flex flex-col justify-end lexend">
            <header className="text-white">Useful Links</header>
            <Link href='/about-us' className="link link-hover">About Us</Link>
            <Link href='/contact-us' className="link link-hover">Help center</Link>
            <Link href='/terms-of-service' className="link link-hover">Terms of Service</Link>
          </nav>
          <nav className="flex flex-col lexend">
            <header className="text-white">Legal</header>
            <Link href="/privacy-policy" className="link link-hover">Privacy Policy</Link>
            <Link href='/' className="link link-hover">Return Policy</Link>
            <Link href='/cookie-policy' className="link link-hover">Cookie Policy</Link>
          </nav>
        </div>
      </footer>

      <p className="mx-4 md:mx-24 xl:text-justify text-white opacity-70 lexend text-[10px] lg:text-sm">
        All information provided on this site is intended solely for the study
        purposes related to trading on financial markets and does not serve in
        any way as a specific investment recommendation, business
        recommendation, investment opportunity analysis or similar general
        recommendation regarding the trading of investment instruments.
      </p>
      <div className="h-[0.5px] opacity-80 bg-white my-8 mx-4 md:mx-24" />

      <p className="mx-4 text-white text-center my-8 lexend text-[12px] lg:text-sm">
        2023 © - Next Level Funding - Powered by Waza & Mills{" "}
      </p>
      <div className="flex gap-5 py-6 justify-center lg:hidden">
        <div className="border-none border bg-slate-700 rounded-full p-3">
          <img src="/assets/bulb.svg" className="w-4 h-auto" alt="" />
        </div>
        <div className="border-none border bg-slate-700 rounded-full p-3">
          <img src="/assets/mail.svg" className="w-4 h-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
