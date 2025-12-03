import Section from '@/components/structural/Section';
import Container from '@/components/structural/Container';
import Grid from '@/components/structural/Grid';
import Stack from '@/components/structural/Stack';
import Headline from '@/components/content/Headline';
import Paragraph from '@/components/content/Paragraph';
import LogoItem from '@/components/content/LogoItem';

export default function SocialProof() {
  const logos = ['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4', 'Logo 5', 'Logo 6'];

  return (
    <Section background="default" ariaLabel="Social proof">
      <Container>
        <Stack gap="lg" align="center">
          <Headline level={2} align="center">Trusted by leading fleets worldwide</Headline>
          <Grid columns="3" gap="lg">
            {logos.map((logo, i) => (
              <LogoItem key={i} name={logo} decorative={true} />
            ))}
          </Grid>
          <Grid columns="3" gap="md">
            <Stack gap="sm" align="center">
              <Headline level={3} align="center">10K+</Headline>
              <Paragraph>Active users</Paragraph>
            </Stack>
            <Stack gap="sm" align="center">
              <Headline level={3} align="center">99.9%</Headline>
              <Paragraph>Uptime</Paragraph>
            </Stack>
            <Stack gap="sm" align="center">
              <Headline level={3} align="center">4.9/5</Headline>
              <Paragraph>Customer rating</Paragraph>
            </Stack>
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}
