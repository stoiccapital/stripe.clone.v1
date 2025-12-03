import Image from 'next/image';
import { AspectToken } from '@/lib/ui/tokens';

interface ImageBlockProps {
  src?: string;
  alt: string;
  aspect?: AspectToken;
  priority?: boolean;
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

export default function ImageBlock({ 
  src, 
  alt, 
  aspect = "video",
  priority = false,
  width,
  height,
  children 
}: ImageBlockProps) {
  // Calculate default dimensions based on aspect ratio to prevent CLS
  // Default to 16:9 (video) aspect ratio: 960x540
  // Square: 800x800, Auto: fallback to video defaults
  const defaultDimensions = 
    aspect === "square" ? { width: 800, height: 800 } :
    aspect === "auto" ? { width: 960, height: 540 } :
    { width: 960, height: 540 }; // video (16:9)
  
  const finalWidth = width ?? defaultDimensions.width;
  const finalHeight = height ?? defaultDimensions.height;
  
  const aspectClass = 
    aspect === "video" ? "aspect-video" :
    aspect === "square" ? "aspect-square" :
    "";
  
  return (
    <div className={`relative ${aspectClass} overflow-hidden rounded-xl`}>
      {src ? (
        <Image 
          src={src} 
          alt={alt} 
          width={finalWidth}
          height={finalHeight}
          className="w-full h-full object-cover"
          priority={priority}
        />
      ) : (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          {children || <span className="text-gray-400 text-sm">Media Placeholder</span>}
        </div>
      )}
    </div>
  );
}

