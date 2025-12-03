import Section from '@/components/structural/Section';
import Container from '@/components/structural/Container';
import Stack from '@/components/structural/Stack';
import Headline from '@/components/content/Headline';
import Paragraph from '@/components/content/Paragraph';
import PrimaryButton from '@/components/actions/PrimaryButton';

export default function FinalCTA() {
  return (
    <Section background="inverted" ariaLabel="Final call to action">
      <Container maxWidth="cta">
        <Stack gap="md" align="center">
          <Headline level={2} align="center" tone="default">
            Ready to transform your fleet operations?
          </Headline>
          <Paragraph tone="muted">Lorem ipsum body text</Paragraph>
          <PrimaryButton label="Primary CTA" href="#" />
        </Stack>
      </Container>
    </Section>
  );
}
