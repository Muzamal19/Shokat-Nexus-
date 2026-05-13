import { Bot, Globe2, LineChart, Search, Wrench } from 'lucide-react';

export const services = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Fast, responsive web apps built with modern frontend and backend architecture.',
    icon: Globe2,
    accent: 'from-cyan-400 to-emerald-300'
  },
  {
    slug: 'wordpress-development',
    title: 'WordPress Development',
    description: 'Custom WordPress sites, themes, integrations, performance tuning, and maintenance.',
    icon: Wrench,
    accent: 'from-sky-400 to-violet-400'
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Conversion-focused campaigns across social, search, funnels, and content channels.',
    icon: LineChart,
    accent: 'from-amber-300 to-rose-400'
  },
  {
    slug: 'seo',
    title: 'SEO',
    description: 'Technical SEO, content strategy, keyword planning, and measurable growth systems.',
    icon: Search,
    accent: 'from-lime-300 to-cyan-400'
  },
  {
    slug: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Automation, chatbots, AI workflows, and intelligent tools tailored to your business.',
    icon: Bot,
    accent: 'from-fuchsia-400 to-cyan-300'
  }
];
