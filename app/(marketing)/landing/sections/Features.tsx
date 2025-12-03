import Section from '@/components/structural/Section';
import Container from '@/components/structural/Container';
import Grid from '@/components/structural/Grid';
import Stack from '@/components/structural/Stack';
import Headline from '@/components/content/Headline';
import FeatureCard from '@/components/conversion/FeatureCard';

interface FeatureData {
  icon: string;
  title: string;
  body: string;
  link: {
    label: string;
    href: string;
  };
}

export default function Features() {
  const features: FeatureData[] = [
    { icon: '⚡', title: 'Supporting Title', body: 'Lorem ipsum body text', link: { label: 'Learn more', href: '#' } },
    { icon: '🔒', title: 'Supporting Title', body: 'Lorem ipsum body text', link: { label: 'Learn more', href: '#' } },
    { icon: '📊', title: 'Supporting Title', body: 'Lorem ipsum body text', link: { label: 'Learn more', href: '#' } },
    { icon: '🚀', title: 'Supporting Title', body: 'Lorem ipsum body text', link: { label: 'Learn more', href: '#' } },
  ];

  return (
    <Section id="features" background="default" ariaLabel="Features">
      <Container>
        <Stack gap="xl" align="center">
          <Headline level={2} align="center">Powerful features built for fleet operators</Headline>
          <Grid columns="4" gap="md">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                body={feature.body}
                link={feature.link}
              />
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}
