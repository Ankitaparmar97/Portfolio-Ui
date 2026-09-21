import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const projectDirectory = path.resolve(scriptDirectory, '..')
const distributionDirectory = path.join(projectDirectory, 'dist')
const siteUrl = 'https://pixelavenue.in'
const siteName = 'Pixel Avenue'
const contactEmail = 'pixelavenuein@gmail.com'
const projects = [
  {
    title: 'Darshan Enterprises',
    description:
      'A product-led website for an industrial electrical supplier that helps customers explore brands and contact sales.',
    dateCreated: '2025-09',
    genre: 'Business website',
    services: ['Website Design', 'Website Development', 'SEO Optimization'],
    fragment: 'project-darshan-enterprises',
    sameAs: 'https://www.darshanent.co.in/',
  },
  {
    title: 'Bhavnagar Dental Clinic',
    description:
      'A welcoming clinic website that makes treatments, doctor information, and patient contact details easy to find.',
    dateCreated: '2025-03',
    genre: 'Healthcare website',
    services: ['Website Design', 'Website Development', 'UI/UX Design'],
    fragment: 'project-bhavnagar-dental-clinic',
    sameAs: 'https://bhavnagardental.netlify.app/',
  },
  {
    title: 'A smarter way to manage the business',
    description:
      'A private workspace for managing catalogs, products, listings, and customer messages for Darshan Enterprises.',
    dateCreated: '2026-03',
    genre: 'Business management UI',
    services: ['Custom Software Development', 'Web Applications', 'ERP & CRM Systems'],
    fragment: 'project-a-smarter-way-to-manage-the-business',
  },
  {
    title: 'Pixel Avenue, brought to life',
    description: 'A bold, playful portfolio bringing Pixel Avenue projects, services, and studio story together.',
    dateCreated: '2026-08',
    genre: 'Studio portfolio',
    services: ['Website Design', 'Website Development', 'UI/UX Design', 'Branding'],
    fragment: 'project-pixel-avenue-brought-to-life',
  },
]

const pages = [
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

function canonicalUrl(pagePath) {
  return `${siteUrl}${pagePath === '/' ? '/' : pagePath}`
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function replaceMeta(html, attribute, key, content) {
  const pattern = new RegExp(`<meta ${attribute}="${key}" content="[^"]*" \\/>`)
  return html.replace(pattern, `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`)
}

function structuredData(page) {
  const canonical = canonicalUrl(page.path)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: siteName,
        url: `${siteUrl}/`,
        email: contactEmail,
        areaServed: ['India', 'Worldwide'],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: siteName,
        url: `${siteUrl}/`,
        publisher: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'en',
      },
      {
        '@type': page.path === '/work' ? 'CollectionPage' : 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: page.title,
        description: page.description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
        ...(page.path === '/'
          ? {
              mainEntity: {
                '@type': 'ItemList',
                name: 'Pixel Avenue selected work',
                itemListElement: projects.map((project, index) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  item: {
                    '@type': 'CreativeWork',
                    name: project.title,
                    description: project.description,
                    dateCreated: project.dateCreated,
                    genre: project.genre,
                    keywords: project.services.join(', '),
                    url: `${siteUrl}/#${project.fragment}`,
                    creator: { '@id': `${siteUrl}/#organization` },
                    ...(project.sameAs ? { sameAs: project.sameAs } : {}),
                  },
                })),
              },
            }
          : {}),
      },
    ],
  }
}

function renderPage(template, page) {
  const canonical = canonicalUrl(page.path)
  let html = template.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(page.title)}</title>`)

  html = replaceMeta(html, 'name', 'description', page.description)
  html = replaceMeta(html, 'property', 'og:title', page.title)
  html = replaceMeta(html, 'property', 'og:description', page.description)
  html = replaceMeta(html, 'property', 'og:url', canonical)
  html = replaceMeta(html, 'name', 'twitter:title', page.title)
  html = replaceMeta(html, 'name', 'twitter:description', page.description)
  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${canonical}" />`,
  )

  const jsonLd = JSON.stringify(structuredData(page)).replaceAll('<', '\\u003c')
  return html.replace(
    '</head>',
    `    <script id="pixel-avenue-structured-data" type="application/ld+json">${jsonLd}</script>\n  </head>`,
  )
}

const template = await readFile(path.join(distributionDirectory, 'index.html'), 'utf8')

for (const page of pages) {
  const outputDirectory = page.path === '/' ? distributionDirectory : path.join(distributionDirectory, page.path)
  const renderedPage = renderPage(template, page)
  await mkdir(outputDirectory, { recursive: true })
  await writeFile(path.join(outputDirectory, 'index.html'), renderedPage)

  if (page.path !== '/') {
    await writeFile(path.join(distributionDirectory, `${page.path.slice(1)}.html`), renderedPage)
  }
}
