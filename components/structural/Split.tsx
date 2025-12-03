import { GapToken, AlignToken, getSplitGapClass, getItemsAlignClass } from '@/lib/ui/tokens';

interface SplitProps {
  children: React.ReactNode;
  reverse?: boolean;
  align?: AlignToken;
  gap?: GapToken;
}

export default function Split({ 
  children, 
  reverse = false, 
  align = "left",
  gap = "md" 
}: SplitProps) {
  const gapClass = getSplitGapClass(gap);
  const alignClass = getItemsAlignClass(align);
  
  // Fixed structural grid pattern - not controlled via props per SOP
  // This is a fixed 2-column responsive layout pattern
  // Use CSS Grid order for reverse layout (standard Tailwind utilities: order-1, order-2)
  const firstOrderClass = reverse ? "lg:order-2" : "lg:order-1";
  const secondOrderClass = reverse ? "lg:order-1" : "lg:order-2";
  
  // Extract children to apply order classes
  const childrenArray = Array.isArray(children) ? children : [children];
  const firstChild = childrenArray[0];
  const secondChild = childrenArray[1];
  
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 ${gapClass} ${alignClass}`}>
      {firstChild && (
        <div className={firstOrderClass}>
          {firstChild}
        </div>
      )}
      {secondChild && (
        <div className={secondOrderClass}>
          {secondChild}
        </div>
      )}
    </div>
  );
}

