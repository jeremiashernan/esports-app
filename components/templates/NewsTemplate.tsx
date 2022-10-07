import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'
import { PageInfo, Post } from '../../services/interfaces/NewsProps'
import {
  InstagramCardComponent,
  TwitterCardComponent
} from '../elements/Blocks'
import { MainButton } from '../elements/Buttons'
import { NewsFilter } from '../elements/Form'
import { PostContent } from '../modules/News'

type NewsProps = {
  hightlight: React.ReactNode
  posts: Post[]
  categories: {
    filters: CategoryFilter[]
    selected: number
  }
  search?: string
  pageInfo: PageInfo
}

type CategoryFilter = {
  label: string
  value: number
}

const StyledNews = styled.div(() => [
  tw`relative bg-gradient-to-b from-pugb-gray-200 to-pugb-gray-0`
])

const StyledBackgroundHeader = styled.div(() => [
  tw`absolute top-0 w-full height[265px] bg-cover  bg-top
  background-image[url('/images/bg-header-news-mobile.jpg')]`,
  tw`xl:background-image[url('/images/bg-header-news.jpg')]`
])

const StyledMain = styled.div(() => [
  tw`relative pt-10 pb-24 bg-no-repeat 
  background-position-y[265px] from-pugb-gray-250 to-pugb-gray-0
  background-image[
      url('/images/bg-hero-wrapper.jpg'), 
      linear-gradient(to bottom, var(--tw-gradient-stops))
    ]`,
  tw`xl:pt-28`
])
const StyledMainWrapper = styled.div(() => [tw`container px-5`, tw`xl:px-0`])

const StyledHeader = styled.div(() => [
  tw`flex flex-wrap justify-center mb-4`,
  tw`xl:justify-between xl:width[72%] xl:margin-bottom[1.8rem]`
])
const StyledHeaderTitle = styled.h1(() => [
  tw`mb-5 font-markpro font-extrabold text-6xl text-white`,
  tw`xl:mb-0`
])

const StyledContent = styled.div(() => [
  tw`flex flex-wrap`,
  tw`xl:justify-between`
])

const StyledPosts = styled.section(() => [
  tw`w-full mb-16`,
  tw`xl:width[72%] xl:mb-0`
])
const StyledPostHighlight = styled.div(() => [
  tw`py-7 px-4 bg-gradient-to-r from-pugb-gray-700 to-pugb-gray-900`,
  tw`xl:py-9 xl:pl-14 xl:pr-7`
])
const StyledPostList = styled.section(() => [tw`mt-8`, tw`xl:mt-12`])
const StyledPostItem = styled.div(() => [tw`mt-4`, tw`xl:mt-6`])

const StyledSocial = styled.section(() => [tw`w-full`, tw`xl:w-1/4`])
const StyledSocialItem = styled.div(() => [tw`mb-6`])

const StyledEmpty = styled.div(() => [
  tw`flex items-center py-8 px-10 bg-white`
])
const StyledEmptyTitle = styled.div(() => [
  tw`font-markpro font-extrabold text-xl ml-4`
])

const StyledLoadMore = styled.div(() => [
  tw`flex justify-center mt-7`,
  tw`xl:mt-14`
])

const NewsTemplate = ({
  hightlight,
  posts,
  categories,
  search,
  pageInfo
}: NewsProps) => {
  const { t, lang } = useTranslation()
  const [newPosts, setNewPosts] = useState(posts)
  const [after, setAfter] = useState<string | null>(
    pageInfo.hasNextPage ? pageInfo.endCursor : null
  )

  useEffect(() => {
    setNewPosts(posts)
    setAfter(pageInfo.hasNextPage ? pageInfo.endCursor : null)
  }, [pageInfo.endCursor, pageInfo.hasNextPage, posts])

  const loadMore = async () => {
    const categoryId = categories.filters[categories.selected].value
    const response = await fetch(
      `/api/posts?lang=${lang}&first=10&after=${after}${
        categoryId === 0 ? '' : `&cat=${categoryId}`
      }${search ? `&search=${search}` : ''}`
    )
    const json = await response.json()

    setNewPosts([...newPosts, ...json.posts])
    setAfter(json.pageInfo.hasNextPage ? json.pageInfo.endCursor : null)
  }

  return (
    <StyledNews>
      <StyledBackgroundHeader />
      <StyledMain>
        <StyledMainWrapper>
          <StyledHeader>
            <StyledHeaderTitle>
              {t('links:menuLinks.news.label')}
            </StyledHeaderTitle>
            <NewsFilter
              categories={{
                items: categories.filters,
                selected: categories.selected
              }}
              search={search}
            />
          </StyledHeader>
          <StyledContent>
            <StyledPosts>
              <StyledPostHighlight>{hightlight}</StyledPostHighlight>
              <StyledPostList>
                {newPosts.length > 0 &&
                  newPosts.map((post) => (
                    <StyledPostItem key={post.slug}>
                      <PostContent post={post} />
                    </StyledPostItem>
                  ))}
                {newPosts.length === 0 && (
                  <StyledEmpty>
                    <StyledEmptyTitle>
                      {t('common:searchNotFound')}
                    </StyledEmptyTitle>
                  </StyledEmpty>
                )}
              </StyledPostList>
              {after && (
                <StyledLoadMore>
                  <MainButton
                    label={t('common:loadMore')}
                    icon={faChevronDown}
                    onClick={() => loadMore()}
                  />
                </StyledLoadMore>
              )}
            </StyledPosts>
            <StyledSocial>
              <StyledSocialItem>
                <TwitterCardComponent />
              </StyledSocialItem>
              <StyledSocialItem>
                <InstagramCardComponent />
              </StyledSocialItem>
            </StyledSocial>
          </StyledContent>
        </StyledMainWrapper>
      </StyledMain>
    </StyledNews>
  )
}

export default NewsTemplate
