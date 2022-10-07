import Image from 'next/image'
import Link from 'next/link'
import tw, { styled } from 'twin.macro'
import { useFormatDistance } from '../../../hooks/useFormatDate'
import defaultImg from '../../../public/images/pubg-default.jpg'
import { Post } from '../../../services/interfaces/NewsProps'

type PostProps = {
  post: Post
}

const StyledPost = styled.div(() => [tw`flex flex-wrap shadow-2xl`])

const StyledImage = styled.div(() => [
  tw`relative w-full height[151px]`,
  tw`xl:w-1/3 xl:height[300px] xl:border-right-width[6px] xl:border-pugb-red-300`,
  tw`2xl:height[250px]`
])

const StyledContent = styled.div(() => [
  tw`w-full flex flex-col justify-between px-6 py-4 min-height[250px] 
  bg-gradient-to-r from-pugb-gray-200 to-white`,
  tw`xl:w-2/3 xl:px-12 xl:py-6`
])
const StyledContentText = styled.div(() => [])
const StyledContentTitle = styled.a(() => [
  tw`block mb-1.5 font-markpro font-extrabold text-xl transition-colors
  hover:text-pugb-red-300`,
  tw`xl:font-size[1.75rem] xl:leading-8`
])
const StyledContentExcerpt = styled.div(() => [tw`text-sm`, tw`xl:text-base`])
const StyledContentInfo = styled.div(() => [
  tw`flex divide-x mt-4 divide-pugb-red-300 text-xs`,
  tw`xl:text-sm xl:mt-0`
])
const StyledContentInfoCategory = styled.p(() => [tw`pr-2.5 uppercase`])
const StyledContentInfoDate = styled.p(() => [tw`pl-2.5 text-pugb-gray-300`])

const stripLink = (text: string) => {
  const withoutLink = text.replace(/<a[^>]*>([^<]*)<\/a>/gi, '')
  return withoutLink.replace(/<[a-zA-Z\/][^>]*>/gi, '')
}

const PostContent = ({ post }: PostProps) => {
  const date = useFormatDistance(post.date)

  return (
    <StyledPost>
      <StyledImage>
        <Image
          unoptimized={!!post.featuredImage}
          src={
            post.featuredImage ? post.featuredImage.node.sourceUrl : defaultImg
          }
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </StyledImage>
      <StyledContent>
        <StyledContentText>
          <Link href={`/news/${post.slug}`} passHref>
            <StyledContentTitle>{post.title}</StyledContentTitle>
          </Link>
          <StyledContentExcerpt
            dangerouslySetInnerHTML={{ __html: stripLink(post.excerpt) }}
          />
        </StyledContentText>
        <StyledContentInfo>
          <StyledContentInfoCategory>
            {post.categories.nodes[0].name}
          </StyledContentInfoCategory>
          <StyledContentInfoDate>{date}</StyledContentInfoDate>
        </StyledContentInfo>
      </StyledContent>
    </StyledPost>
  )
}

export default PostContent
