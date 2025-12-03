import Stack from '@/components/structural/Stack';
import { VariantToken } from '@/lib/ui/tokens';

interface FeatureCardProps {
  icon: React.ReactNode | string;
  title: string;
  body: string;
  link?: {
    label: string;
    href: string;
  };
  variant?: VariantToken;
}

export default function FeatureCard({ 
  icon, 
  title, 
  body, 
  link,
  variant = "default" 
}: FeatureCardProps) {
  const bgClass = variant === "highlight" ? "bg-white" : "bg-gray-50";
  
  return (
    <div className={`${bgClass} p-6 rounded-xl shadow-sm`}>
      <Stack gap="sm">
        <div className="text-3xl">
          {typeof icon === "string" ? <span>{icon}</span> : icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>
        <p className="text-sm text-gray-600">{body}</p>
        {link && (
          <a
            href={link.href}
            className="text-sm text-indigo-600 font-semibold hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded transition-colors"
          >
            {link.label} →
          </a>
        )}
      </Stack>
    </div>
  );
}

