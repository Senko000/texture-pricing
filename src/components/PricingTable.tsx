
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import FeatureGrid from "./FeatureGrid";
import FAQSection from "./FAQSection";

const plans = [
  {
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "Essential Textura features",
      "Generate, store & download up to 10 materials/month", 
      "Materials created in the Free plan are public. Upgrade to keep them private."
    ],
    buttonText: "Start Free",
    buttonUrl: "https://app.textura.ai/login"
  },
  {
    name: "Standard",
    monthlyPrice: 500,
    annualPrice: 5000,
    features: [
      "Essential Textura features",
      "Unlimited material creation",
      "Store up to 500 materials",
      "Private material library",
      "Priority support"
    ],
    buttonText: "Upgrade to Standard",
    buttonUrl: "https://app.textura.ai/login"
  },
  {
    name: "Enterprise",
    monthlyPrice: 800,
    annualPrice: 8000,
    isPopular: true,
    features: [
      "Essential Textura features",
      "Personalized team folders to enhance workspace collaboration",
      "Batch upload fabric scans and digital materials",
      "Advanced recoloring including heathered fabric tools",
      "Supplier/tiling team collections",
      "Store up to 2000 materials",
      "Dedicated account manager"
    ],
    buttonText: "Upgrade to Enterprise",
    buttonUrl: "https://app.textura.ai/login"
  }
];

const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="w-full">
      {/* Billing Toggle */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <Label htmlFor="billing-toggle" className="text-sm font-medium text-[#1A1F2C] font-roboto">
          Monthly
        </Label>
        <Switch
          id="billing-toggle"
          checked={isAnnual}
          onCheckedChange={setIsAnnual}
          className="data-[state=checked]:bg-[#01ccc7]"
        />
        <Label htmlFor="billing-toggle" className="text-sm font-medium text-[#1A1F2C] font-roboto">
          Annual
        </Label>
      </div>

      {/* Deal Banner - Only shows when annual is selected */}
      {isAnnual && (
        <div className="mb-8 mx-auto max-w-md animate-fade-in">
          <div className="bg-gradient-to-r from-[#01ccc7] to-[#00a8a4] rounded-lg p-4 text-center shadow-lg">
            <div className="text-white font-roboto">
              <div className="text-lg font-bold mb-1">🎉 Limited Time Deal!</div>
              <div className="text-sm">Save 2 months by choosing annual pricing</div>
            </div>
          </div>
        </div>
      )}

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative ${plan.isPopular ? 'border-[#01ccc7] shadow-lg' : 'border-gray-200'} bg-white/80 backdrop-blur-sm flex flex-col h-full`}>
            {plan.isPopular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#01ccc7] text-white font-roboto">
                Most Popular
              </Badge>
            )}
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl font-bold text-[#1A1F2C] font-roboto">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-[#1A1F2C] font-roboto">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-gray-600 ml-1 font-roboto">
                  /{isAnnual ? 'year' : 'month'}
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-0 flex-1 flex flex-col">
              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#01ccc7] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-roboto">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full mt-auto font-roboto ${plan.isPopular 
                  ? 'bg-[#01ccc7] hover:bg-[#00a8a4] text-white' 
                  : 'bg-white hover:bg-gray-50 text-[#01ccc7] border border-[#01ccc7]'
                }`}
                asChild
              >
                <a href={plan.buttonUrl} target="_blank" rel="noopener noreferrer">
                  {plan.buttonText}
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Feature Grid */}
      <FeatureGrid />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default PricingTable;
