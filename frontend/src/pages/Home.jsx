import { CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import Seo from '../components/Seo.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';
import ContactForm from '../components/ContactForm.jsx';
import PricingGrid from '../components/PricingGrid.jsx';

const strengths = [
  '100% satisfaction focus',
  'Business-first discovery',
  'Responsive engineering',
  'Search-ready foundations',
  'Transparent communication',
  'After-launch support'
];

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <Section
        id="services"
        className="!pt-10 sm:!pt-12"
        eyebrow="What we do"
        title="Digital services that connect strategy, engineering, and growth."
        subtitle="From the first landing page to advanced AI workflows, we shape reliable digital systems around your business goals."
      >
        <ServicesGrid />
      </Section>

      <Section
        id="pricing"
        eyebrow="Pricing"
        title="Simple starting prices for core services."
        subtitle="Each package can be adjusted after discovery, but these starting points help clients choose the right direction quickly."
      >
        <PricingGrid limit={3} />
        <div className="mt-8">
          <Link
            to="/pricing"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-ink"
          >
            View All Pricing
          </Link>
        </div>
      </Section>

      <Section
        id="about"
        eyebrow="About"
        title="A focused software house that cares about client satisfaction."
        subtitle="Shokat Nexus Digital blends design taste, clean code, marketing clarity, and modern automation so your digital presence is easier to launch, measure, improve, and trust."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass rounded-2xl p-7">
            <Sparkles className="mb-5 text-cyan-300" size={30} />
            <p className="text-lg leading-8 text-slate-200">
              We work across websites, WordPress, SEO, marketing, and AI implementation with one aim: turn scattered
              digital needs into a system that feels clear, fast, commercially useful, and aligned with your vision.
            </p>
            <p className="mt-5 leading-8 text-slate-300">
              Every project is handled with a satisfaction-first mindset, practical guidance, responsive delivery, and
              support after launch.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item) => (
              <div key={item} className="glass flex items-center gap-3 rounded-2xl p-5">
                <CheckCircle2 className="shrink-0 text-emerald-300" size={22} />
                <span className="font-semibold text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Tell us what you want to build."
        subtitle="Share a few details and the team will get back to you with the next best step."
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4 text-slate-300">
            <p className="leading-8">
              Whether you need a polished business site, a stronger WordPress setup, better search visibility, or an AI
              automation layer, the first conversation starts here.
            </p>
            <div className="glass rounded-2xl p-5">
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">Response</p>
              <p className="mt-2 text-xl font-bold text-white">Fast, practical, and project-focused.</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
