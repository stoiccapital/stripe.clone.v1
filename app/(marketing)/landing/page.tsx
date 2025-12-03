import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/navigation/Navbar';
import Hero from './sections/Hero';
import SocialProof from './sections/SocialProof';
import ValueProps from './sections/ValueProps';
import Features from './sections/Features';
import DeepDives from './sections/DeepDives';
import UseCases from './sections/UseCases';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import FooterSection from './sections/Footer';

export const metadata: Metadata = {
  title: 'Fleet management software for growing fleets | Fahrly',
  description: 'Optimize routes, automate compliance, and control costs with fleet management software for Uber-style subcontractors. Real-time insights and simple onboarding.',
  openGraph: {
    title: 'Fleet management software for growing fleets | Fahrly',
    description: 'Optimize routes, automate compliance, and control costs with fleet management software for Uber-style subcontractors. Real-time insights and simple onboarding.',
    url: 'https://www.example.com/landing',
    images: [
      {
        url: '/og/landing.png',
        width: 1200,
        height: 630,
        alt: 'Fleet management software dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fleet management software for growing fleets | Fahrly',
    description: 'Optimize routes, automate compliance, and control costs with fleet management software for Uber-style subcontractors. Real-time insights and simple onboarding.',
    images: ['/og/landing.png'],
  },
  alternates: {
    canonical: 'https://www.example.com/landing',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fleet management software for growing fleets',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://www.example.com/landing',
};

export default function LandingPage() {
  return (
    <>
      <Script
        id="ld-json-landing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ValueProps />
        <Features />
        <DeepDives />
        <UseCases />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <FooterSection />
      </main>
    </>
  );
}
