
import { Check, Users } from "lucide-react";
import { useState } from "react";
import FeatureDetail from "./FeatureDetail";
import { cn } from "@/lib/utils";

type Plan = {
  tier: string;
  color: string;
  bg: string;
  border: string;
  title: string;
  priceMonth: number;
  priceAnnual: number;
  button: string;
  btnClass: string;
  highlights: string[];
  descriptions?: string[];
  isPopular: boolean;
  ctaUrl: string;
  ctaUrlAnnual?: string;
};

const PlanCard = ({
  plan,
  annual,
  delay,
  isSelected = false,
  onSelect,
  onAction
}: {
  plan: Plan;
  annual: boolean;
  delay: number;
  isSelected?: boolean;
  onSelect?: (tier: string) => void;
  onAction?: () => void;
}) => {
  const { 
    title, 
    priceMonth, 
    priceAnnual, 
    button, 
    btnClass, 
    highlights, 
    descriptions = [], 
    bg, 
    border, 
    isPopular, 
    tier 
  } = plan;
  
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className={cn(
        "rounded-2xl border-2 backdrop-blur-lg flex flex-col items-center px-6 py-8 relative transition-all duration-300 group",
        border,
        bg,
        hovering || isSelected ? "shadow-[0_15px_35px_0_rgba(1,204,199,0.25)] scale-[1.02] z-10" : "shadow-lg",
        isSelected ? "ring-2 ring-[#01ccc7]" : "",
        isPopular && isSelected ? "animate-card-glow" : ""
      )}
      style={{
        animation: `fadeInUp 0.7s cubic-bezier(.47,1.64,.41,.8) both`,
        animationDelay: `${delay}ms`
      }}
      onClick={() => onSelect?.(tier)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#01ccc7] to-[#00a8a4] text-white text-xs px-4 py-1 rounded-full font-semibold shadow-lg">
          Most Popular
        </div>
      )}
      <h2 className="font-playfair font-bold text-2xl uppercase tracking-wider text-center mb-2">{title}</h2>
      <div className="flex flex-col items-center mt-1 mb-4">
        <span className="flex items-end">
          <span className="text-4xl md:text-5xl font-extrabold text-[#1A1F2C] font-sans">${annual ? priceAnnual : priceMonth}</span>
          <span className="ml-1 text-base text-gray-700 font-medium">
            /{annual ? "year" : "month"}
          </span>
        </span>
        {tier === "Free" && (
          <span className="text-xs text-gray-500 mt-1 font-medium">No credit card required</span>
        )}
      </div>
      <ul className="w-full mb-6 flex-1 flex flex-col gap-4">
        {highlights.map((item, idx) => (
          <li
            className="flex items-start gap-2 text-gray-800 text-sm"
            key={idx}
          >
            {descriptions[idx] ? (
              <FeatureDetail
                title={item}
                description={descriptions[idx]}
              >
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#01ccc7]/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-[#01ccc7]" />
                  </div>
                  <span>{item}</span>
                </div>
              </FeatureDetail>
            ) : (
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-[#01ccc7]/10 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-[#01ccc7]" />
                </div>
                <span>{item}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
      <button
        className={cn(
          "w-full mt-auto font-semibold rounded-lg py-3 text-base transition-all duration-300 text-center",
          btnClass,
          "hover:shadow-[0_8px_16px_0_rgba(1,204,199,0.25)] hover:scale-105 focus:outline-none"
        )}
        onClick={(e) => {
          e.stopPropagation();
          onAction?.();
        }}
        aria-label={button}
      >
        {button}
      </button>
    </div>
  );
};

export default PlanCard;
