import Image from 'next/image';
import Stack from '@/components/structural/Stack';
import { getGapClass } from '@/lib/ui/tokens';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating?: number;
}

export default function TestimonialCard({ 
  quote, 
  author, 
  role, 
  company,
  avatar,
  rating 
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <Stack gap="sm">
        {rating && (
          <div className={`flex ${getGapClass("xs")}`}>
            {Array.from({ length: rating }).map((_, i) => (
              <span key={i} className="text-yellow-400">★</span>
            ))}
          </div>
        )}
        <p className="text-gray-600 italic">
          &ldquo;{quote}&rdquo;
        </p>
        <div className={`flex items-center ${getGapClass("sm")} pt-4 border-t border-gray-100`}>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            {avatar ? (
              <Image 
                src={avatar} 
                alt={author} 
                width={40}
                height={40}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-sm text-gray-600">
                {author.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <div className="font-semibold text-gray-900">{author}</div>
            <div className="text-sm text-gray-600">
              {role}, {company}
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
}

