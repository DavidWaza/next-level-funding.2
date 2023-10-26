import Hero from "./components/Hero";
import Footer from "./components/Footer";
import MainCarousel from "./components/MainCarousel";
import { Container } from "@mui/material";
import GetInTouch from "./components/GetInTouch";
import PriceComponent from "./components/PriceComponent";
import FaqComponent from "./components/FaqComponent";
import FundingBenefits from "./components/FundingBenefits";
import TradePotential from "./components/TradePotential";

export default function Home() {
  return (
    <main className="h-full">
      <Hero />
      <div className="home-bg text-white">
        <Container>
          <TradePotential />
          <FundingBenefits />
          <PriceComponent />
          <FaqComponent />
          <GetInTouch />
          <Footer />
        </Container>
      </div>
    </main>
  );
}
