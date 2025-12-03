import { MaxWidthToken, getMaxWidthClass, getContainerPaddingClass } from '@/lib/ui/tokens';

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: MaxWidthToken;
}

export default function Container({ children, maxWidth = "standard" }: ContainerProps) {
  const maxWidthClass = getMaxWidthClass(maxWidth);
  const paddingClass = getContainerPaddingClass();
  
  return (
    <div className={`${maxWidthClass} mx-auto ${paddingClass}`}>
      {children}
    </div>
  );
}

