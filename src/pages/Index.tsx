
import PricingTable from "@/components/PricingTable";

const Index = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#F6F6F7] via-white to-[#E5F9F8]">
    {/* Header with Logo */}
    <header className="w-full px-4 py-6">
      <div className="max-w-5xl mx-auto">
        <a 
          href="https://www.textura.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block hover:opacity-80 transition-opacity"
        >
          <img 
            src="/lovable-uploads/0a2b57b9-bd8f-4407-bdc7-77f4b349b611.png" 
            alt="SEDDI Textura" 
            className="h-10 md:h-12"
          />
        </a>
      </div>
    </header>

    <div className="max-w-5xl mx-auto py-8 px-4 relative">
      {/* Abstract gradient shapes in background */}
      <div className="absolute top-40 -left-64 w-96 h-96 bg-gradient-to-br from-[#01ccc7]/20 to-[#00a8a4]/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -top-20 -right-32 w-96 h-96 bg-gradient-to-br from-[#E5F9F8]/30 to-[#01ccc7]/20 rounded-full blur-3xl -z-10" />
      
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-4xl md:text-6xl font-roboto font-bold text-[#1A1F2C] mb-4">
          SEDDI Textura
          <span className="bg-gradient-to-r from-[#01ccc7] to-[#00a8a4] bg-clip-text text-transparent"> Pricing</span>
        </h1>
      </div>
      
      <PricingTable />
    </div>
  </div>
);

export default Index;
