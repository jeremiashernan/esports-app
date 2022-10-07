import useTranslation from 'next-translate/useTranslation'
import dynamic from 'next/dynamic'
import tw, { styled } from 'twin.macro'
import { useFetch } from '../../hooks/useFetch'
import { Post } from '../../services/interfaces/NewsProps'
import {
  InstagramCardComponent,
  TwitterCardComponent,
  YoutubeCardComponent
} from '../elements/Blocks'
import { NewsSlider } from '../modules/News'

const HeroBanner = dynamic(() => import('../modules/HeroBanner'))
const PresentedBy = dynamic(() => import('../modules/PresentedBy'))
const Subscribe = dynamic(() => import('../modules/Subscribe'))
const WhatIs = dynamic(() => import('../modules/WhatIs'))

const StyledHeroWrapper = styled.section(() => [
  tw`relative p-2 pb-5 bg-bottom bg-no-repeat bg-pugb-gray-150
  background-image[url('/images/bg-hero-wrapper.jpg')]`,
  tw`xl:p-0 xl:pt-5 xl:pb-16 xl:bg-top`
])
const StyledLatestNewsWrapper = styled.section(() => [
  tw`py-9 px-6 bg-gradient-to-b from-pugb-gray-250`,
  tw`xl:p-0 xl:py-14`
])
const StyledSubscribeWrapper = styled.section(() => [
  tw`px-5 py-7 xl:px-0 xl:py-14`
])

const StyledSocialWrapper = styled.section(() => [
  tw`flex p-5 background-image[url('/images/bg-social.jpg')]`,
  tw`xl:px-0 xl:py-24`
])
const StyledSocialContent = styled.div(() => [
  tw`container grid gap-4`,
  tw`xl:grid-cols-4 xl:gap-10`
])

const HomeTemplate = () => {
  const { t, lang } = useTranslation()
  const { data } = useFetch(`/api/posts?lang=${lang}&first=8`)

  const posts: Post[] = data && data.posts

  return (
    <>
      <StyledHeroWrapper>
        {posts && <HeroBanner posts={posts.slice(0, 5)} />}
        <PresentedBy />
      </StyledHeroWrapper>
      <StyledLatestNewsWrapper>
        {posts && <NewsSlider title={t('common:relatedNews')} news={posts} />}
      </StyledLatestNewsWrapper>
      <StyledSubscribeWrapper>
        <Subscribe />
      </StyledSubscribeWrapper>
      <WhatIs />
      <StyledSocialWrapper>
        <StyledSocialContent>
          <YoutubeCardComponent />
          <TwitterCardComponent />
          <InstagramCardComponent />
        </StyledSocialContent>
      </StyledSocialWrapper>
    </>
  )
}

export default HomeTemplate
