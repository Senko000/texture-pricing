
import { Check, Users, DollarSign } from "lucide-react";

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
  isPopular: boolean;
};

const PlanCard = ({
  plan,
  annual,
  delay
}: {
  plan: Plan;
  annual: boolean;
  delay: number;
}) => {
  const { title, priceMonth, priceAnnual, button, btnClass, highlights, bg, border, isPopular, tier } = plan;

  return (
    <div
      className={`rounded-2xl shadow-lg border ${border} ${bg} flex flex-col items-center px-6 py-8 relative transition group`}
      style={{
        animation: `fadeInUp 0.7s cubic-bezier(.47,1.64,.41,.8) both`,
        animationDelay: `${delay}ms`
      }}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#9b87f5] text-white text-xs px-4 py-1 rounded-full font-semibold shadow">
          Most Popular
        </div>
      )}
      <h2 className="font-bold text-lg uppercase tracking-widest text-center mb-2">{title}</h2>
      <div className="flex flex-col items-center mt-1 mb-4">
        <span className="flex items-end">
          <span className="text-3xl md:text-4xl font-extrabold text-[#1A1F2C]">${annual ? priceAnnual : priceMonth}</span>
          <span className="ml-1 text-base text-gray-700 font-medium">
            /{annual ? "year" : "month"}
          </span>
        </span>
        {tier === "Free" && (
          <span className="text-xs text-gray-500 mt-1 font-medium">No credit card required</span>
        )}
      </div>
      <ul className="w-full mb-6 flex-1 flex flex-col gap-3">
        {highlights.map((item, idx) => (
          <li
            className="flex items-start gap-2 text-gray-800 text-sm"
            key={idx}
          >
            <Check className="w-4 h-4 text-[#9b87f5] mt-1 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full mt-auto font-semibold rounded-lg py-3 text-base transition text-center ${btnClass} focus:outline-none`}
        tabIndex={0}
        aria-label={button}
      >
        {button}
      </button>
    </div>
  );
};

export default PlanCard;
