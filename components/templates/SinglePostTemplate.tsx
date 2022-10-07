import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import tw, { css, styled } from 'twin.macro'
import { shareLinks } from '../../constants/links'
import { useFormatDate } from '../../hooks/useFormatDate'
import defaultImg from '../../public/images/pubg-default.jpg'
import { Post } from '../../services/interfaces/NewsProps'
import { IconButton } from '../elements/Buttons'
import { CMSHeading } from '../elements/Headings'

type PostProps = {
  post: Post
}

const StyledSubtitle = styled.div(() => [
  tw`flex flex-wrap justify-center items-center mt-4 uppercase`,
  tw`xl:flex-nowrap xl:w-max xl:mx-auto`
])
const StyledSubTitleCategory = styled.a(() => [
  tw`w-full text-center mb-1 px-4`,
  tw`xl:w-max xl:mb-0 xl:border-r xl:border-pugb-red-300`
])
const StyledSubTitleText = styled.p(() => [
  tw`px-4 text-pugb-gray-300 border-r border-pugb-red-300 last:border-none`
])

const StyledFeaturedImage = styled.div(() => [
  tw`relative width[95%] mt-4 -mb-16 mx-auto`,
  tw`xl:width[1100px] xl:mt-9 xl:-mb-32`
])

const StyledContent = styled.section(() => [tw`bg-pugb-gray-150`])
const StyledContentWrapper = styled.article(() => [
  tw`container pt-16 px-6 pb-12`,
  tw`xl:width[887px] xl:pt-40 xl:pb-28`
])
const StyledContentPost = styled.div(() => [
  css`
    h2,
    h3,
    h4,
    h5 {
      ${tw`mb-4 flex items-center font-markpro font-bold text-pugb-gray-800 text-3xl`}

      img {
        ${tw`mr-3`}
      }
    }
    p {
      ${tw`m-0 text-xl`}
    }
    a {
      ${tw`text-pugb-red-300 transition-all hover:underline`}
    }
    ul {
      ${tw`mt-2`}

      li {
        ${tw`relative ml-1 pl-6 text-xl bg-no-repeat`}
        ${tw`before:content before:block before:absolute before:left-0
        before:w-3 before:h-7 before:bg-no-repeat before:bg-center
        before:background-image[url('/images/list-style.svg')]`}
      }
      li + li {
        ${tw`mt-3`}
      }
    }
    ol {
      ${tw`mt-2 ml-5 list-decimal`}

      li {
        ${tw`relative pl-2 text-xl`}
      }

      li + li {
        ${tw`mt-3`}
      }
    }
    p + p,
    ul + p,
    ol + p {
      ${tw`mt-5`}
    }
    p + h2,
    p + h3,
    p + h4,
    p + h5,
    p + ol,
    figure + h2,
    figure + h3,
    figure + h4,
    figure + h5,
    div + h2,
    div + h3,
    div + h4,
    div + h5,
    script + h2,
    script + h3,
    script + h4,
    script + h5,
    ul + h2,
    ul + h3,
    ul + h4,
    ul + h5 {
      ${tw`mt-12`}
    }
    .wp-block-embed,
    .wp-block-video,
    .wp-block-image {
      ${tw`inline-block w-full my-5`}
    }
    .wp-block-table {
      ${tw`overflow-x-auto`}
    }
    blockquote,
    .wp-block-group {
      ${tw`my-5 py-10 px-8 border-l-4 border-pugb-red-300 text-white
      bg-gradient-to-r from-pugb-gray-700 to-pugb-gray-900`}
    }
    .wp-block-embed-youtube {
      ${tw`aspect-w-16 aspect-h-9 mx-auto overflow-hidden`}

      & iframe {
        ${tw`absolute w-full h-full inset-0`}
      }
    }
    blockquote {
      ${tw`relative italic before:content before:block before:absolute before:left-6 before:top-5 
      before:width[114px] before:height[83px]
      before:background-image[url('/images/icon-quote.svg')]`}

      cite {
        ${tw`block text-sm`}
      }

      p + cite {
        ${tw`mt-2`}
      }
    }
    .has-text-align-center {
      ${tw`text-center`}

      img {
        ${tw`mx-auto`}
      }
    }
    table {
      ${tw`w-full table-auto mb-12 font-markpro font-bold`}

      tr:nth-child(even) {
        ${tw`bg-gradient-to-r from-pugb-gray-250 to-pugb-gray-0`}

        td {
          ${tw`first:bg-pugb-gray-100`}
        }
      }

      tr:nth-child(odd) {
        ${tw`bg-gradient-to-r from-pugb-gray-0 to-pugb-gray-250`}

        td {
          ${tw`first:bg-pugb-gray-200`}
        }
      }

      td {
        ${tw`py-3 px-5 first:width[1%] first:whitespace-nowrap`}
      }

      tr:first-child {
        ${tw`bg-gradient-to-r from-pugb-gray-700 to-pugb-gray-900 text-white
        font-lato font-normal`}

        td {
          ${tw`first:bg-transparent`}

          br {
            ${tw`hidden`}
          }
        }
      }
    }
  `
])

const StyledContentShare = styled.div(() => [
  tw`flex items-center mt-14 pt-5 border-t border-pugb-gray-100`
])
const StyledContentList = styled.ul(() => [tw`flex`])
const StyledContentIcon = styled.li(() => [tw`mr-2`])
const StyledContentLabel = styled.span(() => [tw`mr-3.5 uppercase`])

const SinglePostTemplate = ({ post }: PostProps) => {
  const baseURL = useRef('')

  const { t } = useTranslation()
  const date = useFormatDate(post.date, 'LLL d, yyyy')

  useEffect(() => {
    baseURL.current = window.location.href
  }, [])

  return (
    <>
      <CMSHeading title={post.title}>
        <StyledSubtitle>
          <Link
            href={`/news?cat=${post.categories.nodes[0].databaseId}`}
            passHref
          >
            <StyledSubTitleCategory>
              {post.categories.nodes[0].name}
            </StyledSubTitleCategory>
          </Link>
          <StyledSubTitleText>{date}</StyledSubTitleText>
          <StyledSubTitleText>{`by ${post.author.node.name}`}</StyledSubTitleText>
        </StyledSubtitle>
        <StyledFeaturedImage>
          {post.featuredImage && (
            <Image
              unoptimized
              src={post.featuredImage.node.sourceUrl}
              alt=""
              width={1024}
              height={
                1024 /
                (+post.featuredImage.node.mediaDetails.sizes[0].width /
                  +post.featuredImage.node.mediaDetails.sizes[0].height)
              }
              layout="responsive"
            />
          )}
          {!post.featuredImage && <Image src={defaultImg} alt="" />}
        </StyledFeaturedImage>
      </CMSHeading>
      <StyledContent>
        <StyledContentWrapper>
          <StyledContentPost
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <StyledContentShare>
            <StyledContentLabel>{t('common:shareThis')}</StyledContentLabel>
            <StyledContentList>
              {shareLinks.map(({ icon, label, url }) => (
                <StyledContentIcon key={label}>
                  <IconButton
                    icon={icon}
                    title={label}
                    url={`${url}${baseURL.current}`}
                    size={38}
                    blank
                  />
                </StyledContentIcon>
              ))}
            </StyledContentList>
          </StyledContentShare>
        </StyledContentWrapper>
      </StyledContent>
    </>
  )
}

export default SinglePostTemplate
