import { GapToken, getGapClass } from '@/lib/ui/tokens';

interface GridProps {
  children: React.ReactNode;
  columns?: "1" | "2" | "3" | "4";
  gap?: GapToken;
}

export default function Grid({ children, columns = "1", gap = "md" }: GridProps) {
  const colsClass = 
    columns === "1" ? "grid-cols-1" :
    columns === "2" ? "md:grid-cols-2" :
    columns === "3" ? "md:grid-cols-3" :
    "lg:grid-cols-4";
  
  const gapClass = getGapClass(gap);
  
  return (
    <div className={`grid ${colsClass} ${gapClass}`}>
      {children}
    </div>
  );
}

