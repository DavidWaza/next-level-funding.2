import React from "react";
import GlassMorph from "./GlassMorph";

const TradePotential = () => {
  return (
    <div>
      <section className="lg:py-[10rem] grid flex-col justify-center items-center px-[2rem] py-[2rem]">
        <p className="lexend uppercase text-slate-400 text-center text-sm">
          Unlock your trading potential with our leading propritary trading firm
        </p>
        <p className="font-bold space-grotesk 2xl:text-6xl text-3xl text-center mt-3">
          Your success, Our success
        </p>
        <div className="grid lg:grid-cols-3 my-10 gap-4 lg:px-0">
          <GlassMorph
            prefix="$"
            start={100}
            end={200}
            suffix="M+"
            desc="Total Payout"
          />
          <GlassMorph start={0} end={5} suffix="hrs" desc="Avg. Payout Time" />
          <GlassMorph start={0} end={100} suffix="K+" desc="Traders Funded" />
        </div>
      </section>
    </div>
  );
};

export default TradePotential;
