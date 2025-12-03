import Stack from '@/components/structural/Stack';
import { getGapClass, getFooterSpacingClass, getContainerPaddingClass } from '@/lib/ui/tokens';

interface FooterProps {
  productName: string;
}

export default function Footer({ productName }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className={`max-w-6xl mx-auto ${getContainerPaddingClass()} ${getFooterSpacingClass()}`}>
        <Stack gap="lg">
          <div className={`grid grid-cols-1 md:grid-cols-4 ${getGapClass("lg")}`}>
          <Stack gap="xs">
            <h2 className="text-lg font-semibold text-gray-900">{productName}</h2>
            <p className="text-sm text-gray-600">Building the future of work.</p>
          </Stack>
          <Stack gap="sm">
            <h3 className="text-sm font-semibold text-gray-900">Product</h3>
            <Stack gap="xs">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Integrations
              </a>
            </Stack>
          </Stack>
          <Stack gap="sm">
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <Stack gap="xs">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Blog
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Careers
              </a>
            </Stack>
          </Stack>
          <Stack gap="sm">
            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
            <Stack gap="xs">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Documentation
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Support
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Community
              </a>
            </Stack>
          </Stack>
        </div>
        <div className={`border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center ${getGapClass("md")}`}>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} {productName}. All rights reserved.
          </p>
          <div className={`flex ${getGapClass("lg")}`}>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Terms
            </a>
          </div>
        </div>
        </Stack>
      </div>
    </footer>
  );
}

