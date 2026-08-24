export type BusinessService = {
  title: string
  description: string
  imageUrl: string
  path: string
}

const imageParams = 'auto=format&fit=crop&w=900&q=82'

export function getServiceCardId(title: string): string {
  return `service-${title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\//g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}`
}

export const businessServices: BusinessService[] = [
  {
    title: 'Website Design',
    description: 'Clean, conversion-focused website visuals with strong layouts, responsive sections, and brand-ready polish.',
    imageUrl: `https://images.unsplash.com/photo-1547658719-da2b51169166?${imageParams}`,
    path: `/work#${getServiceCardId('Website Design')}`,
  },
  {
    title: 'Website Development',
    description: 'Fast, scalable websites built with modern frontend patterns, reliable structure, and production-friendly code.',
    imageUrl: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?${imageParams}`,
    path: `/work#${getServiceCardId('Website Development')}`,
  },
  {
    title: 'Custom Software Development',
    description: 'Purpose-built software workflows, dashboards, and internal tools shaped around the way your business operates.',
    imageUrl: `https://images.unsplash.com/photo-1515879218367-8466d910aaa4?${imageParams}`,
    path: `/work#${getServiceCardId('Custom Software Development')}`,
  },
  {
    title: 'Web Applications',
    description: 'Interactive web apps with smooth user flows, robust state handling, and interfaces designed for repeat use.',
    imageUrl: `https://images.unsplash.com/photo-1551650975-87deedd944c3?${imageParams}`,
    path: `/work#${getServiceCardId('Web Applications')}`,
  },
  {
    title: 'ERP & CRM Systems',
    description: 'Operational systems for leads, customers, inventory, reporting, and team coordination in one connected place.',
    imageUrl: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?${imageParams}`,
    path: `/work#${getServiceCardId('ERP & CRM Systems')}`,
  },
  {
    title: 'AI Integration',
    description: 'Smart AI features for support, content, search, recommendations, and workflow acceleration inside your product.',
    imageUrl: `https://images.unsplash.com/photo-1677442136019-21780ecad995?${imageParams}`,
    path: `/work#${getServiceCardId('AI Integration')}`,
  },
  {
    title: 'AI Search Optimization',
    description: 'Content and technical improvements that help your brand appear clearly in AI-powered discovery experiences.',
    imageUrl: `https://images.unsplash.com/photo-1555255707-c07966088b7b?${imageParams}`,
    path: `/work#${getServiceCardId('AI Search Optimization')}`,
  },
  {
    title: 'Business Automation',
    description: 'Automated handoffs, approvals, notifications, and data movement that remove repetitive manual work.',
    imageUrl: `https://images.unsplash.com/photo-1504384308090-c894fdcc538d?${imageParams}`,
    path: `/work#${getServiceCardId('Business Automation')}`,
  },
  {
    title: 'UI/UX Design',
    description: 'User journeys, wireframes, prototypes, and interface systems that make digital products easier to understand.',
    imageUrl: `https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?${imageParams}`,
    path: `/work#${getServiceCardId('UI/UX Design')}`,
  },
  {
    title: 'Branding',
    description: 'Visual identity systems with typography, color, messaging, and brand assets that feel consistent everywhere.',
    imageUrl: `https://images.unsplash.com/photo-1558655146-d09347e92766?${imageParams}`,
    path: `/work#${getServiceCardId('Branding')}`,
  },
  {
    title: 'Logo Design',
    description: 'Distinctive logo concepts and refined marks prepared for digital, print, social, and product use.',
    imageUrl: `https://images.unsplash.com/photo-1626785774573-4b799315345d?${imageParams}`,
    path: `/work#${getServiceCardId('Logo Design')}`,
  },
  {
    title: 'Poster & Social Media Design',
    description: 'Campaign-ready posters, launch creatives, and scroll-stopping social visuals for everyday brand communication.',
    imageUrl: `https://images.unsplash.com/photo-1611162617474-5b21e879e113?${imageParams}`,
    path: `/work#${getServiceCardId('Poster & Social Media Design')}`,
  },
  {
    title: 'SEO Optimization',
    description: 'Technical SEO, page structure, content signals, and performance improvements for stronger organic visibility.',
    imageUrl: `https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?${imageParams}`,
    path: `/work#${getServiceCardId('SEO Optimization')}`,
  },
  {
    title: 'Cloud Deployment',
    description: 'Reliable cloud hosting, deployment pipelines, environments, and production setup for modern applications.',
    imageUrl: `https://images.unsplash.com/photo-1558494949-ef010cbdcc31?${imageParams}`,
    path: `/work#${getServiceCardId('Cloud Deployment')}`,
  },
  {
    title: 'Website Maintenance & Support',
    description: 'Ongoing updates, fixes, monitoring, performance checks, and practical support after your website goes live.',
    imageUrl: `https://images.unsplash.com/photo-1556761175-b413da4baf72?${imageParams}`,
    path: `/work#${getServiceCardId('Website Maintenance & Support')}`,
  },
]
