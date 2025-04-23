import { useState } from "react";
import PricingToggle from "./PricingToggle";
import PlanCard from "./PlanCard";
import FeatureGrid from "./FeatureGrid";
import { toast } from "sonner";

const plans = [
  {
    tier: "Free",
    color: "#333",
    bg: "bg-gradient-to-br from-white to-gray-100",
    border: "border-gray-200",
    title: "Free",
    priceMonth: 0,
    priceAnnual: 0,
    button: "Start Free",
    btnClass: "bg-[#1A1F2C] text-white hover:bg-[#333] active:animate-button-press",
    highlights: [
      "Generate, store & download up to 15 materials/month",
      "Materials are shared in public library",
      "Essential SEDDI Textura features"
    ],
    descriptions: [
      "Limited monthly material generation with basic features",
      "All materials you create will be visible to other users",
      "Access to fundamental tools and features"
    ],
    isPopular: false
  },
  {
    tier: "Standard",
    color: "#fff",
    bg: "bg-gradient-to-br from-[#F1F0FB] to-[#E5DEFF]",
    border: "border-[#9b87f5]",
    title: "Standard",
    priceMonth: 500,
    priceAnnual: 500 * 10, // 2 months free
    button: "Upgrade to Standard",
    btnClass: "bg-[#9b87f5] text-white hover:bg-[#7E69AB] active:animate-button-press",
    highlights: [
      "Unlimited material generation",
      "Store up to 100 materials privately",
      "All Free plan features included",
      "Priority support"
    ],
    descriptions: [
      "Create as many materials as you need with no monthly limits",
      "Keep your designs private and secure in your personal library",
      "Access to all features in the Free tier",
      "Get faster responses and dedicated help from our team"
    ],
    isPopular: false
  },
  {
    tier: "Enterprise",
    color: "#fff",
    bg: "bg-gradient-to-br from-white/90 via-gray-100/90 to-gray-200/90",
    border: "border-gray-300",
    title: "Enterprise",
    priceMonth: 800,
    priceAnnual: 800 * 10, // 2 months free
    button: "Contact Sales",
    btnClass: "bg-[#9b87f5] text-black hover:bg-[#7E69AB] border-2 border-[#9b87f5]/50 active:animate-button-press",
    highlights: [
      "All points in Standard +",
      "Team folders for sharing your collections internally and externally",
      "Batch upload from previous CLO, or Vizoo files",
      "Advanced recoloring tools like Heather",
      "Supplier/Tiling team connections",
      "Store up to 2000 materials",
      "Dedicated account manager"
    ],
    descriptions: [
      "Everything in the Standard plan plus enterprise features",
      "Collaborate and share material collections with internal and external teams",
      "Easily transfer materials from CLO and Vizoo platforms",
      "Access our most advanced color manipulation tools inspired by Heather technology",
      "Connect directly with suppliers and specialized tiling teams",
      "Extensive storage for your entire material library",
      "Get personalized support from a dedicated account representative"
    ],
    isPopular: true
  }
];

const PricingTable = () => {
  const [annual, setAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (tier: string) => {
    setSelectedPlan(tier);
  };

  const handlePlanAction = (tier: string) => {
    if (tier === "Free") {
      toast.success("Getting started with Free plan", {
        description: "You're all set to begin using SEDDI Textura",
        action: {
          label: "View Dashboard",
          onClick: () => console.log("View Dashboard clicked")
        }
      });
    } else if (tier === "Standard") {
      toast.success("Upgrading to Standard plan", {
        description: "Redirecting to payment page...",
        action: {
          label: "Check Features",
          onClick: () => console.log("Check Features clicked")
        }
      });
    } else {
      toast.info("Contact request submitted", {
        description: "Our sales team will reach out to you shortly",
        action: {
          label: "Learn More",
          onClick: () => console.log("Learn More clicked")
        }
      });
    }
  };

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
            isSelected={selectedPlan === plan.tier}
            onSelect={handlePlanSelect}
            onAction={() => handlePlanAction(plan.tier)}
          />
        ))}
      </div>
      <div className="my-14" />
      <FeatureGrid />
    </section>
  );
};

export default PricingTable;
