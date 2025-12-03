import Section from '@/components/structural/Section';
import Container from '@/components/structural/Container';
import Grid from '@/components/structural/Grid';
import Stack from '@/components/structural/Stack';
import Headline from '@/components/content/Headline';
import FeatureCard from '@/components/conversion/FeatureCard';

export default function ValueProps() {
  return (
    <Section background="subtle" ariaLabel="Value propositions">
      <Container>
        <Stack gap="xl" align="center">
          <Headline level={2} align="center">Everything you need to run a modern fleet</Headline>
          <Grid columns="3" gap="lg">
            <FeatureCard
              icon="⚡"
              title="Supporting Title"
              body="Lorem ipsum body text"
            />
            <FeatureCard
              icon="🔒"
              title="Supporting Title"
              body="Lorem ipsum body text"
            />
            <FeatureCard
              icon="🚀"
              title="Supporting Title"
              body="Lorem ipsum body text"
            />
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}
