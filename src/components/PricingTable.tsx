import { useState } from "react";
import PricingToggle from "./PricingToggle";
import PlanCard from "./PlanCard";
import FeatureGrid from "./FeatureGrid";
import { toast } from "sonner";

const plans = [
  {
    tier: "Free",
    color: "#01ccc7",
    bg: "bg-gradient-to-br from-white to-gray-100",
    border: "border-gray-200",
    title: "Free",
    priceMonth: 0,
    priceAnnual: 0,
    button: "Start Free",
    btnClass: "bg-[#01ccc7] text-white hover:bg-[#00a8a4] active:animate-button-press",
    highlights: [
      "Essential SEDDI Textura features",
      "Generate, store & download up to 15 materials/month",
      "All materials may be published in Texturas public library"
    ],
    descriptions: [
      "Basic tier of SEDDI Textura's toolset",
      "Limited monthly material generation",
      null // Remove the description for the third highlight
    ],
    ctaUrl: "https://app.textura.ai/login",
    isPopular: false
  },
  {
    tier: "Standard",
    color: "#01ccc7",
    bg: "bg-gradient-to-br from-white/90 via-gray-100/90 to-gray-200/90",
    border: "border-gray-300",
    title: "Standard",
    priceMonth: 500,
    priceAnnual: 500 * 10, // 2 months free
    button: "Upgrade to Standard",
    btnClass: "bg-[#01ccc7] text-white hover:bg-[#00a8a4] active:animate-button-press",
    highlights: [
      "Essential SEDDI Textura features",
      "Unlimited material generation",
      "Store up to 500 materials",
      "Private SEDDI Textura library",
      "Priority support"
    ],
    descriptions: [
      "Full feature set for advanced material creation",
      "No limits on material generation",
      "Expanded private storage capacity",
      "Exclusive private material library",
      "Faster, dedicated support response"
    ],
    ctaUrl: "https://app.textura.ai/login",
    isPopular: false
  },
  {
    tier: "Enterprise",
    color: "#01ccc7",
    bg: "bg-gradient-to-br from-[#E5F9F8] to-[#C0F2EF]",
    border: "border-[#01ccc7]",
    title: "Enterprise",
    priceMonth: 800,
    priceAnnual: 800 * 10, // 2 months free
    button: "Contact Sales",
    btnClass: "bg-[#01ccc7] text-white hover:bg-[#00a8a4] border-2 border-[#01ccc7]/50 active:animate-button-press",
    highlights: [
      "Essential SEDDI Textura features",
      "Personalized team folders to enhance workspace collaboration",
      "Batch upload fabric scans and digital materials",
      "Advanced recoloring - Heather fabric tools",
      "Supplier/tiling team collections",
      "Store up to 2000 materials",
      "Dedicated account manager"
    ],
    descriptions: [
      "Comprehensive enterprise-level material management",
      "Collaborative workspace with custom team organization",
      "Automated batch upload process for importing existing digital materials into the Textura library",
      "Advanced color manipulation with specialized Heather fabric tools",
      "Easily connect with your global suppliers to receive fabric scans reducing the need for physical sample shipments. Assign fabrics directly to your tiling teams and suppliers for collaboration",
      "Extensive material library storage",
      "Personalized support with a dedicated account representative"
    ],
    ctaUrl: "https://meetings.hubspot.com/sam-j/enterprise-pricing-page-link",
    isPopular: true
  }
];

const PricingTable = () => {
  const [annual, setAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (tier: string) => {
    setSelectedPlan(tier);
  };

  const handlePlanAction = (tier: string, ctaUrl: string) => {
    window.location.href = ctaUrl;
  };

  return (
    <section>
      <div className="flex flex-col items-center mt-10 mb-5">
        <span className="text-xs text-gray-600 mb-1">*All prices in USD</span>
        <PricingToggle annual={annual} setAnnual={setAnnual} />
        {annual && (
          <span className="mt-2 text-sm font-medium text-[#01ccc7] flex items-center gap-1 bg-[#01ccc7]/10 px-3 py-1 rounded-full">
            Save <span className="mx-1 font-bold">2 months</span> with annual billing
          </span>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-3 transition-all">
        {plans.map((plan, idx) => (
          <PlanCard
            key={plan.tier}
            plan={plan}
            annual={annual}
            delay={idx * 100}
            isSelected={selectedPlan === plan.tier}
            onSelect={handlePlanSelect}
            onAction={() => handlePlanAction(plan.tier, plan.ctaUrl)}
          />
        ))}
      </div>
      <div className="my-14" />
      <FeatureGrid />
    </section>
  );
};

export default PricingTable;
