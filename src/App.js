import Advice from "./components/AdviceSection/Advice";
import CalculatePricing from "./components/CalculatePricingSection/CalculatePricing";
import Description from "./components/DescriptionSection/Description";
import FAQ from "./components/FAQSection/FAQ";
import Introduction from "./components/IntroductionSection/Introduction";
import Navbar from "./components/NavbarSection/Navbar";
import PricingSection from "./components/PricingSection/Pricing";
import ReviewsSection from "./components/ReviewsSection/Reviews";
import ServiceHighlights from "./components/ServiceHighlightsSection/ServiceHighlights";
import Specialisation from "./components/Specialisation/Specialisation";
import Working from "./components/WorkingSection/Working";
import WritingSolutions from "./components/WritingSolutionsSection/WritingSolutions";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CalculatePricing />
      <div>
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
      </div>
    </div>
  );
}

export default App;
