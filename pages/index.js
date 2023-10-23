import Hero from "./components/Hero";
import GlassMorph from "./components/glassMorph";
import GlassMorphCard from "./components/GlassMorphCard";
import Button from "./components/Button";
import PriceCard from "./components/PriceCard";
import AccordionComponent from "./components/AccordionComponent";
import Footer from "./components/Footer";
import MarqueeComponent from "./components/MarqueeComponent";

export default function Home() {
  return (
    <main className="h-full">
      <Hero />
      <div className="home-bg text-white">
        <div className="py-[5rem]">
          <MarqueeComponent />
        </div>
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
        <section className="2xl:px-[10rem] px-[2rem]">
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
          <section className="2xl:mt-[15rem] mt-[5rem] grid flex-col justify-center items-center hidden 2xl:block">
            <p className="lexend uppercase text-slate-400 text-center text-sm">
              Your Path to Profitable Trading Begins Here
            </p>
            <p className="font-bold space-grotesk 2xl:text-6xl text-3xl text-center mt-3">
              Take your trading to the next level with us
            </p>
            <div className="flex justify-around ">
              <img
                src="/assets/Phone-illustration.png"
                className="hidden 2xl:block ml-20"
                alt="phone-illus"
              />
              <div className="backdrop 2xl:w-1/4 h-1/4 mt-32 morph border-none bg-white">
                <img
                  src="/assets/crown-pink.png"
                  className="w-5 h-auto my-5 "
                  alt="crown-pink"
                />
                <p>No Risk, Just Profits</p>
              </div>
            </div>
            <div className="relative -top-[10rem] -right-[10rem]">
              <div className=" number-morph w-9 flex items-center justify-center h-20">
                <span>1</span>
              </div>
              <div className="number-morph w-10 rounded-full h-10 flex items-center justify-center mt-4">
                <span>2</span>
              </div>
              <div className="number-morph w-10 rounded-full h-10 flex items-center justify-center mt-4">
                <span>3</span>
              </div>
            </div>
            <div className="flex justify-center relative -top-[32rem]">
              <div className="backdrop 2xl:w-3/5 w-full h-1/4 mt-36 morph relative border-blue-800 z-10">
                <img
                  src="/assets/crown-blue.png"
                  className="w-5 h-auto my-5"
                  alt="blue-pink"
                />
                <p className="2xl:text-5xl space-grotesk font-medium text-secondary">
                  Trading Evaluation
                </p>
                <p className="text-sm w-10/12 mt-8 pb-14 opacity-80 text-blue-300">
                  Our evaluation account allows traders to prove their skill in
                  order to trade our live funds.
                </p>
                <div className="absolute left-auto -right-20 bottom-5">
                  <Button
                    className="bg-[#3658C1] border-none lexend"
                    text="get funded"
                    showArrow={true}
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="backdrop 2xl:w-1/3 mt-32 border-none bg-white absolute right-96 -top-[43rem] z-0 flex flex-col morph">
                <img
                  src="/assets/crown-pink.png"
                  className="w-5 h-auto"
                  alt="crown-pink"
                />
                <p className="py-5 lexend">High Profit Splits</p>
                <p className="text-xs pt-7 w-4/5 lexend">
                  Our profit split for the first month on all accounts is 80%.
                  On the second month you will then receive 90% of all profits
                  made!
                </p>
              </div>
            </div>
          </section>
          <section className=" grid flex-col justify-center items-center mt-20 2xl:-mt-[10rem] ">
            <p className="lexend uppercase text-slate-400 text-center text-sm px-3">
              Tailored Solutions to Amplify Your Trading Success
            </p>
            <p className="font-bold space-grotesk 2xl:text-6xl text-3xl text-center mt-3 px-3">
              Our Evaluation Packages
            </p>
            <div className="mt-10 grid grid-cols-1 2xl:grid-cols-3 gap-5 px-7">
              <PriceCard />
              <PriceCard />
              <PriceCard />
            </div>
            <div className="mt-5 grid justify-center flex-col items-center w-full">
              <div className="2xl:flex gap-5 block px-7">
                <PriceCard
                  className="bg-[#3658c1]"
                  spanClassName="text-white"
                />
                <PriceCard
                  className="bg-[#3658c1]"
                  spanClassName="text-white"
                />
              </div>
              <div className="2xl:flex block justify-center my-8">
                <Button
                  className="backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-30 border border-slate-500 w-full"
                  text="read trading rules"
                />
              </div>
            </div>
          </section>
          <section className="mt-10">
            <p className="lexend uppercase text-slate-400 text-center text-sm px-3">
              To explore common issues
            </p>
            <p className="font-bold space-grotesk 2xl:text-6xl text-3xl text-center mt-3 px-3">
              Frequently asked questions
            </p>
            <div className="2xl:px-[10rem]">
              <AccordionComponent
                header="What is Nextlevelfunding?"
                text="We are a company which provide capital to profitable traders. Prove you are profitable by completing the 2 step evaluation process then receive immediate funding up to $500k per person.
"
              />
              <AccordionComponent
                header="Will I Be Trading On A Demo Account Or A Live Account?"
                text="We are a company which provide capital to profitable traders. Prove you are profitable by completing the 2 step evaluation process then receive immediate funding up to $500k per person.
"
              />
            </div>
          </section>
          <section className="my-[10rem] relative hidden 2xl:block">
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
            <div className="absolute -top-[12rem] right-0">
              <img
                src="/assets/woman-sitting.svg"
                className="w-3/4 h-auto"
                alt=""
              />
            </div>
          </section>
        </section>
        <section className="2xl:px-[7rem]">
          <Footer />
        </section>
      </div>
    </main>
  );
}
