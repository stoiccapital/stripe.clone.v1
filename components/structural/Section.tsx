import { BackgroundToken, getBackgroundClass, getSectionSpacingClass } from '@/lib/ui/tokens';

interface SectionProps {
  id?: string;
  background?: BackgroundToken;
  children: React.ReactNode;
  ariaLabel?: string;
}

export default function Section({ 
  id, 
  background = "default", 
  children, 
  ariaLabel 
}: SectionProps) {
  const backgroundClass = getBackgroundClass(background);
  const spacingClass = getSectionSpacingClass();
  
  return (
    <section 
      id={id} 
      className={`${spacingClass} ${backgroundClass}`}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  );
}

