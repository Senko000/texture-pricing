
import PricingTable from "@/components/PricingTable";

const Index = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#F6F6F7] via-white to-[#F1F0FB]">
    <div className="max-w-5xl mx-auto py-16 px-4 relative">
      {/* Abstract gradient shapes in background */}
      <div className="absolute top-40 -left-64 w-96 h-96 bg-gradient-to-br from-[#9b87f5]/20 to-[#7E69AB]/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -top-20 -right-32 w-96 h-96 bg-gradient-to-br from-[#E5DEFF]/30 to-[#9b87f5]/20 rounded-full blur-3xl -z-10" />
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-[#1A1F2C] mb-4">
          SEDDI Textura
          <span className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] bg-clip-text text-transparent"> Pricing</span>
        </h1>
        <p className="text-center mt-3 text-lg text-[#666] leading-relaxed">
          Choose the right plan for your material creation needs with our flexible options
        </p>
      </div>
      
      <PricingTable />
    </div>
  </div>
);

export default Index;
