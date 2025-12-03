import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fahrly — Modern fleet management platform',
  description: 'Tools and resources for modern fleet operators.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}

