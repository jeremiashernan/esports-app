import { GetServerSideProps } from 'next'
import absoluteUrl from '../services/absolute-url'

const RobotsTxt = () => <></>

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { origin } = absoluteUrl(req)

  const robots = `# *
User-agent: *
Allow: /

Disallow: /api/*
    
# Host
Host: ${origin}
    
# Sitemaps
Sitemap: ${origin}/sitemap.xml
Sitemap: ${origin}/sitemap/news.xml
`

  res.setHeader('Content-Type', 'text/plain')
  res.write(robots)
  res.end()

  return {
    props: {}
  }
}

export default RobotsTxt
