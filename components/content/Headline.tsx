import { AlignToken, ToneToken, getTextAlignClass } from '@/lib/ui/tokens';

interface HeadlineProps {
  level: 1 | 2 | 3;
  children: React.ReactNode;
  align?: AlignToken;
  tone?: ToneToken;
}

export default function Headline({ 
  level, 
  children, 
  align = "left",
  tone = "default" 
}: HeadlineProps) {
  const sizeClass = 
    level === 1 ? "text-4xl lg:text-5xl" :
    level === 2 ? "text-3xl" :
    "text-2xl";
  
  const alignClass = getTextAlignClass(align);
  
  const toneClass = 
    tone === "muted" ? "text-gray-600" :
    tone === "highlight" ? "text-indigo-600" :
    "text-gray-900";
  
  const Tag = level === 1 ? "h1" : level === 2 ? "h2" : "h3";
  
  return (
    <Tag className={`${sizeClass} font-semibold ${toneClass} ${alignClass}`}>
      {children}
    </Tag>
  );
}

