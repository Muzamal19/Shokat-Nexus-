import { CheckCircle2, Code2, Headphones, Layers3, ShieldCheck, Target, TrendingUp } from 'lucide-react';
import Section from '../components/Section.jsx';
import Seo from '../components/Seo.jsx';

const values = [
  {
    title: 'Clarity before code',
    description: 'We define the goal, user path, and success metrics before choosing the technical shape.',
    icon: Target
  },
  {
    title: 'Built to evolve',
    description: 'Sites and systems are structured so future content, campaigns, and integrations stay manageable.',
    icon: Layers3
  },
  {
    title: 'Modern execution',
    description: 'Clean frontend work, reliable backend APIs, SEO hygiene, and smart automation live in one workflow.',
    icon: Code2
  },
  {
    title: '100% satisfaction focus',
    description: 'We refine the work with clear feedback rounds so the final result feels aligned with your goals.',
    icon: ShieldCheck
  },
  {
    title: 'Growth-minded delivery',
    description: 'Every page, feature, campaign, and automation is shaped to support visibility, leads, and conversions.',
    icon: TrendingUp
  },
  {
    title: 'After-launch support',
    description: 'We stay available for fixes, improvements, updates, and practical guidance after your project goes live.',
    icon: Headphones
  }
];

const promises = [
  'Professional design tailored to your business',
  'Mobile-first responsive layouts',
  'Fast loading and SEO-friendly foundations',
  'Clear communication from start to finish',
  'Secure forms, clean code, and scalable structure',
  'Ongoing improvements when your business grows'
];

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Learn about Shokat Nexus Digital, a software house building websites, SEO systems, marketing assets, and AI solutions."
      />
      <Section
        className="pt-24"
        eyebrow="About Shokat Nexus Digital"
        title="We build digital solutions with clarity, care, and 100% satisfaction in mind."
        subtitle="Our software house helps businesses launch modern websites, improve online visibility, automate work, and grow with reliable digital systems."
      >
        <div className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass rounded-2xl p-7">
            <p className="text-lg leading-8 text-slate-200">
              At Shokat Nexus Digital, we do more than deliver a website or campaign. We listen to your business needs,
              plan a practical solution, and build with a satisfaction-first approach. Our goal is to give every client
              a polished, responsive, easy-to-manage digital presence that supports real business growth.
            </p>
            <p className="mt-5 leading-8 text-slate-300">
              Whether you need web development, WordPress development, digital marketing, SEO, or AI automation, we keep
              the process simple, transparent, and focused on results.
            </p>
          </div>

          <div className="glass rounded-2xl p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Our promise</p>
            <h3 className="mt-3 text-3xl font-extrabold text-white">100% client satisfaction focus</h3>
            <p className="mt-4 leading-7 text-slate-300">
              We value long-term relationships, honest communication, and work that clients feel confident showing to
              their customers.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article key={value.title} className="glass rounded-2xl p-6">
                <Icon className="mb-5 text-cyan-300" size={30} />
                <h3 className="text-xl font-bold text-white">{value.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{value.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {promises.map((promise) => (
            <div key={promise} className="glass flex items-center gap-3 rounded-2xl p-5">
              <CheckCircle2 className="shrink-0 text-emerald-300" size={22} />
              <span className="font-semibold text-white">{promise}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
