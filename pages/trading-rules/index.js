import React from "react";
import AccordionComponent from "../components/AccordionComponent";
const TradingRules = () => {
  return (
    <main className="w-full body-bg pt-[5rem] text-white 2xl:h-[70vh] h-full">
      <div className=" grid items-center justify-center py-[5rem]">
        <p className=" lexend uppercase text-slate-400  text-sm px-3 mt-[6rem] text-center">
          next level funding
        </p>
        <p className="space-grotesk font-bold text-[3rem] text-center">
          Trading Rules
        </p>
        <p className="w-3/4 lexend text-center m-auto font-extralight">
          Passionate about solving problems through creative communications.
          Offering straight forward solutions
        </p>
      </div>
      <div className="home-bg py-[10rem] 2xl:px-[20rem] px-[2rem]">
        <section>
          <div className="flex items-center ">
            <p className="text-4xl lexend font-medium text-left">
              Evaluation Phase
            </p>
          </div>
          <div>
            <AccordionComponent
              header="1. Trading Restrictions"
              text="We allow you to trade any news event you like, which is not a problem, you can open and close trades during the news if you like and also hold it over the weekend."
            />
            <AccordionComponent
              header="2. Risks"
              text="We allow you to trade any news event you like, which is not a problem, you can open and close trades during the news if you like and also hold it over the weekend."
            />{" "}
            <AccordionComponent
              header="3. Stop Loss and Take Profits"
              text="We allow you to trade any news event you like, which is not a problem, you can open and close trades during the news if you like and also hold it over the weekend."
            />
          </div>
        </section>
        <section className="pt-10">
          <div className="flex items-center ">
            <p className="text-4xl lexend font-medium text-left">
              Live Funded Account Rules
            </p>
          </div>
          <div>
            <AccordionComponent
              header="1. Required stop loss"
              text="We allow you to trade any news event you like, which is not a problem, you can open and close trades during the news if you like and also hold it over the weekend."
            />
            <AccordionComponent
              header="2. Holding trades over the weekend and news trading"
              text="We allow you to trade any news event you like, which is not a problem, you can open and close trades during the news if you like and also hold it over the weekend."
            />{" "}
            <AccordionComponent
              header="3. Consistency Rule"
              text="We allow you to trade any news event you like, which is not a problem, you can open and close trades during the news if you like and also hold it over the weekend."
            />
          </div>
        </section>
        <section className="mt-[4rem]">
          <div className="disclaimer">
            <div className="flex justify-center">
              <img
                src="/assets/alert-circle.svg"
                className="w-5 h-auto"
                alt=""
              />
              <span className="font-medium text-lg lexend">
                Important Notice
              </span>
            </div>
            <div>
              <p className="text-center lexend font-extralight mt-7">
                Trading signals are not permitted such as copying other people’s
                trades. Your trades need to be taken individually yourself, if
                we see multiple accounts taking the same trades with same SL and
                TP the accounts will be terminated.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TradingRules;
