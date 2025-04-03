import { ReactNode } from 'react';
import { Feature } from '../types';
import { FeatureToggle } from './FeatureToggle';

interface FeatureCategoryProps {
  id: string;
  name: string;
  icon: ReactNode;
  features: Feature[];
  onToggleFeature: (id: string) => void;
}

export function FeatureCategory({ name, icon, features, onToggleFeature }: FeatureCategoryProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-xl font-semibold ml-2">{name}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature) => (
          <FeatureToggle
            key={feature.id}
            {...feature}
            onToggle={() => onToggleFeature(feature.id)}
          />
        ))}
      </div>
    </div>
  );
}