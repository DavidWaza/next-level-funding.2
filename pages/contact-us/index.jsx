import React from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";

const ContactUs = () => {
  return (
    <main className="w-full body-bg pt-[5rem] text-white 2xl:h-[70vh] h-full">
      <div className="grid items-center justify-center py-[5rem]">
        <p className=" lexend uppercase text-slate-400  text-sm px-3 mt-[6rem] text-center">
          we would love to hear from you
        </p>
        <p className="space-grotesk font-bold text-[2rem] lg:text-[3rem] text-center">
          Online Assistant Portal
        </p>
        <p className="w-3/4 lexend text-center m-auto font-extralight">
          Passionate about solving problems through creative communications.
          Offering straight forward solutions
        </p>
      </div>
      <div className="home-bg py-[10rem]">
        <div className="flex items-center justify-center">
          <div className="grid 2xl:grid-cols-2  grid-cols-none gap-10 ">
            <div className="grid grid-rows-3 gap-7">
              <div className="flex items-center 2xl:justify-start justify-center bg-white bg-opacity-5 px-5 backdrop-blur-sm text-white border shadow-lg rounded-2xl border-slate-500 bg-blend-overlay">
                <img
                  src="/assets/call.svg"
                  className="2xl:w-[3.5rem] w-10 h-auto border-none border bg-slate-700 rounded-full p-3"
                  alt=""
                />
                <span className="lexend font-bold 2xl:text-2xl text-lg ml-3">
                  +35385857806345
                </span>
                <div className="flex-col ml-3">
                  {/* <p className="lexend">
                    Please feel free to contact us via the phone number above.
                    We are here to help!
                  </p> */}
                </div>
              </div>
              <div className="flex items-center 2xl:justify-start justify-center bg-white bg-opacity-5 px-5 backdrop-blur-sm text-white border shadow-lg rounded-2xl border-slate-500 bg-blend-overlay">
                <img
                  src="/assets/mail.svg"
                  className="2xl:w-14 w-10 h-auto border-none border bg-slate-700 rounded-full p-3"
                  alt=""
                />
                <span className="lexend font-bold 2xl:text-2xl text-lg ml-3">
                  Nextlevelfundingfx@gmail.com
                </span>
              </div>
            </div>
            <div className="grid grid-rows-3 gap-7">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered rounded-xl p-3 2xl:w-[30rem] w-full"
              />
              <input
                type="text"
                placeholder="Email address"
                className="input input-bordered rounded-xl p-3 2xl:w-[30rem] w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered rounded-xl p-3 2xl:w-[30rem] w-full"
              />
              <textarea
                className="textarea textarea-bordered rounded-xl p-3 2xl:w-[30rem] w-full h-[10rem]"
                placeholder="Bio"
              ></textarea>
              <div className="flex justify-end">
                <Button className="" text="Send message" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="2xl:px-[7rem]">
        <Footer />
      </section>
    </main>
  );
};

export default ContactUs;
