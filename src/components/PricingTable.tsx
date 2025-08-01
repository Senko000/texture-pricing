
import { Check, X } from "lucide-react";
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
      "Textura features",
      "Generate, store & download up to 10 materials/month", 
      "Materials created in the Free plan are visible to others. **Upgrade** to protect your content"
    ],
    buttonText: "Start Free",
    buttonUrl: "https://app.textura.ai/login"
  },
  {
    name: "Student",
    monthlyPrice: 25,
    annualPrice: 250,
    features: [
      "Essential Textura features",
      "Generate and download up to 50 materials per month",
      "Private library",
      "*must sign up with Student credentials"
    ],
    buttonText: "Upgrade to Student",
    buttonUrl: "https://app.textura.ai/login",
    hasNote: true
  },
  {
    name: "Core",
    monthlyPrice: 350,
    annualPrice: 3500,
    features: [
      "Essential Textura features",
      "Unlimited material creation",
      "Store up to 250 materials at once",
      "Private material library"
    ],
    buttonText: "Upgrade to Core",
    buttonUrl: "https://app.textura.ai/login"
  },
  {
    name: "Standard",
    monthlyPrice: 500,
    annualPrice: 5000,
    isPopular: true,
    features: [
      "Limited internal workspace",
      "Essential Textura features",
      "Unlimited material creation",
      "Store up to 500 at once",
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
    features: [
      "Advanced internal workspace",
      "Multi mill and brand collaboration",
      "Batch upload scans and digital files",
      "Advanced recoloring, including weathered fabric tools",
      "Team and Supplier shareable collections",
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

      {/* Pricing Table */}
      <div className="bg-white rounded-2xl shadow-xl mb-16">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-0">
          {/* Empty first column for alignment with feature table */}
          <div className="hidden md:block bg-gray-50 border-b-4 border-gray-300 border-r border-gray-200 w-1/6"></div>
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`p-6 text-center border-b-4 border-r border-gray-200 w-1/6 ${
                index === 0 ? 'bg-gray-50 border-gray-300' 
                : index === 1 ? 'bg-blue-50 border-blue-300'
                : index === 2 ? 'bg-purple-50 border-purple-300'
                : index === 3 ? 'bg-gradient-to-b from-[#01ccc7]/5 to-white border-[#01ccc7]'
                : 'bg-orange-50 border-orange-300'
              } ${index === 4 ? 'border-r-0' : ''}`}
            >
              <h3 className="text-xl font-bold text-[#1A1F2C] font-roboto mb-3 text-center">
                {plan.name}
              </h3>
              <div className="mb-4 text-center">
                <span className="text-3xl font-bold text-[#1A1F2C] font-roboto">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-gray-600 text-sm block font-roboto">
                  /{isAnnual ? 'year' : 'month'}
                </span>
              </div>
              <Button 
                className={`w-full font-roboto font-semibold py-2 px-4 text-sm transition-all duration-300 ${
                  index === 3 
                    ? 'bg-gradient-to-r from-[#01ccc7] to-[#00a8a4] hover:from-[#00a8a4] hover:to-[#008a87] text-white shadow-lg hover:shadow-xl' 
                    : 'bg-white hover:bg-gray-50 text-[#01ccc7] border border-[#01ccc7] hover:border-[#00a8a4]'
                }`}
                asChild
              >
                <a href={plan.buttonUrl} target="_blank" rel="noopener noreferrer">
                  {plan.buttonText}
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-fixed">
            <tbody>
              {/* Material Generation */}
              <tr className="border-b border-gray-100">
                <td className="px-4 py-4 font-medium text-gray-900 bg-gray-50 font-roboto text-center w-1/6 border-r border-gray-200">Material Generation</td>
                <td className="px-4 py-4 text-center text-sm font-roboto w-1/6 border-r border-gray-200">10/month</td>
                <td className="px-4 py-4 text-center text-sm font-roboto w-1/6 border-r border-gray-200">50/month</td>
                <td className="px-4 py-4 text-center text-sm font-roboto w-1/6 border-r border-gray-200">Unlimited</td>
                <td className="px-4 py-4 text-center text-sm bg-[#01ccc7]/5 font-roboto w-1/6 border-r border-gray-200">Unlimited</td>
                <td className="px-4 py-4 text-center text-sm font-roboto w-1/6">Unlimited</td>
              </tr>
              
              {/* Storage */}
              <tr className="border-b border-gray-100">
                <td className="px-4 py-4 font-medium text-gray-900 bg-gray-50 font-roboto text-center w-1/6 border-r border-gray-200">Storage Capacity</td>
                <td className="px-4 py-4 text-center text-sm font-roboto w-1/6 border-r border-gray-200">Public only</td>
                <td className="px-4 py-4 text-center text-sm font-roboto w-1/6 border-r border-gray-200">Private library</td>
                <td className="px-4 py-4 text-center text-sm font-roboto w-1/6 border-r border-gray-200">250 materials</td>
                <td className="px-4 py-4 text-center text-sm bg-[#01ccc7]/5 font-roboto w-1/6 border-r border-gray-200">500 materials</td>
                <td className="px-4 py-4 text-center text-sm font-roboto w-1/6">2000 materials</td>
              </tr>

              {/* Workspace */}
              <tr className="border-b border-gray-100">
                <td className="px-4 py-4 font-medium text-gray-900 bg-gray-50 font-roboto text-center w-1/6 border-r border-gray-200">Workspace</td>
                <td className="px-4 py-4 text-center w-1/6 border-r border-gray-200">
                  <X className="w-4 h-4 text-gray-400 mx-auto" />
                </td>
                <td className="px-4 py-4 text-center w-1/6 border-r border-gray-200">
                  <X className="w-4 h-4 text-gray-400 mx-auto" />
                </td>
                <td className="px-4 py-4 text-center w-1/6 border-r border-gray-200">
                  <X className="w-4 h-4 text-gray-400 mx-auto" />
                </td>
                <td className="px-4 py-4 text-center bg-[#01ccc7]/5 w-1/6 border-r border-gray-200">
                  <span className="text-xs font-roboto text-gray-600">Limited</span>
                </td>
                <td className="px-4 py-4 text-center w-1/6">
                  <span className="text-xs font-roboto text-gray-600">Advanced</span>
                </td>
              </tr>

              {/* Collaboration */}
              <tr className="border-b border-gray-100">
                <td className="px-4 py-4 font-medium text-gray-900 bg-gray-50 font-roboto text-center w-1/6 border-r border-gray-200">Team Collaboration</td>
                <td className="px-4 py-4 text-center w-1/6 border-r border-gray-200">
                  <X className="w-4 h-4 text-gray-400 mx-auto" />
                </td>
                <td className="px-4 py-4 text-center w-1/6 border-r border-gray-200">
                  <X className="w-4 h-4 text-gray-400 mx-auto" />
                </td>
                <td className="px-4 py-4 text-center w-1/6 border-r border-gray-200">
                  <X className="w-4 h-4 text-gray-400 mx-auto" />
                </td>
                <td className="px-4 py-4 text-center bg-[#01ccc7]/5 w-1/6 border-r border-gray-200">
                  <X className="w-4 h-4 text-gray-400 mx-auto" />
                </td>
                <td className="px-4 py-4 text-center w-1/6">
                  <Check className="w-4 h-4 text-green-500 mx-auto" />
                </td>
              </tr>

              {/* Support */}
              <tr className="border-b border-gray-100">
                <td className="px-4 py-4 font-medium text-gray-900 bg-gray-50 font-roboto text-center w-1/6 border-r border-gray-200">Support</td>
                <td className="px-4 py-4 text-center text-xs font-roboto w-1/6 border-r border-gray-200">Community</td>
                <td className="px-4 py-4 text-center text-xs font-roboto w-1/6 border-r border-gray-200">Email</td>
                <td className="px-4 py-4 text-center text-xs font-roboto w-1/6 border-r border-gray-200">Email</td>
                <td className="px-4 py-4 text-center text-xs bg-[#01ccc7]/5 font-roboto w-1/6 border-r border-gray-200">Priority</td>
                <td className="px-4 py-4 text-center text-xs font-roboto w-1/6">Dedicated Manager</td>
              </tr>

              {/* Advanced Features */}
              <tr>
                <td className="px-4 py-4 font-medium text-gray-900 bg-gray-50 font-roboto text-center w-1/6 border-r border-gray-200">Advanced Tools</td>
                <td className="px-4 py-4 text-center w-1/6 border-r border-gray-200">
                  <X className="w-4 h-4 text-gray-400 mx-auto" />
                </td>
                <td className="px-4 py-4 text-center w-1/6 border-r border-gray-200">
                  <X className="w-4 h-4 text-gray-400 mx-auto" />
                </td>
                <td className="px-4 py-4 text-center w-1/6 border-r border-gray-200">
                  <X className="w-4 h-4 text-gray-400 mx-auto" />
                </td>
                <td className="px-4 py-4 text-center bg-[#01ccc7]/5 w-1/6 border-r border-gray-200">
                  <X className="w-4 h-4 text-gray-400 mx-auto" />
                </td>
                <td className="px-4 py-4 text-center w-1/6">
                  <Check className="w-4 h-4 text-green-500 mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Feature Grid */}
      <FeatureGrid />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default PricingTable;
