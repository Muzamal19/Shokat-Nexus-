import PricingGrid from '../components/PricingGrid.jsx';
import Section from '../components/Section.jsx';
import Seo from '../components/Seo.jsx';

export default function Pricing() {
  return (
    <>
      <Seo
        title="Pricing"
        description="View starting prices for web development, WordPress development, digital marketing, SEO, and AI solutions from Shokat Nexus Digital."
      />
      <Section
        className="pt-24"
        eyebrow="Pricing"
        title="Transparent starting prices for Shokat Nexus Digital services."
        subtitle="Select a service package to open the contact form with your chosen service already attached."
      >
        <PricingGrid />
        <p className="mt-6 text-sm leading-6 text-slate-400">
          Prices are starting estimates. Final cost depends on scope, integrations, content, timeline, and support needs.
        </p>
      </Section>
    </>
  );
}
