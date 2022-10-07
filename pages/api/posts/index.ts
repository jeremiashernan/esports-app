import { gql } from '@apollo/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { initializeApollo } from '../../../services/apollo-client'
import { GqlPostsResult } from '../../../services/interfaces/NewsProps'

const QUERY_POSTS = gql`
  query AllPosts(
    $first: Int
    $after: String
    $categoryId: Int
    $search: String
    $language: LanguageCodeFilterEnum
  ) {
    posts(
      first: $first
      after: $after
      where: {
        categoryId: $categoryId
        search: $search
        language: $language
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

const posts = async (req: NextApiRequest, res: NextApiResponse) => {
  const apolloClient = initializeApollo()

  const variables = {
    first: req.query.first ? +req.query.first : 5,
    after: req.query.after || null,
    categoryId: req.query.cat ? +req.query.cat : null,
    search: req.query.search || null,
    language:
      typeof req.query.lang == 'string'
        ? req.query.lang.toLocaleUpperCase()
        : null
  }

  const {
    data: { posts }
  } = await apolloClient.query<GqlPostsResult>({
    query: QUERY_POSTS,
    variables
  })

  res.json({
    posts: posts.nodes,
    pageInfo: posts.pageInfo
  })
}

export default posts
