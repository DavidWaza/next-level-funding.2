import Hero from "./components/Hero";
import GlassMorph from "./components/GlassMorph";
import GlassMorphCard from "./components/GlassMorphCard";
import Button from "./components/Button";
import PriceCard from "./components/PriceCard";
import AccordionComponent from "./components/AccordionComponent";
import Footer from "./components/Footer";
import MarqueeComponent from "./components/MarqueeComponent";
import { PriceLists, accordionContents } from "@/lib/data";
import MainCarousel from "./components/MainCarousel";
import { Container } from "@mui/material";
import ResponsiveNavbar from "./components/ResponsiveNavbar";

export default function Home() {
  return (
    <main className="h-full">
      <Hero />
      <div className="home-bg text-white">
        <div className="py-[3rem]"></div>
        <section className="2xl:py-[10rem] grid flex-col justify-center items-center px-[2rem] py-[2rem]">
          <p className="lexend uppercase text-slate-400 text-center text-sm">
            Unlock your trading potential with our leading propritary trading
            firm
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
            <GlassMorph
              start={0}
              end={5}
              suffix="hrs"
              desc="Avg. Payout Time"
            />
            <GlassMorph start={0} end={100} suffix="K+" desc="Traders Funded" />
          </div>
        </section>
        <Container maxWidth="xl">
          <section>
            <p className="lexend uppercase text-slate-400 text-sm text-center 2xl:text-left">
              TURNING TRADERS INTO CHAMPIONS – LET US INVEST IN YOUR SUCCESS.
            </p>
            <p className="font-bold space-grotesk 2xl:text-6xl text-3xl mt-3 text-center 2xl:text-left">
              Next Level Funding Benefits
            </p>
            <div className="grid lg:grid-cols-3 my-10 gap-10 lg:px-0">
              <GlassMorphCard
                img="/assets/Time-illustration.png"
                title="No Time Limits"
                text={`We do not have a certain amount of time limit for you to pass your one step evaluation. You have unlimited time to complete the phase and can trade without the stress of having to reach a target in a set amount of time.`}
                className="text-3xl"
              />
              <GlassMorphCard
                img="\assets\Computer-illustration.png"
                title="Lowest targets"
                text={`With our one step evaluation being only a 12% profit target we have one of the most competitive targets across all funding companies.`}
                className="text-3xl"
              />{" "}
              <GlassMorphCard
                img="\assets\iphone-illustration.png"
                title="Money back"
                text={`Get your money you paid for your evaluation account back once you reach your first profit split on your live account providing you did not pass with a HFT algorithm.`}
                className="text-3xl"
              />
            </div>
            <div className="flex justify-center">
              <Button
                className="backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-30 border border-slate-500 w-full"
                text="learn more"
              />
            </div>
            <section className=" grid flex-col justify-center items-center  2xl:block relative">
              {/* <div className="absolute left-[10rem] -top-[10rem] hidden xl:block">
                <img src="/assets/phone-illustration.png" className="" alt="" />
              </div>
              <MainCarousel /> */}
            </section>
            <section className=" grid flex-col justify-center items-center mt-[20rem]">
              <p className="lexend uppercase text-slate-400 text-center text-sm px-3">
                Tailored Solutions to Amplify Your Trading Success
              </p>
              <p className="font-bold space-grotesk 2xl:text-6xl text-3xl text-center mt-3 px-3">
                Our Evaluation Packages
              </p>
              <div className="mt-10 grid grid-cols-1 2xl:grid-cols-3 gap-5">
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
                    />
                  </div>
                ))}
              </div>
              <div className="mt-10 grid grid-cols-1 2xl:grid-cols-2 gap-5">
                  <PriceCard
                    className="bg-[#3658c1] price-card"
                    spanClassName="text-white"
                    packageNum="100k"
                    value="$ 600"
                    valPrep="A $100,000 One Step Evaluation Account"
                    listOne=" 5% DAILY DRAWDOWN"
                    listTwo="12% OVERALL DRAWDOWN"
                    listThree="12% PROFIT TARGET"
                    listFour="NO MINIMUM TRADING DAYS"
                  />
                  <PriceCard
                    className="bg-[#3658c1] price-card"
                    spanClassName="text-white"
                    packageNum="INSTANT FUNDING"
                    value="$ 575"
                    valPrep="$50,000 Instant instant funding"
                    listOne=" 5% DAILY DRAWDOWN"
                    listTwo="12% OVERALL DRAWDOWN"
                    listThree="12% PROFIT TARGET"
                    listFour="NO MINIMUM TRADING DAYS"
                  />
              </div>
              <div className="2xl:flex block justify-center my-8">
                <Button
                  className="backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-30 border border-slate-500 w-full"
                  text="read trading rules"
                />
              </div>
            </section>
            <section className="mt-10" id="faq">
              <p className="lexend uppercase text-slate-400 text-center text-sm px-3">
                To explore common issues
              </p>
              <p className="font-bold space-grotesk 2xl:text-6xl text-3xl text-center mt-3 px-3">
                Frequently asked questions
              </p>
              <div className="2xl:px-[10rem]">
                {accordionContents.map((content, index) => (
                  <div key={index}>
                    <AccordionComponent
                      header={content.title}
                      text={content.text}
                    />
                  </div>
                ))}
              </div>
            </section>
            <section className="my-[10rem] relative  2xl:block">
              <img src="/assets/rec.svg" className="w-full h-auto " alt="" />
              <div className="absolute top-[10%] z-10 left-[4rem]">
                <p className=" lexend uppercase text-slate-400  text-sm px-3 ">
                  we would love to hear from you
                </p>
                <p className="space-grotesk font-bold text-[3rem] ">
                  Get in touch <br /> with us
                </p>
                <div className="flex gap-5 mt-6">
                  <div className="border-none border bg-slate-700 rounded-full p-3">
                    <img src="/assets/bulb.svg" className="w-5 h-auto" alt="" />
                  </div>
                  <div className="border-none border bg-slate-700 rounded-full p-3">
                    <img
                      src="/assets/discord.svg"
                      className="w-5 h-auto "
                      alt=""
                    />
                  </div>
                  <div className="border-none border bg-slate-700 rounded-full p-3">
                    <img src="/assets/mail.svg" className="w-5 h-auto" alt="" />
                  </div>
                </div>
                <p className="w-1/2 mt-5 lexend font-thin">
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
              <div className="absolute -top-[12rem]  right-0">
                <img
                  src="/assets/woman-sitting.svg"
                  className="w-3/4 h-auto"
                  alt=""
                />
              </div>
            </section>
          </section>
          <Footer />
        </Container>
      </div>
    </main>
  );
}
