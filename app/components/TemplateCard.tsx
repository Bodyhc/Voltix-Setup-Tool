import { ReactNode } from 'react';

interface TemplateCardProps {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

export function TemplateCard({ name, description, icon, isSelected, onClick }: TemplateCardProps) {
  return (
    <div
      className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
        isSelected
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'
      }`}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}