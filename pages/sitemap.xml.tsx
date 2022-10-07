import fs from 'fs'
import { GetServerSideProps } from 'next'
import absoluteUrl from '../services/absolute-url'

const IndexSitemap = () => <></>

const getPages = (language: string, defaultLocale: string, origin: string) => {
  const baseURL = `${origin}${defaultLocale === language ? '' : `/${language}`}`
  const urls: string[] = []

  fs.readdirSync('pages')
    .filter((staticPage) => {
      return ![
        'api',
        '_app.tsx',
        '_document.tsx',
        '404.tsx',
        'robots.txt.tsx',
        'sitemap',
        'sitemap.xml.tsx',
        'apply.tsx',
        'privacy-policy.tsx',
        'rules-of-conduct.tsx'
      ].includes(staticPage)
    })
    .map((staticPagePath) => {
      const url = `${baseURL}/${staticPagePath}`
      urls.push(url.replace('.tsx', '').replace('/index', ''))
    })

  return urls.sort()
}

export const getServerSideProps: GetServerSideProps = async ({
  defaultLocale,
  locales,
  req,
  res
}) => {
  let urls: string[] = []
  const { origin } = absoluteUrl(req)
  const date = new Date().toISOString()

  if (locales && defaultLocale) {
    locales.map(async (locale) => {
      const pages = getPages(locale, defaultLocale, origin)

      urls = [...urls, ...pages]
    })
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map((url) => {
          return `
          <url>
            <loc>${url}</loc>
            <lastmod>${date}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
          </url>
        `
        })
        .join('')}
    </urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default IndexSitemap
