
import { cn } from "@/lib/utils";

type Props = {
  annual: boolean;
  setAnnual: (val: boolean) => void;
};

const PricingToggle = ({ annual, setAnnual }: Props) => (
  <div className="flex items-center p-1 rounded-full border-2 border-gray-300 bg-white shadow-lg backdrop-blur-sm">
    <button
      className={cn(
        "px-6 py-2 transition-all duration-300 text-sm rounded-full font-medium",
        !annual 
          ? "bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white shadow-lg" 
          : "text-gray-700 hover:text-gray-900"
      )}
      aria-pressed={!annual}
      onClick={() => setAnnual(false)}
    >
      Monthly
    </button>
    <button
      className={cn(
        "px-6 py-2 transition-all duration-300 text-sm rounded-full font-medium",
        annual 
          ? "bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white shadow-lg" 
          : "text-gray-700 hover:text-gray-900"
      )}
      aria-pressed={annual}
      onClick={() => setAnnual(true)}
    >
      Annual
    </button>
  </div>
);

export default PricingToggle;
