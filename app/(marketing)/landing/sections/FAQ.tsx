import Section from '@/components/structural/Section';
import Container from '@/components/structural/Container';
import Stack from '@/components/structural/Stack';
import Headline from '@/components/content/Headline';
import FAQItem from '@/components/conversion/FAQItem';

interface FaqData {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqs: FaqData[] = [
    { question: 'Supporting Title', answer: 'Lorem ipsum body text' },
    { question: 'Supporting Title', answer: 'Lorem ipsum body text' },
    { question: 'Supporting Title', answer: 'Lorem ipsum body text' },
    { question: 'Supporting Title', answer: 'Lorem ipsum body text' },
    { question: 'Supporting Title', answer: 'Lorem ipsum body text' },
  ];

  return (
    <Section id="faq" background="subtle" ariaLabel="Frequently asked questions">
      <Container maxWidth="faq">
        <Stack gap="xl" align="center">
          <Headline level={2} align="center">Frequently asked questions</Headline>
          <Stack gap="md">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Section>
  );
}
