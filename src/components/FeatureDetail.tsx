
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Info } from "lucide-react";
import { ReactNode } from "react";

type FeatureDetailProps = {
  children: ReactNode;
  title: string;
  description: string;
};

const FeatureDetail = ({ children, title, description }: FeatureDetailProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex items-start gap-2 cursor-help">
          {children}
          <Info className="w-4 h-4 text-[#9b87f5] opacity-70 hover:opacity-100 transition-opacity" />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 backdrop-blur-xl bg-white/90 dark:bg-black/80 border-2 border-[#9b87f5]/20 shadow-lg">
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-[#1A1F2C]">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default FeatureDetail;
