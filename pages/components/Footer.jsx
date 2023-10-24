const Footer = () => {
  return (
    <div className="mt-9">
      <footer className="footer p-10 bg-[transparent]">
        <aside>
          <img src="/assets/logo.png" className="" alt="" />
          <div className="flex gap-5 mt-6">
            <div className="border-none border bg-slate-700 rounded-full p-3">
              <img src="/assets/bulb.svg" className="w-5 h-auto " alt="" />
            </div>
            <div className="border-none border bg-slate-700 rounded-full p-3">
              <img src="/assets/discord.svg" className="w-5 h-auto " alt="" />
            </div>
            <div className="border-none border bg-slate-700 rounded-full p-3">
              <img src="/assets/mail.svg" className="w-5 h-auto " alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="lexend mt-2 text-slate-400 ">
              All information provided on this site is intended solely for the
              study purposes related to trading on financial markets and does
              not serve in any way as a specific investment recommendation,
              business recommendation, investment opportunity analysis or
              similar general recommendation regarding the trading of investment
              instruments.
            </p>
          </div>
        </aside>
        <nav className="lexend">
          <header className="footer-title text-white">Useful Links</header>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Terms of Service</a>
        </nav>
        <nav className="ml-10 lexend">
          <header className="footer-title text-white text">Legal</header>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Return Policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
