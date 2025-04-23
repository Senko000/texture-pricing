
import PricingTable from "@/components/PricingTable";

const Index = () => (
  <div className="min-h-screen bg-[#F6F6F7]">
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#1A1F2C]">SEDDI Textura Pricing</h1>
      <p className="text-center mt-3 text-lg text-[#666]">Choose the right plan for your material creation needs</p>
      <PricingTable />
    </div>
  </div>
);

export default Index;
