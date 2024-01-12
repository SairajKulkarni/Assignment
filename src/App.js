// App.js
import React from "react";
import Navbar from "./components/NavbarSection/Navbar";
import CalculatePricing from "./components/CalculatePricingSection/CalculatePricing";
import Introduction from "./components/IntroductionSection/Introduction";
import Description from "./components/DescriptionSection/Description";
import Specialisation from "./components/Specialisation/Specialisation";
import ServiceHighlights from "./components/ServiceHighlightsSection/ServiceHighlights";
import PricingSection from "./components/PricingSection/Pricing";
import ReviewsSection from "./components/ReviewsSection/Reviews";
import WritingSolutions from "./components/WritingSolutionsSection/WritingSolutions";
import Working from "./components/WorkingSection/Working";
import FAQ from "./components/FAQSection/FAQ";
import Advice from "./components/AdviceSection/Advice";
import Footer from "./components/FooterSection/Footer";
import FooterBottom from "./components/FooterBottomSection/FooterBottom";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollTopButton";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <CalculatePricing />
        <Introduction />
        <Description />
        <Specialisation />
        <ServiceHighlights />
        <PricingSection />
        <ReviewsSection />
        <WritingSolutions />
        <Working />
        <FAQ />
        <Advice />
        <Footer />
        <FooterBottom />
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default App;
