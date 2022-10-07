export interface Post {
  title: string
  slug: string
  date: string
  content: string
  excerpt: string
  language: {
    code: string
  }
  featuredImage: {
    node: {
      sourceUrl: string
      mediaDetails: {
        sizes: Array<{
          width: string
          height: string
        }>
      }
    }
  }
  categories: {
    nodes: Category[]
  }
  author: {
    node: {
      name: string
    }
  }
}

export interface Category {
  databaseId: number
  name: string
  slug: string
  posts: {
    nodes: Post[]
  }
}

export interface PageInfo {
  hasPreviousPage: boolean
  hasNextPage: boolean
  startCursor: string
  endCursor: string
}

export interface GqlPostResult {
  post: Post
}

export interface GqlPostsResult {
  posts: {
    pageInfo: PageInfo
    nodes: Post[]
  }
}

export interface GqlCategoriesResult {
  categories: {
    nodes: Category[]
  }
}
