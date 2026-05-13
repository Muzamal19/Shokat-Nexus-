import { services } from './services.js';

const pricingDetails = {
  'web-development': {
    price: 'PKR 75,000+',
    timeline: '2-5 weeks',
    features: ['Responsive business website', 'Frontend + backend setup', 'Performance optimization']
  },
  'wordpress-development': {
    price: 'PKR 45,000+',
    timeline: '1-4 weeks',
    features: ['Custom WordPress design', 'Theme/plugin configuration', 'Speed and security basics']
  },
  'digital-marketing': {
    price: 'PKR 35,000/mo',
    timeline: 'Monthly',
    features: ['Campaign planning', 'Social and search ads setup', 'Monthly performance reporting']
  },
  seo: {
    price: 'PKR 30,000/mo',
    timeline: 'Monthly',
    features: ['Technical SEO audit', 'Keyword and content plan', 'On-page optimization']
  },
  'ai-solutions': {
    price: 'PKR 90,000+',
    timeline: '3-6 weeks',
    features: ['AI chatbot or workflow', 'Business process automation', 'Integration guidance']
  }
};

export const pricingPlans = services.map((service) => ({
  ...service,
  ...pricingDetails[service.slug],
  contactPath: `/contact?service=${service.slug}`
}));
