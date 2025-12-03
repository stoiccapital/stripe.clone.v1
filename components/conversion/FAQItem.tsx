'use client';

import { useState } from 'react';
import Stack from '@/components/structural/Stack';
import { getGapClass } from '@/lib/ui/tokens';

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <Stack gap="sm">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full text-left flex items-center justify-between ${getGapClass("sm")} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg`}
          aria-expanded={isOpen}
        >
          <h3 className="text-lg font-semibold text-gray-900">
            {question}
          </h3>
          <span className="flex-shrink-0 text-gray-400">
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </span>
        </button>
        {isOpen && (
          <div className="pt-3 border-t border-gray-100">
            <p className="text-gray-600">{answer}</p>
          </div>
        )}
      </Stack>
    </div>
  );
}

