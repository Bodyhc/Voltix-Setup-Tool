import { Code2, TestTube2, Rocket, Briefcase } from "lucide-react";
import { FeatureCategory } from "./FeatureCategory";
import { Feature } from "../types";

interface FeatureSelectorProps {
  features: Feature[];
  onToggleFeature: (id: string) => void;
}

export function FeatureSelector({
  features,
  onToggleFeature,
}: FeatureSelectorProps) {
  const featureCategories = [
    {
      id: "development",
      name: "Development",
      icon: <Code2 className="w-5 h-5" />,
    },
    // { id: 'testing', name: 'Testing', icon: <TestTube2 className="w-5 h-5" /> },
    // { id: 'deployment', name: 'Deployment', icon: <Rocket className="w-5 h-5" /> },
    // { id: 'employment', name: 'Employment', icon: <Briefcase className="w-5 h-5" /> }
  ];

  return (
    <div>
      {featureCategories.map((category) => (
        <FeatureCategory
          key={category.id}
          {...category}
          features={features.filter((f) => f.category === category.id)}
          onToggleFeature={onToggleFeature}
        />
      ))}
    </div>
  );
}
