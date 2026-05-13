import { Mail, MessageSquare, Timer } from 'lucide-react';
import ContactForm from '../components/ContactForm.jsx';
import Section from '../components/Section.jsx';
import Seo from '../components/Seo.jsx';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Contact Shokat Nexus Digital for websites, WordPress development, SEO, digital marketing, and AI solutions."
      />
      <Section
        className="pt-24"
        eyebrow="Contact"
        title="Let’s plan your next digital move."
        subtitle="Send your project details and we will respond with a clear path forward."
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            {[
              ['Project inquiries', 'Share scope, goals, and timeline.', MessageSquare],
              ['Email workflow', 'Messages route securely to the admin inbox.', Mail],
              ['Quick response', 'Expect a practical next-step conversation.', Timer]
            ].map(([title, copy, Icon]) => (
              <div key={title} className="glass flex gap-4 rounded-2xl p-5">
                <Icon className="mt-1 shrink-0 text-cyan-300" size={24} />
                <div>
                  <h3 className="font-bold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{copy}</p>
                </div>
              </div>
            ))}
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
