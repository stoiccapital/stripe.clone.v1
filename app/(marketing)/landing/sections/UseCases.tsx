import Section from '@/components/structural/Section';
import Container from '@/components/structural/Container';
import Grid from '@/components/structural/Grid';
import Stack from '@/components/structural/Stack';
import Headline from '@/components/content/Headline';
import FeatureCard from '@/components/conversion/FeatureCard';
import ImageBlock from '@/components/media/ImageBlock';

interface UseCaseData {
  icon: string;
  title: string;
  body: string;
  imageAlt: string;
}

export default function UseCases() {
  const useCases: UseCaseData[] = [
    { 
      icon: '🏢', 
      title: 'Supporting Title', 
      body: 'Lorem ipsum body text',
      imageAlt: 'Enterprise fleet management dashboard with multi-vehicle monitoring'
    },
    { 
      icon: '👥', 
      title: 'Supporting Title', 
      body: 'Lorem ipsum body text',
      imageAlt: 'Driver management interface showing team performance and assignments'
    },
    { 
      icon: '🚀', 
      title: 'Supporting Title', 
      body: 'Lorem ipsum body text',
      imageAlt: 'Route optimization view displaying efficient trip planning and navigation'
    },
  ];

  return (
    <Section id="use-cases" background="default" ariaLabel="Use cases">
      <Container>
        <Stack gap="xl" align="center">
          <Headline level={2} align="center">Built for every type of fleet</Headline>
          <Grid columns="3" gap="lg">
            {useCases.map((useCase, index) => (
              <Stack key={index} gap="sm">
                <ImageBlock alt={useCase.imageAlt} aspect="video" width={960} height={540} />
                <FeatureCard
                  icon={useCase.icon}
                  title={useCase.title}
                  body={useCase.body}
                />
              </Stack>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}
