import React from 'react'
import Button from './Button'

const GetInTouch = () => {
  return (
    <div>
         <section className="my-[10rem] hidden lg:block">
              <div className="relative top-0">
              <img src="/assets/rec.svg" className="w-full h-auto " alt="" />
              <div className="absolute lg:top-[10%] z-10 left-[4%]">
                <p className=" lexend uppercase text-slate-400  text-sm px-3 ">
                  we would love to hear from you
                </p>
                <p className="space-grotesk font-bold text-[1.9rem] xl:text-[2.7rem]">
                  Get in touch with us
                </p>
                <div className="flex gap-5 mt-6">
                  <div className="border-none border bg-slate-700 rounded-full p-3">
                    <img src="/assets/bulb.svg" className="w-5 h-auto" alt="" />
                  </div>
                  <div className="border-none border bg-slate-700 rounded-full p-3">
                    <img src="/assets/mail.svg" className="w-5 h-auto" alt="" />
                  </div>
                </div>
                <p className="lg:w-1/2 mt-5 lexend font-thin">
                  Have a question that wasn’t answered in our FAQs page ? Reach
                  out to us and we will be happy to answer your questions
                </p>
                <div className="mt-[2rem]">
                  <Button
                    className="backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-30 border border-slate-500 w-1/5"
                    text="learn more"
                  />
                </div>
              </div>
              <div className="absolute bottom-[30%] left-[50%]">
                <img
                  src="/assets/woman-sitting.svg"
                  className="w-3/4 h-auto"
                  alt=""
                />
              </div>
              </div>
            </section>
    </div>
  )
}

export default GetInTouch