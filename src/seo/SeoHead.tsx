import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getProjectId, PROJECTS } from '../Component/AboutPage/projectsData'
import { businessServices } from '../Component/BusinessServices/businessServicesData'
import { CONTACT_EMAIL } from '../Component/Constant/Constant'
import { getCanonicalUrl, getSeoPage, SITE_NAME, SITE_URL } from './seoConfig'

const STRUCTURED_DATA_ID = 'pixel-avenue-structured-data'

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.content = content
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.rel = 'canonical'
    document.head.appendChild(element)
  }

  element.href = href
}

function getStructuredData(path: '/' | '/work', canonical: string) {
  const organization = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    email: CONTACT_EMAIL,
    areaServed: ['India', 'Worldwide'],
    knowsAbout: businessServices.map(({ title }) => title),
  }

  const page = {
    '@type': path === '/work' ? 'CollectionPage' : 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: getSeoPage(path).title,
    description: getSeoPage(path).description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    ...(path === '/work'
      ? {
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: businessServices.map((service, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Service',
                name: service.title,
                description: service.description,
                url: `${SITE_URL}${service.path}`,
                provider: { '@id': `${SITE_URL}/#organization` },
              },
            })),
          },
        }
      : {
          mainEntity: {
            '@type': 'ItemList',
            name: 'Pixel Avenue selected work',
            itemListElement: PROJECTS.map((project, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'CreativeWork',
                name: project.title,
                description: project.description,
                dateCreated: project.dateCreated,
                genre: project.eyebrow,
                keywords: project.services.join(', '),
                url: `${SITE_URL}/#${getProjectId(project.title)}`,
                creator: { '@id': `${SITE_URL}/#organization` },
                ...(project.href ? { sameAs: project.href } : {}),
              },
            })),
          },
        }),
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en',
      },
      page,
    ],
  }
}

function SeoHead() {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = getSeoPage(pathname)
    const canonical = getCanonicalUrl(page.path)

    document.title = page.title
    upsertMeta('name', 'description', page.description)
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large')
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:title', page.title)
    upsertMeta('property', 'og:description', page.description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('name', 'twitter:card', 'summary')
    upsertMeta('name', 'twitter:title', page.title)
    upsertMeta('name', 'twitter:description', page.description)
    upsertCanonical(canonical)

    let structuredData = document.getElementById(STRUCTURED_DATA_ID) as HTMLScriptElement | null

    if (!structuredData) {
      structuredData = document.createElement('script')
      structuredData.id = STRUCTURED_DATA_ID
      structuredData.type = 'application/ld+json'
      document.head.appendChild(structuredData)
    }

    structuredData.textContent = JSON.stringify(getStructuredData(page.path, canonical))
  }, [pathname])

  return null
}

export default SeoHead
