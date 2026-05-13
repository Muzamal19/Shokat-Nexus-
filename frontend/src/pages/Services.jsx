import Section from '../components/Section.jsx';
import Seo from '../components/Seo.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Explore web development, WordPress development, digital marketing, SEO, and AI solutions from Shokat Nexus Digital."
      />
      <Section
        className="pt-24"
        eyebrow="Services"
        title="Specialized delivery for the digital work your business actually needs."
        subtitle="Choose one service or combine them into a complete launch and growth system."
      >
        <ServicesGrid />
      </Section>
    </>
  );
}
