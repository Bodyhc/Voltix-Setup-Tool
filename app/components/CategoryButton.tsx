import { ReactNode } from 'react';

interface CategoryButtonProps {
  // id: string;
  name: string;
  icon: ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

export function CategoryButton({ name, icon, isSelected, onClick }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap ${
        isSelected
          ? 'bg-blue-100 text-blue-700'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {icon}
      <span className="ml-2">{name}</span>
    </button>
  );
}
