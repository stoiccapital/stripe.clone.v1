import Stack from '@/components/structural/Stack';
import PrimaryButton from '@/components/actions/PrimaryButton';
import SecondaryButton from '@/components/actions/SecondaryButton';
import Badge from '@/components/content/Badge';
import { VariantToken, getGapClass } from '@/lib/ui/tokens';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: {
    label: string;
    href: string;
  };
  badge?: string;
  variant?: VariantToken;
}

export default function PricingCard({ 
  name, 
  price, 
  period, 
  features, 
  cta,
  badge,
  variant = "default" 
}: PricingCardProps) {
  const bgClass = variant === "highlight" ? "bg-white" : "bg-gray-50";
  const borderClass = badge ? "border-2 border-indigo-600" : "";
  
  return (
    <div className={`relative ${bgClass} p-8 rounded-xl ${borderClass}`}>
      <Stack gap="md">
        {badge && (
          <Badge tone="highlight">{badge}</Badge>
        )}
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <div className={`flex items-baseline ${getGapClass("xs")}`}>
          <span className="text-4xl font-semibold text-gray-900">{price}</span>
          <span className="text-gray-600">{period}</span>
        </div>
        <Stack gap="sm">
          {features.map((feature, index) => (
            <div key={index} className={`flex items-start ${getGapClass("xs")}`}>
              <span className="text-indigo-600">✓</span>
              <span className="text-gray-600">{feature}</span>
            </div>
          ))}
        </Stack>
        {badge ? (
          <PrimaryButton label={cta.label} href={cta.href} />
        ) : (
          <SecondaryButton label={cta.label} href={cta.href} />
        )}
      </Stack>
    </div>
  );
}

