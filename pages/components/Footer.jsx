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
        </aside>
        <nav className="lexend">
          <header className="footer-title text-white">Useful Links</header>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Terms of Service</a>
        </nav>
        <nav className="mr-0 lexend">
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
