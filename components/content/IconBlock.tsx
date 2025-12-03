import Stack from '@/components/structural/Stack';
import { getIconSizeClass } from '@/lib/ui/tokens';

interface IconBlockProps {
  icon: React.ReactNode | string;
  label?: string;
  children?: React.ReactNode;
}

export default function IconBlock({ icon, label, children }: IconBlockProps) {
  return (
    <Stack gap="sm">
      <div className={getIconSizeClass()}>
        {typeof icon === "string" ? <span>{icon}</span> : icon}
      </div>
      {label && (
        <div className="text-sm font-semibold text-gray-900">{label}</div>
      )}
      {children}
    </Stack>
  );
}

