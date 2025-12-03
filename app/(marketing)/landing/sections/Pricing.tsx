import Section from '@/components/structural/Section';
import Container from '@/components/structural/Container';
import Grid from '@/components/structural/Grid';
import Stack from '@/components/structural/Stack';
import Headline from '@/components/content/Headline';
import PricingCard from '@/components/conversion/PricingCard';

interface PricingTierData {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: {
    label: string;
    href: string;
  };
  badge?: string;
}

export default function Pricing() {
  const tiers: PricingTierData[] = [
    {
      name: 'Tier Name',
      price: '$29',
      period: 'per month',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      cta: { label: 'Get Started', href: '#' },
    },
    {
      name: 'Tier Name',
      price: '$99',
      period: 'per month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
      cta: { label: 'Get Started', href: '#' },
      badge: 'Most popular',
    },
    {
      name: 'Tier Name',
      price: 'Custom',
      period: 'pricing',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
      cta: { label: 'Get Started', href: '#' },
    },
  ];

  return (
    <Section id="pricing" background="default" ariaLabel="Pricing">
      <Container>
        <Stack gap="xl" align="center">
          <Headline level={2} align="center">Simple, transparent pricing</Headline>
          <Grid columns="3" gap="lg">
            {tiers.map((tier, index) => (
              <PricingCard
                key={index}
                name={tier.name}
                price={tier.price}
                period={tier.period}
                features={tier.features}
                cta={tier.cta}
                badge={tier.badge}
                variant={tier.badge ? "highlight" : "default"}
              />
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}
