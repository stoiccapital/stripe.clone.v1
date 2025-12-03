import { SizeToken } from '@/lib/ui/tokens';

interface SecondaryButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  size?: SizeToken;
}

export default function SecondaryButton({ 
  label, 
  href, 
  onClick,
  size = "md" 
}: SecondaryButtonProps) {
  const sizeClass = 
    size === "sm" ? "px-4 py-2 text-sm" :
    size === "lg" ? "px-8 py-4 text-lg" :
    "px-6 py-3";
  
  const baseClasses = `inline-flex items-center justify-center ${sizeClass} bg-white text-gray-900 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200`;
  
  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {label}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={baseClasses}>
      {label}
    </button>
  );
}

