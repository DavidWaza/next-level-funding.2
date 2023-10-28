import React from "react";
import PriceCard from "./PriceCard";
import { PriceLists } from "@/lib/data";
import Button from "./Button";
import Link from "next/link";

const PriceComponent = () => {
  return (
    <div className="px-[1.3rem]" id="evaluation-package">
      <section className="grid flex-col justify-center items-center pt-[7rem]">
        <p className="lexend uppercase text-slate-400 text-center text-sm px-3">
          Tailored Solutions to Amplify Your Trading Success
        </p>
        <p className="font-bold space-grotesk 2xl:text-6xl text-3xl text-center mt-3 px-3">
          Our Evaluation Packages
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-3">
          {PriceLists.map((pricelist, index) => (
            <div key={index} className="price-card">
              <PriceCard
                packageNum={pricelist.pack}
                value={pricelist.value}
                valPrep={pricelist.valPrep}
                listOne={pricelist.listOne}
                listTwo={pricelist.listTwo}
                listThree={pricelist.listThree}
                listFour={pricelist.listFour}
                link={pricelist.link}
              />
            </div>
          ))}
        </div>
        <div className="2xl:flex block justify-center my-8">
          <Link href="/trading-rules">
            <Button
              className="backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-30 border border-slate-500 mx-auto"
              text="read trading rules"
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PriceComponent;
