import { ToneToken, getTextColorClass } from '@/lib/ui/tokens';

interface ParagraphProps {
  children: React.ReactNode;
  tone?: ToneToken;
}

export default function Paragraph({ children, tone = "default" }: ParagraphProps) {
  const toneClass = getTextColorClass(tone);
  
  return (
    <p className={toneClass}>
      {children}
    </p>
  );
}

