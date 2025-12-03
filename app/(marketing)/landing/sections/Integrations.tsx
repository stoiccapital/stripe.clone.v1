// app/(marketing)/landing/sections/Integrations.tsx

import Section from '@/components/structural/Section';
import Container from '@/components/structural/Container';
import Grid from '@/components/structural/Grid';
import Stack from '@/components/structural/Stack';
import Headline from '@/components/content/Headline';
import Subheadline from '@/components/content/Subheadline';
import FeatureCard from '@/components/conversion/FeatureCard';

interface IntegrationData {
  icon: string;
  title: string;
  body: string;
}

// Background: default - informational section that doesn't need visual emphasis
export default function Integrations() {
  const integrations: IntegrationData[] = [
    {
      icon: '🚗',
      title: 'Uber Partner API',
      body: 'Automatic trip and driver data sync. Eliminates manual entry and reduces reconciliation time by 80%.',
    },
    {
      icon: '⚡',
      title: 'Bolt Business',
      body: 'Real-time earnings and commission tracking. Financial data flows directly into your accounting.',
    },
    {
      icon: '🌐',
      title: 'FreeNow Fleet',
      body: 'Driver assignments and vehicle status sync automatically. No duplicate data entry across platforms.',
    },
    {
      icon: '📊',
      title: 'DATEV',
      body: 'Export payroll and financial data in DATEV format. Meets German tax compliance requirements automatically.',
    },
    {
      icon: '💳',
      title: 'SEPA Direct Debit',
      body: 'Process driver payments and fleet expenses through SEPA. Reduces bank transfer fees and processing time.',
    },
    {
      icon: '📋',
      title: 'Lexware',
      body: 'One-click export to Lexware accounting. Payroll and expense data formatted for German tax standards.',
    },
  ];

  return (
    <Section id="integrations" background="default" ariaLabel="Integrations">
      <Container>
        <Stack gap="xl" align="center">
          <Stack gap="sm" align="center">
            <Headline level={2} align="center">
              Works with your existing tools
            </Headline>
            <Subheadline align="center">
              Connect Fahrly to ride-hailing platforms and accounting systems. Data flows automatically, eliminating manual work.
            </Subheadline>
          </Stack>
          <Grid columns="3" gap="lg">
            {integrations.map((integration, index) => (
              <FeatureCard
                key={index}
                icon={integration.icon}
                title={integration.title}
                body={integration.body}
              />
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}

