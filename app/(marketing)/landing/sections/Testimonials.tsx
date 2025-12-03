import Section from '@/components/structural/Section';
import Container from '@/components/structural/Container';
import Grid from '@/components/structural/Grid';
import Stack from '@/components/structural/Stack';
import Headline from '@/components/content/Headline';
import TestimonialCard from '@/components/conversion/TestimonialCard';

interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: TestimonialData[] = [
    {
      quote: 'Lorem ipsum body text',
      author: 'Author Name',
      role: 'Role',
      company: 'Company',
      rating: 5,
    },
    {
      quote: 'Lorem ipsum body text',
      author: 'Author Name',
      role: 'Role',
      company: 'Company',
      rating: 5,
    },
    {
      quote: 'Lorem ipsum body text',
      author: 'Author Name',
      role: 'Role',
      company: 'Company',
      rating: 5,
    },
  ];

  return (
    <Section background="subtle" ariaLabel="Testimonials">
      <Container>
        <Stack gap="xl" align="center">
          <Headline level={2} align="center">Loved by fleet managers everywhere</Headline>
          <Grid columns="3" gap="md">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                rating={testimonial.rating}
              />
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}
