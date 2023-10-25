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
        <Container maxWidth="xl">
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
