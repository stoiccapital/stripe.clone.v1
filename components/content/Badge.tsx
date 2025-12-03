import { ToneToken } from '@/lib/ui/tokens';

interface BadgeProps {
  children: React.ReactNode;
  tone?: ToneToken;
}

export default function Badge({ children, tone = "default" }: BadgeProps) {
  const toneClass = 
    tone === "highlight" 
      ? "bg-indigo-600 text-white" 
      : "bg-gray-100 text-gray-900";
  
  return (
    <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${toneClass}`}>
      {children}
    </span>
  );
}

