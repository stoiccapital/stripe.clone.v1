import { getFlexAlignClass } from '@/lib/ui/tokens';

interface LogoItemProps {
  name: string;
  decorative?: boolean;
}

export default function LogoItem({ name, decorative = true }: LogoItemProps) {
  return (
    <div 
      className={`h-12 bg-gray-50 rounded-lg ${getFlexAlignClass("center")} opacity-60`}
      aria-hidden={decorative}
    >
      <span className="text-sm text-gray-600">{name}</span>
    </div>
  );
}

