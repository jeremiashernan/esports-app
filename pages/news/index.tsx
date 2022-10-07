import { gql } from '@apollo/client'
import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import getT from 'next-translate/getT'
import useTranslation from 'next-translate/useTranslation'
import DefaultLayout from '../../components/layouts/DefaultLayout'
import { FeaturedArticle, NewsTitle } from '../../components/modules/News'
import NewsTemplate from '../../components/templates/NewsTemplate'
import useHeadTitle from '../../hooks/useHeadTitle'
import absoluteUrl from '../../services/absolute-url'
import { initializeApollo } from '../../services/apollo-client'
import {
  GqlCategoriesResult,
  GqlPostsResult,
  PageInfo,
  Post
} from '../../services/interfaces/NewsProps'

type NewsProps = {
  posts: Post[]
  featured?: Featured
  search?: string
  categories: {
    filters: CategoryFilter[]
    selected: number
  }
  selectedCategory?: number
  pageInfo: PageInfo
  origin: string
  currentURL: string
}

type Featured = {
  post: Post
  url: string
}

type CategoryFilter = {
  label: string
  value: number
}

const NewsPage = ({
  posts,
  featured,
  categories,
  search,
  pageInfo,
  currentURL
}: NewsProps) => {
  const { t, lang } = useTranslation()
  const title = useHeadTitle(t('links:menuLinks.news.label'))

  const twitterArr = t('links:socialLinks.twitter').split('/')
  const twitterAccount = `@${twitterArr[twitterArr.length - 1]}`

  return (
    <>
      <NextSeo
        title={title}
        description={t('common:seo.description')}
        canonical={currentURL}
        openGraph={{
          type: 'website',
          title,
          description: t('common:seo.description'),
          url: currentURL,
          images:
            posts.length > 0
              ? [
                  {
                    url: posts[0].featuredImage
                      ? posts[0].featuredImage.node.sourceUrl
                      : `${origin}/images/pubg-default.jpg`
                  }
                ]
              : undefined,
          locale: lang,
          site_name: 'PUBG Esports'
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: twitterAccount
        }}
      />
      <DefaultLayout>
        <NewsTemplate
          hightlight={
            <>
              {featured && (
                <FeaturedArticle post={featured.post} url={featured.url} />
              )}
              {!featured && (
                <NewsTitle
                  search={search}
                  category={categories.filters[categories.selected].label}
                />
              )}
            </>
          }
          posts={posts}
          categories={{
            filters: categories.filters,
            selected: categories.selected
          }}
          search={search}
          pageInfo={pageInfo}
        />
      </DefaultLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  defaultLocale,
  query,
  req,
  resolvedUrl
}) => {
  const apolloClient = initializeApollo()
  const t = await getT(locale, 'common')

  const { origin } = absoluteUrl(req)

  const QUERY_POSTS = gql`
    query AllPosts(
      $language: LanguageCodeFilterEnum
      $category: Int
      $search: String
    ) {
      posts(
        first: 5
        after: null
        where: {
          language: $language
          categoryId: $category
          search: $search
          orderby: { field: DATE, order: DESC }
        }
      ) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          title
          slug
          date
          content
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
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
    }
  `

  const postVars = {
    language: locale?.toLocaleUpperCase(),
    category: query.cat ? +query.cat : null,
    search: query.search ?? null
  }

  const {
    data: { posts }
  } = await apolloClient.query<GqlPostsResult>({
    query: QUERY_POSTS,
    variables: postVars
  })

  const newPosts: Post[] = []
  const isFeatured = !(postVars.category || postVars.search)
  let featured: Featured | null = null

  if (postVars.category && !postVars.search && posts.nodes.length === 0) {
    return {
      redirect: {
        destination: locale === defaultLocale ? `/news` : `/${locale}/news`,
        permanent: true
      }
    }
  }

  posts.nodes.map((post, idx) => {
    if (isFeatured && idx === 0) {
      featured = {
        post,
        url: `/news/${post.slug}`
      }
    } else {
      newPosts.push(post)
    }
  })

  const QUERY_CATEGORIES = gql`
    query AllCategories($language: LanguageCodeFilterEnum) {
      categories(where: { language: $language }) {
        nodes {
          databaseId
          name
          slug
          posts {
            nodes {
              id
            }
          }
        }
      }
    }
  `

  const {
    data: { categories }
  } = await apolloClient.query<GqlCategoriesResult>({
    query: QUERY_CATEGORIES,
    variables: {
      language: locale?.toLocaleUpperCase()
    }
  })

  const newCategories: CategoryFilter[] = [
    {
      label: t('common:allCategories'),
      value: 0
    }
  ]
  let selectedCategory = 0

  categories.nodes.map((category, index) => {
    if (category.posts.nodes.length > 0) {
      newCategories.push({
        label: category.name,
        value: category.databaseId
      })

      if (postVars.category === category.databaseId) {
        selectedCategory = index + 1
      }
    }
  })

  return {
    props: {
      posts: newPosts,
      featured,
      categories: {
        filters: newCategories,
        selected: selectedCategory
      },
      search: postVars.search,
      pageInfo: posts.pageInfo,
      origin,
      currentURL: `${origin}${
        locale === defaultLocale ? '' : `/${locale}`
      }${resolvedUrl}`
    }
  }
}

export default NewsPage
