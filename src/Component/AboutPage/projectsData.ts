export type Project = {
  date: string
  dateCreated: string
  shortDate: string
  eyebrow: string
  title: string
  description: string
  services: readonly string[]
  featured?: boolean
  href?: string
  linkLabel?: string
}

export function getProjectId(title: string) {
  return `project-${title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}`
}

export const PROJECTS: readonly Project[] = [
  {
    date: 'September 2025',
    dateCreated: '2025-09',
    shortDate: 'SEP 2025',
    eyebrow: 'Business website',
    title: 'Darshan Enterprises',
    description:
      'We created a product-led website for an industrial electrical supplier, helping customers explore trusted brands and connect with the sales team.',
    services: ['Website Design', 'Website Development', 'SEO Optimization'],
    featured: true,
    href: 'https://www.darshanent.co.in/',
    linkLabel: 'Visit Darshan Enterprises',
  },
  {
    date: 'March 2025',
    dateCreated: '2025-03',
    shortDate: 'MAR 2025',
    eyebrow: 'Healthcare website',
    title: 'Bhavnagar Dental Clinic',
    description:
      'We designed and launched a welcoming clinic website that makes treatments, doctor information, and patient contact details easy to find.',
    services: ['Website Design', 'Website Development', 'UI/UX Design'],
    href: 'https://bhavnagardental.netlify.app/',
    linkLabel: 'Visit the clinic website',
  },
  {
    date: 'March 2026',
    dateCreated: '2026-03',
    shortDate: 'MAR 2026',
    eyebrow: 'Business management UI',
    title: 'A smarter way to manage the business',
    description:
      'We built a private workspace for Darshan Enterprises to upload catalogs and products, organize listings, and review messages sent by customers.',
    services: ['Custom Software Development', 'Web Applications', 'ERP & CRM Systems'],
  },
  {
    date: 'August 2026',
    dateCreated: '2026-08',
    shortDate: 'AUG 2026',
    eyebrow: 'Studio portfolio',
    title: 'Pixel Avenue, brought to life',
    description:
      'We completed this portfolio to bring our projects, services, and studio story together in one bold, playful, and interactive digital experience.',
    services: ['Website Design', 'Website Development', 'UI/UX Design', 'Branding'],
  },
]
