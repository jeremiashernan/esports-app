import gql from 'graphql-tag'
import { GetServerSideProps } from 'next'
import { ArticleJsonLd, NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import DefaultLayout from '../../components/layouts/DefaultLayout'
import SinglePostTemplate from '../../components/templates/SinglePostTemplate'
import useHeadTitle from '../../hooks/useHeadTitle'
import absoluteUrl from '../../services/absolute-url'
import { initializeApollo } from '../../services/apollo-client'
import { GqlPostResult, Post } from '../../services/interfaces/NewsProps'

type PostProps = {
  post: Post
  origin: string
  currentURL: string
}

const getDescription = (text: string) => {
  const withoutLink = text.replace(/<a[^>]*>([^<]*)<\/a>/gi, '')
  const withoutTags = withoutLink.replace(/<[a-zA-Z\/][^>]*>/gi, '')
  const strMatch = withoutTags.match(/^.*?[\.!\?](?:\s|$)/gi)

  return strMatch ? strMatch.toString().trim() : ''
}

const NewsDetailPage = ({ post, origin, currentURL }: PostProps) => {
  const { t, lang } = useTranslation()
  const title = useHeadTitle(post.title)

  const twitterArr = t('links:socialLinks.twitter').split('/')
  const twitterAccount = `@${twitterArr[twitterArr.length - 1]}`

  return (
    <>
      <NextSeo
        title={title}
        description={getDescription(post.excerpt)}
        canonical={currentURL}
        openGraph={{
          type: 'article',
          title: post.title,
          description: getDescription(post.excerpt),
          url: currentURL,
          images: [
            {
              url: post.featuredImage
                ? post.featuredImage.node.sourceUrl
                : `${origin}/images/pubg-default.jpg`
            }
          ],
          locale: lang,
          site_name: 'PUBG Esports'
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: twitterAccount
        }}
      />
      <DefaultLayout>
        <SinglePostTemplate post={post} />
      </DefaultLayout>
      <ArticleJsonLd
        url={currentURL}
        title={post.title}
        images={[
          post.featuredImage
            ? post.featuredImage.node.sourceUrl
            : `${origin}/images/pubg-default.jpg`
        ]}
        datePublished={post.date}
        dateModified={post.date}
        authorName={post.author.node.name}
        publisherName={post.author.node.name}
        publisherLogo={`${origin}/images/logo.jpg`}
        description={getDescription(post.excerpt)}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  defaultLocale,
  locale,
  params,
  req,
  resolvedUrl
}) => {
  const apolloClient = initializeApollo()
  const { origin } = absoluteUrl(req)

  const query = gql`
    query PostBySlug($id: ID!) {
      post(id: $id, idType: SLUG) {
        title
        slug
        date
        content
        excerpt
        language {
          code
        }
        featuredImage {
          node {
            sourceUrl
            mediaDetails {
              sizes {
                width
                height
              }
            }
          }
        }
        categories {
          nodes {
            databaseId
            name
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  `

  const variables = {
    id: params?.slug
  }

  const {
    data: { post }
  } = await apolloClient.query<GqlPostResult>({ query, variables })

  if (!post || post.language.code !== locale?.toLocaleUpperCase()) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post,
      origin,
      currentURL: `${origin}${
        locale === defaultLocale ? '' : `/${locale}`
      }${resolvedUrl}`
    }
  }
}

export default NewsDetailPage
