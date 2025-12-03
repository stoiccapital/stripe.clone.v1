import { GapToken, AlignToken, getStackGapClass, getTextAlignClass } from '@/lib/ui/tokens';

interface StackProps {
  children: React.ReactNode;
  gap?: GapToken;
  align?: AlignToken;
}

export default function Stack({ children, gap = "md", align = "left" }: StackProps) {
  const gapClass = getStackGapClass(gap);
  const alignClass = getTextAlignClass(align);
  
  return (
    <div className={`${gapClass} ${alignClass}`}>
      {children}
    </div>
  );
}

