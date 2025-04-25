import { 
  Users, 
  Folder, 
  FolderOpen, 
  Calendar, 
  DollarSign, 
  FileText, 
  Headset, 
  Database,
  Info
} from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useState } from "react";

const featureColumns = [
  [
    {
      icon: Users,
      text: "Unlimited company users",
      description: "Add as many team members as you need without additional per-user charges"
    },
    {
      icon: Folder,
      text: "Library search & filtering",
      description: "Powerful search capabilities to quickly find the materials you need"
    },
    {
      icon: FolderOpen,
      text: "Tiling assistant & tools",
      description: "Advanced tools to help create seamless material tileable patterns"
    },
    {
      icon: FileText,
      text: "Material editing & recoloring",
      description: "Edit and adjust material properties or completely transform colors"
    },
    {
      icon: Calendar,
      text: "Sharing links & sample rooms",
      description: "Create shareable links and preview materials in virtual room settings"
    }
  ],
  [
    {
      icon: DollarSign,
      text: "Generate texture maps",
      description: "Create high-quality texture maps for your 3D models and visualizations"
    },
    {
      icon: Database,
      text: "Generate material physics",
      description: "Automatically create physically accurate material property definitions"
    },
    {
      icon: FileText,
      text: "3D material viewer",
      description: "Preview materials in a real-time 3D environment with adjustable lighting"
    },
    {
      icon: FolderOpen,
      text: "Export Materials in Multiple Industry-Standard Formats",
      description: "ZIP, SBSAR, U3MA, GLTF"
    },
    {
      icon: Headset,
      text: "Management & storage",
      description: "Comprehensive tools for organizing and storing your material library"
    }
  ]
];

const FeatureGrid = () => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  return (
    <section className="w-full flex flex-col items-center">
      <div className="text-3xl font-playfair font-bold text-[#1A1F2C] text-center mb-8">
        Essential Textura Features In Every Plan
      </div>
      <div className="flex flex-col md:flex-row gap-5 w-full max-w-3xl mx-auto">
        {featureColumns.map((col, i) => (
          <div 
            key={i} 
            className="flex-1 bg-gradient-to-br from-white/80 to-gray-100/80 backdrop-blur-lg rounded-xl shadow-xl border border-[#9b87f5]/20 p-6 flex flex-col gap-5"
          >
            {col.map((f, j) => (
              <TooltipProvider key={j}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div 
                      className={cn(
                        "flex items-start gap-3 p-3 rounded-lg transition-all duration-200",
                        hoveredFeature === `${i}-${j}` ? "bg-[#01ccc7]/10 shadow-sm" : "hover:bg-[#01ccc7]/5"
                      )}
                      onMouseEnter={() => setHoveredFeature(`${i}-${j}`)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <div className="bg-gradient-to-br from-[#01ccc7]/80 to-[#01ccc7]/60 p-2 rounded-lg shadow-lg">
                        <f.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-base font-medium text-[#333]">{f.text}</span>
                        <div className="text-xs text-gray-500 mt-1">{hoveredFeature === `${i}-${j}` && f.description}</div>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    className="bg-[#1A1F2C] text-white border-[#01ccc7]/50 shadow-[0_8px_16px_0_rgba(1,204,199,0.25)]"
                  >
                    {f.description}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
