'use client';

import { useState } from 'react';
import PrimaryButton from '@/components/actions/PrimaryButton';
import { getGapClass } from '@/lib/ui/tokens';

interface NavbarProps {
  brandName?: string;
  navLinks?: string[];
  primaryCta?: string;
  ctaLink?: string;
}

export default function Navbar({
  brandName = '{BRAND_NAME}',
  navLinks = ['Features', 'Pricing', 'Use Cases', 'FAQ'],
  primaryCta = '{PRIMARY_CTA_LABEL}',
  ctaLink = '#',
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Note: Navigation links use href with # anchors
  // Browser handles scrolling automatically
  // If smooth scroll needed, it should be handled by parent/page level

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors"
            >
              {brandName}
            </a>
          </div>

          <div className={`hidden md:flex md:items-center ${getGapClass("xs")}`}>
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                {link}
              </a>
            ))}
            {primaryCta && (
              <div className="md:ml-4">
                <PrimaryButton label={primaryCta} href={ctaLink} size="sm" />
              </div>
            )}
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className={`px-2 pt-2 pb-4 flex flex-col ${getGapClass("xs")}`}>
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {link}
              </a>
            ))}
            {primaryCta && (
              <div className="px-3 pt-2">
                <PrimaryButton label={primaryCta} href={ctaLink} />
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

