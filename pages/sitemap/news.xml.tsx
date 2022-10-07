import { gql } from '@apollo/client'
import { GetServerSideProps } from 'next'
import absoluteUrl from '../../services/absolute-url'
import { initializeApollo } from '../../services/apollo-client'
import { GqlPostsResult } from '../../services/interfaces/NewsProps'

type Field = {
  loc: string
  lastmod: string
}

const NewsSitemap = () => <></>

const getPosts = async (
  language: string,
  defaultLocale: string,
  origin: string
) => {
  const apolloClient = initializeApollo()
  const QUERY_POSTS = gql`
    query AllPosts($language: LanguageCodeFilterEnum, $after: String) {
      posts(
        first: 100
        after: $after
        where: { language: $language, orderby: { field: DATE, order: DESC } }
      ) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          slug
          date
        }
      }
    }
  `
  let hasNextPage = true
  let after = ''
  const fields: Field[] = []
  const newsURL = `${origin}/${
    defaultLocale === language ? '' : language + '/'
  }news/`

  do {
    const {
      data: { posts }
    } = await apolloClient.query<GqlPostsResult>({
      query: QUERY_POSTS,
      variables: {
        language: language.toLocaleUpperCase(),
        after
      }
    })

    hasNextPage = posts.pageInfo.hasNextPage
    after = posts.pageInfo.endCursor

    posts.nodes.map((post) => {
      fields.push({
        loc: `${newsURL}${post.slug}`,
        lastmod: new Date(post.date).toISOString()
      })
    })
  } while (hasNextPage)

  return fields
}

export const getServerSideProps: GetServerSideProps = async ({
  defaultLocale,
  locales,
  req,
  res
}) => {
  let fields: Field[] = []
  const { origin } = absoluteUrl(req)

  if (locales && defaultLocale) {
    await Promise.all(
      locales.map(async (locale) => {
        const posts = await getPosts(locale, defaultLocale, origin)

        fields = [...fields, ...posts]
      })
    )
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${fields
        .map(({ lastmod, loc }) => {
          return `
          <url>
            <loc>${loc}</loc>
            <lastmod>${lastmod}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.7</priority>
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

export default NewsSitemap
