/** Canonical site origin (no trailing slash). */
export const SITE_URL = 'https://bizmri.ai'

export const SITE_NAME = 'bizMRI.ai'

/** Open Graph / Twitter card (1200×630, public/og-image.png). */
export const OG_IMAGE = `${SITE_URL}/og-image.png`
export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630

/** Default / home — aligned with product messaging (SEO ~155–160 chars for description). */
const home = {
  title: 'bizMRI.ai — AI Agents for Invisible Knowledge & Process Discovery',
  description:
    'bizMRI uses customizable AI agents to capture undocumented expertise, map hidden workflows, uncover operational pain, and deliver a prioritized automation roadmap for your organization.',
}

export const SEO_BY_PATH = {
  '/': home,
  '/terms': {
    title: 'Terms of Service — bizMRI.ai',
    description:
      'Terms of Service for bizMRI.ai: agreement to use our AI-powered operational intelligence and process discovery platform.',
  },
  '/privacy': {
    title: 'Privacy Policy — bizMRI.ai',
    description:
      'Privacy Policy for bizMRI.ai: how we collect, use, and protect data when you use our website and services.',
  },
  '/contact': {
    title: 'Contact — bizMRI.ai',
    description:
      'Contact bizMRI for product questions, partnerships, press, and enterprise inquiries. Email contact@bizmri.ai.',
  },
}

/** Organization + SoftwareApplication JSON-LD (LLM-friendly structured facts). */
export function getJsonLdGraph() {
  const url = SITE_URL
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${url}/#organization`,
        name: 'bizMRI',
        url,
        logo: `${url}/bizmri-logo-header.png`,
        sameAs: [],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: 'contact@bizmri.ai',
          url: `${url}/contact`,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${url}/#website`,
        url,
        name: SITE_NAME,
        description: home.description,
        publisher: { '@id': `${url}/#organization` },
        inLanguage: 'en-US',
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${url}/#software`,
        name: 'bizMRI',
        url,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'WebBrowser',
        description:
          'bizMRI deploys autonomous AI agents to conduct programmatic assessments across your enterprise workforce. It digitizes undocumented tribal knowledge, uncovers hidden operational pains, and delivers a data-backed automation blueprint, replacing slow and biased consulting audits.',
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/LimitedAvailability',
          price: '0',
          priceCurrency: 'USD',
          description:
            'Currently in closed beta for select enterprise partners. Waitlist application required.',
        },
        creator: {
          '@type': 'Organization',
          name: 'bizMRI.ai',
          url,
        },
        provider: { '@id': `${url}/#organization` },
        featureList: [
          'Programmatic AI workforce assessments',
          'Tribal knowledge digitization',
          'Operational bottleneck discovery',
          'Automated AI transformation blueprints',
          'Shadow process identification',
        ],
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'COOs, CTOs, and Enterprise HR Leaders',
        },
      },
    ],
  }
}
