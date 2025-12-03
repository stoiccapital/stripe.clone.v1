import { AlignToken, getTextAlignClass } from '@/lib/ui/tokens';

interface SubheadlineProps {
  children: React.ReactNode;
  align?: AlignToken;
}

export default function Subheadline({ children, align = "left" }: SubheadlineProps) {
  const alignClass = getTextAlignClass(align);
  
  return (
    <p className={`text-lg text-gray-600 ${alignClass}`}>
      {children}
    </p>
  );
}

