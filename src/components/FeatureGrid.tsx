
import { Users, Folder, FolderOpen, Calendar, DollarSign, FileText, Headset, Database } from "lucide-react";

const featureColumns = [
  [
    {
      icon: Users,
      text: "Unlimited company users"
    },
    {
      icon: Folder,
      text: "Library search & filtering"
    },
    {
      icon: FolderOpen,
      text: "Tiling assistant & tools"
    },
    {
      icon: FileText,
      text: "Material editing & recoloring"
    },
    {
      icon: Calendar,
      text: "Sharing links & sample rooms"
    }
  ],
  [
    {
      icon: DollarSign,
      text: "Generate texture maps"
    },
    {
      icon: Database,
      text: "Generate material physics"
    },
    {
      icon: FileText,
      text: "3D material viewer"
    },
    {
      icon: FolderOpen,
      text: "Export ZIP & SBSAR, U3MA"
    },
    {
      icon: Headset,
      text: "Management & storage"
    }
  ]
];

const FeatureGrid = () => (
  <section className="w-full flex flex-col items-center">
    <div className="text-2xl font-bold text-[#1A1F2C] text-center mb-4">Common SEDDI Textura Features In Every Plan</div>
    <div className="flex flex-col md:flex-row gap-5 w-full max-w-3xl mx-auto">
      {featureColumns.map((col, i) => (
        <div key={i} className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col gap-4">
          {col.map((f, j) => (
            <div key={j} className="flex items-start gap-3">
              <f.icon className="w-6 h-6 text-[#9b87f5] mt-1" />
              <span className="text-base text-[#333]">{f.text}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </section>
);

export default FeatureGrid;
