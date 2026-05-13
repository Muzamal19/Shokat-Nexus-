import { Helmet } from 'react-helmet-async';

const baseTitle = 'Shokat Nexus Digital';

export default function Seo({ title, description }) {
  const fullTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} | Software House`;
  const metaDescription =
    description ||
    'Shokat Nexus Digital builds websites, WordPress solutions, SEO campaigns, digital marketing systems, and AI-powered business tools.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
}
