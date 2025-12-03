import Section from '@/components/structural/Section';
import Container from '@/components/structural/Container';
import Stack from '@/components/structural/Stack';
import Split from '@/components/structural/Split';
import Headline from '@/components/content/Headline';
import Paragraph from '@/components/content/Paragraph';
import ImageBlock from '@/components/media/ImageBlock';

interface DeepDiveData {
  title: string;
  body: string;
  imageAlt: string;
}

export default function DeepDives() {
  const deepDives: DeepDiveData[] = [
    { 
      title: 'Supporting Title', 
      body: 'Lorem ipsum body text',
      imageAlt: 'Dashboard showing fleet performance analytics and real-time metrics'
    },
    { 
      title: 'Supporting Title', 
      body: 'Lorem ipsum body text',
      imageAlt: 'Trip management interface displaying driver assignments and route optimization'
    },
    { 
      title: 'Supporting Title', 
      body: 'Lorem ipsum body text',
      imageAlt: 'Financial reporting view with cost analysis and revenue tracking'
    },
  ];

  return (
    <Section background="subtle" ariaLabel="Deep dives">
      <Container>
        <Stack gap="xl" align="center">
          <Headline level={2} align="center">See how it works</Headline>
          <Stack gap="xl">
            {deepDives.map((dive, index) => (
              <Split key={index} reverse={index % 2 === 1} gap="lg" align="center">
                <Stack gap="sm">
                  <Headline level={3}>{dive.title}</Headline>
                  <Paragraph>{dive.body}</Paragraph>
                </Stack>
                <ImageBlock alt={dive.imageAlt} aspect="video" priority={true} />
              </Split>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Section>
  );
}
