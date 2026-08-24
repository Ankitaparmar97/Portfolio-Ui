export const SITE_URL = 'https://pixelavenue.in'
export const SITE_NAME = 'Pixel Avenue'

export type SeoPage = {
  path: '/' | '/work'
  title: string
  description: string
}

export const SEO_PAGES: readonly SeoPage[] = [
  {
    path: '/',
    title: 'Pixel Avenue Portfolio | Web Design & Development Work',
    description:
      'Explore Pixel Avenue’s portfolio of websites, business systems, and digital experiences, with web design, development, UI/UX, branding, AI, and SEO.',
  },
  {
    path: '/work',
    title: 'Web Design, Development & Digital Services | Pixel Avenue',
    description:
      'Explore Pixel Avenue services for websites, custom software, web apps, ERP and CRM, AI integration, automation, branding, SEO, cloud, and ongoing support.',
  },
]

export function getCanonicalUrl(path: SeoPage['path']) {
  return `${SITE_URL}${path === '/' ? '/' : path}`
}

export function getSeoPage(pathname: string) {
  const normalizedPathname = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  return SEO_PAGES.find((page) => page.path === normalizedPathname) ?? SEO_PAGES[0]
}
