import Section from '@/components/structural/Section';
import Container from '@/components/structural/Container';
import Split from '@/components/structural/Split';
import Stack from '@/components/structural/Stack';
import Headline from '@/components/content/Headline';
import Paragraph from '@/components/content/Paragraph';
import CTAGroup from '@/components/actions/CTAGroup';
import ImageBlock from '@/components/media/ImageBlock';

export default function Hero() {
  return (
    <Section id="hero" background="subtle" ariaLabel="Hero section">
      <Container>
        <Split gap="lg" align="center">
          <Stack gap="md">
            <Headline level={1}>Fleet management that scales with your business</Headline>
            <Paragraph>Lorem ipsum body text</Paragraph>
            <CTAGroup 
              primary={{ label: "Primary CTA", href: "#" }}
              secondary={{ label: "Secondary CTA", href: "#" }}
            />
          </Stack>
          <ImageBlock 
            alt="Fleet performance dashboard with trips and costs overview" 
            aspect="video"
            priority={true}
          />
        </Split>
      </Container>
    </Section>
  );
}
