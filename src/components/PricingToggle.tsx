
type Props = {
  annual: boolean;
  setAnnual: (val: boolean) => void;
};

const PricingToggle = ({ annual, setAnnual }: Props) => (
  <div className="flex items-center p-1 rounded-full border border-gray-300 bg-white shadow-md w-fit">
    <button
      className={`px-5 py-1 transition text-sm rounded-full ${!annual ? "bg-[#9b87f5] text-white shadow" : "text-gray-700"}`}
      aria-pressed={!annual}
      onClick={() => setAnnual(false)}
    >
      Monthly
    </button>
    <button
      className={`px-5 py-1 transition text-sm rounded-full ${annual ? "bg-[#9b87f5] text-white shadow" : "text-gray-700"}`}
      aria-pressed={annual}
      onClick={() => setAnnual(true)}
    >
      Annual
    </button>
  </div>
);

export default PricingToggle;
