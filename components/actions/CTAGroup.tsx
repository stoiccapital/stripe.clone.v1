import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { AlignToken, SizeToken, GapToken, getJustifyClass, getGapClass } from '@/lib/ui/tokens';

interface CTA {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface CTAGroupProps {
  primary: CTA;
  secondary?: CTA;
  align?: AlignToken;
  size?: SizeToken;
  gap?: GapToken;
}

export default function CTAGroup({ 
  primary, 
  secondary,
  align = "left",
  size = "md",
  gap = "md"
}: CTAGroupProps) {
  const alignClass = getJustifyClass(align);
  const gapClass = getGapClass(gap);
  
  return (
    <div className={`flex flex-col sm:flex-row ${gapClass} ${alignClass}`}>
      <PrimaryButton 
        label={primary.label} 
        href={primary.href} 
        onClick={primary.onClick}
        size={size}
      />
      {secondary && (
        <SecondaryButton 
          label={secondary.label} 
          href={secondary.href} 
          onClick={secondary.onClick}
          size={size}
        />
      )}
    </div>
  );
}
