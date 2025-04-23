
import { useState } from "react";
import PricingToggle from "./PricingToggle";
import PlanCard from "./PlanCard";
import FeatureGrid from "./FeatureGrid";

const plans = [
  {
    tier: "Free",
    color: "#333",
    bg: "bg-white",
    border: "border-gray-200",
    title: "Free",
    priceMonth: 0,
    priceAnnual: 0,
    button: "Start Free",
    btnClass: "bg-[#1A1F2C] text-white hover:bg-[#9b87f5]",
    highlights: [
      "Generate, store & download up to 15 materials/month",
      "Materials are shared in public library",
      "Essential SEDDI Textura features"
    ],
    isPopular: false
  },
  {
    tier: "Standard",
    color: "#fff",
    bg: "bg-[#F1F0FB]",
    border: "border-[#9b87f5]",
    title: "Standard",
    priceMonth: 500,
    priceAnnual: 500 * 10, // 2 months free
    button: "Upgrade to Standard",
    btnClass: "bg-[#9b87f5] text-white hover:bg-[#7E69AB]",
    highlights: [
      "Unlimited material generation",
      "Store up to 100 materials privately",
      "All Free plan features included",
      "Priority support"
    ],
    isPopular: true
  },
  {
    tier: "Enterprise",
    color: "#fff",
    bg: "bg-[#E5DEFF]",
    border: "border-[#1A1F2C]",
    title: "Enterprise",
    priceMonth: 800,
    priceAnnual: 800 * 10, // 2 months free
    button: "Contact Sales",
    btnClass: "bg-[#1A1F2C] text-white hover:bg-[#333] border-2 border-[#1A1F2C]",
    highlights: [
      "Team folders for sharing collections",
      "Batch upload & mill integrations",
      "Advanced recoloring tools",
      "Supplier/tiling team connections",
      "Store up to 2000 materials",
      "Dedicated account manager"
    ],
    isPopular: false
  }
];

const PricingTable = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section>
      <div className="flex flex-col items-center mt-10 mb-5">
        <span className="text-xs text-gray-600 mb-1">*All prices in USD</span>
        <PricingToggle annual={annual} setAnnual={setAnnual} />
        {annual && (
          <span className="mt-2 text-sm font-medium text-purple-600 flex items-center gap-1 bg-purple-50 px-3 py-1 rounded-full">
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
          />
        ))}
      </div>
      <div className="my-14" />
      <FeatureGrid />
    </section>
  );
};

export default PricingTable;
