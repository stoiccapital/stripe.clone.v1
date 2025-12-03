import Navbar from '@/components/navigation/Navbar';
import Hero from '@/app/(marketing)/landing/sections/Hero';
import SocialProof from '@/app/(marketing)/landing/sections/SocialProof';
import ValueProps from '@/app/(marketing)/landing/sections/ValueProps';
import Features from '@/app/(marketing)/landing/sections/Features';
import DeepDives from '@/app/(marketing)/landing/sections/DeepDives';
import UseCases from '@/app/(marketing)/landing/sections/UseCases';
import Testimonials from '@/app/(marketing)/landing/sections/Testimonials';
import Pricing from '@/app/(marketing)/landing/sections/Pricing';
import FAQ from '@/app/(marketing)/landing/sections/FAQ';
import FinalCTA from '@/app/(marketing)/landing/sections/FinalCTA';
import Footer from '@/components/navigation/Footer';

export default function Home() {
  const productName = '{PRODUCT_NAME}';
  const oneLiner = '{ONE_LINER_VALUE_PROP}';
  const targetAudience = '{TARGET_AUDIENCE}';
  const primaryAction = '{PRIMARY_CTA_LABEL}';
  const secondaryAction = '{SECONDARY_CTA_LABEL}';
  const includePricing = true;
  const seoKeywords = '{comma, separated, list}';
  const brandName = '{BRAND_NAME}';
  const navLinks = ['Features', 'Pricing', 'Use Cases', 'FAQ'];

  return (
    <>
      <Navbar
        brandName={brandName}
        navLinks={navLinks}
        primaryCta={primaryAction}
        ctaLink="#"
      />
      <main>
      <Hero
        productName={productName}
        oneLiner={oneLiner}
        targetAudience={targetAudience}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        seoKeywords={seoKeywords}
      />
      <SocialProof />
      <ValueProps productName={productName} seoKeywords={seoKeywords} />
      <Features />
      <DeepDives />
      <UseCases />
      <Testimonials />
      {includePricing && <Pricing primaryAction={primaryAction} />}
      <FAQ seoKeywords={seoKeywords} />
      <FinalCTA primaryAction={primaryAction} />
      <Footer productName={productName} />
      </main>
    </>
  );
}

