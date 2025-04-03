interface FeatureToggleProps {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
}

export function FeatureToggle({ name, description, enabled, onToggle }: FeatureToggleProps) {
  return (
    <div
      className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
        enabled
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 hover:border-blue-200'
      }`}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
        <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ${
          enabled ? 'bg-blue-600' : 'bg-gray-300'
        }`}>
          <div className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-200 ${
            enabled ? 'translate-x-6' : 'translate-x-0'
          }`} />
        </div>
      </div>
    </div>
  );
}