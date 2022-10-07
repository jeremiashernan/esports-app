import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import tw, { styled } from 'twin.macro'
import defaultImg from '../../../public/images/pubg-default.jpg'
import { Post } from '../../../services/interfaces/NewsProps'
import { MainButton } from '../../elements/Buttons'

type FeaturedProps = {
  post: Post
  url: string
}

const StyledFeatured = styled.section(() => [
  tw`flex flex-wrap justify-between`
])

const StyledFeaturedContent = styled.section(() => [
  tw`w-full mb-11`,
  tw`xl:width[48%] xl:mb-0`
])
const StyledFeaturedContentFeatured = styled.h5(() => [
  tw`mb-1 text-pugb-gray-100 text-sm uppercase`,
  tw`xl:text-lg xl:mb-6`
])
const StyledFeaturedContentTitle = styled.h2(() => [
  tw`relative pb-3.5 text-white font-markpro font-extrabold font-size[1.75rem] leading-9
    after:content after:absolute after:left-0 after:bottom-0 after:w-11 
    after:height[3px] after:bg-pugb-red-300`,
  tw`xl:font-size[3.125rem] xl:line-height[3.45rem]
    xl:after:w-14 xl:after:h-1 xl:pb-5`
])
const StyledFeaturedContentText = styled.div(() => [
  tw`mt-4 mb-6 text-white`,
  tw`xl:mt-8 xl:mb-12 xl:text-lg`
])

const StyledFeaturedDetails = styled.section(() => [
  tw`w-full`,
  tw`xl:width[48%]`
])
const StyledFaturedImage = styled.div(() => [
  tw`relative min-height[269px] mb-7`
])
// const StyledFeaturedDetailTitle = styled.h5(() => [
//   tw`text-white font-markpro font-extrabold font-size[1.375rem] leading-7`,
//   tw`xl:text-2xl`
// ])
// const StyledFeaturedDetailTeams = styled.p(() => [
//   tw`my-3 text-pugb-gray-300 text-lg`,
//   tw`xl:my-4 xl:text-xl`
// ])
// const StyledFeaturedDetailTeamsNumber = styled.span(() => [
//   tw`text-white font-bold`
// ])
// const StyledFeaturedDetailDesc = styled.p(() => [
//   tw`text-pugb-gray-300`,
//   tw`xl:text-lg`
// ])

const stripLink = (text: string) => {
  const withoutLink = text.replace(/<a[^>]*>([^<]*)<\/a>/gi, '')
  return withoutLink.replace(/<[a-zA-Z\/][^>]*>/gi, '')
}

const FeaturedArticle = ({ post, url }: FeaturedProps) => {
  const { t } = useTranslation()

  return (
    <StyledFeatured>
      <StyledFeaturedContent>
        <StyledFeaturedContentFeatured>
          {t('common:featuredArticle')}
        </StyledFeaturedContentFeatured>
        <StyledFeaturedContentTitle>{post.title}</StyledFeaturedContentTitle>
        <StyledFeaturedContentText
          dangerouslySetInnerHTML={{ __html: stripLink(post.excerpt) }}
        />
      </StyledFeaturedContent>
      <StyledFeaturedDetails>
        <StyledFaturedImage>
          <Image
            unoptimized={!!post.featuredImage}
            src={
              post.featuredImage
                ? post.featuredImage.node.sourceUrl
                : defaultImg
            }
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </StyledFaturedImage>
        <MainButton label={t('common:readMore')} url={url} />
        {/* <StyledFeaturedDetailTitle>
          {t('common:eventDetails')}
        </StyledFeaturedDetailTitle> */}
        {/* <StyledFeaturedDetailTeams>
          {t('common:numberOfTeams')}:
          <StyledFeaturedDetailTeamsNumber> 24</StyledFeaturedDetailTeamsNumber>
        </StyledFeaturedDetailTeams> */}
        {/* <StyledFeaturedDetailDesc>
          Lorem ipsum dolores set amet conquis adoes set amet lorem ipsum
          dolores. Lorem ipsum dolores set amet conquis adoes set amet lorem
          ipsum dolores. Lorem ipsum dolores set amet conquis adoes set amet
          lorem ipsum dolores. Lorem ipsum dolores set amet conquis.
        </StyledFeaturedDetailDesc> */}
      </StyledFeaturedDetails>
    </StyledFeatured>
  )
}

export default FeaturedArticle
