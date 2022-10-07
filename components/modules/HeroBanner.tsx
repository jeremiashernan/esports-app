import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import tw, { css, styled } from 'twin.macro'
import useWindowSize from '../../hooks/useWindowSize'
import defaultImg from '../../public/images/pubg-default.jpg'
import { Post } from '../../services/interfaces/NewsProps'
import { MainButton } from '../elements/Buttons'

type BannerProps = {
  posts: Post[]
}

type StyleProps = {
  active?: boolean
}

type ViewStyleProps = {
  position: number
}

const StyledBanner = styled.div(() => [
  tw`container shadow-2xl bg-gradient-to-r from-pugb-gray-700 to-pugb-gray-900`
])

const StyledView = styled.div(() => [tw`relative overflow-hidden h-full`])
const StyledViewInner = styled.div(({ position }: ViewStyleProps) => [
  tw`xl:whitespace-nowrap xl:transition-transform xl:duration-1000`,
  css`
    transform: translateX(-${position}%);
  `
])
const StyledViewItem = styled.div(() => [tw`inline-flex flex-wrap w-full`])

const StyledViewBackground = styled.div(() => [
  tw`flex flex-col w-full h-full`,
  tw`xl:absolute xl:flex-row-reverse`
])
const StyledViewBackgroundImage = styled.div(() => [
  tw`relative height[210px]`,
  tw`xl:w-3/5 xl:h-full`,
  tw`2xl:w-2/3`
])
const StyledViewBackgroundBox = styled.div(() => [
  tw`w-full`,
  tw`xl:w-1/3 xl:h-full xl:bg-gradient-to-r xl:from-pugb-gray-700 xl:to-pugb-gray-900`
])

const StyledViewCard = styled.div(({ active }: StyleProps) => [
  tw`relative p-4 opacity-0
  transition-opacity duration-1000 delay-500`,
  tw`xl:top-0 xl:p-0 xl:pt-14 xl:px-16 xl:height[592px]
  xl:duration-1000 xl:delay-1000`,
  active && tw`opacity-100`
])
const StyledViewCardLabel = styled.h5(() => [
  tw`text-pugb-gray-100 text-sm uppercase`,
  tw`xl:text-lg`
])
const StyledViewCardTitle = styled.h2(() => [
  tw`mt-1 text-white text-3xl mb-2 font-markpro font-extrabold uppercase whitespace-pre-wrap w-full`,
  tw`xl:mt-5 xl:mb-8 xl:text-4xl xl:w-[24rem]`
])
const StyledViewCardText = styled.p(() => [
  tw`text-white mb-6 whitespace-pre-wrap`,
  tw`xl:width[380px] xl:text-lg xl:mb-10`
])

const StyledTabs = styled.ul(() => [
  tw`grid grid-cols-5 gap-3 w-3/5 mx-auto pb-6`,
  tw`xl:gap-0 xl:pb-0 xl:w-full`
])
const StyledTabItem = styled.li(() => [tw`flex`])

const StyledTabDesktop = styled.a(({ active }: StyleProps) => [
  tw`relative hidden flex-col w-full py-5 px-7 leading-7 text-pugb-gray-300
    bg-gradient-to-r from-pugb-gray-250 to-white cursor-pointer
    transition-colors

    hover:text-pugb-gray-800

    before:content
    before:absolute
    before:w-full
    before:h-2
    before:top-0 before:right-0
    before:transition-colors

    after:content after:absolute 
    after:w-0 after:h-2
    after:top-0 after:left-0
    after:transition-width
    after:ease-linear
    after:duration-8000
    hover:after:w-full`,
  tw`xl:flex`,
  active && tw`after:bg-pugb-red-200 before:bg-pugb-red-500 after:w-full`
])

const StyledTabDesktopLabel = styled.p(({ active }: StyleProps) => [
  tw`mb-1.5 uppercase text-xs`,
  active && tw`text-pugb-gray-650`
])
const StyledTabDesktopTitle = styled.h5(({ active }: StyleProps) => [
  tw`font-markpro uppercase font-extrabold text-xl whitespace-pre-wrap`,
  active && tw`text-pugb-gray-800`
])

const StyledTabMobile = styled.a(({ active }: StyleProps) => [
  tw`relative w-full height[5px] mt-10
  transition-colors

  before:absolute
  before:h-full
  before:w-full
  before:bg-pugb-gray-600
  before:content
  before:top-0 before:right-0
  before:transition-colors

  after:content after:absolute 
  after:top-0 after:left-0
  after:w-0 after:h-full
  after:transition-width
  after:ease-linear
  after:duration-8000

  hover:after:w-full
  `,
  active && tw`after:bg-pugb-red-200  before:bg-pugb-gray-600 after:w-full`,
  tw`xl:hidden`
])

const getExcerpt = (text: string) => {
  const withoutLink = text.replace(/<a[^>]*>([^<]*)<\/a>/gi, '')
  const withoutTags = withoutLink.replace(/<[a-zA-Z\/][^>]*>/gi, '')
  const strMatch = withoutTags.match(/^.*?[\.!\?](?:\s|$)/gi)

  return strMatch ? strMatch.toString().trim() : ''
}

const HeroBanner = ({ posts }: BannerProps) => {
  const [index, setIndex] = useState<null | number>(null)
  const timeoutRef = useRef(0)

  const { t } = useTranslation()
  const { width } = useWindowSize()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(0)
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    resetTimeout()

    timeoutRef.current = window.setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === posts.length - 1
            ? 0
            : prevIndex !== null
            ? prevIndex + 1
            : 1
        ),
      8000
    )

    return () => {
      resetTimeout()
    }
  }, [index, posts])

  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
    }
  }

  SwiperCore.use([Autoplay])

  return (
    <>
      <StyledBanner>
        <StyledView>
          {width > 1280 ? (
            <StyledViewInner position={Number(index !== null && index * 100)}>
              {posts.map((post, idx) => (
                <StyledViewItem key={idx}>
                  <StyledViewBackground>
                    <StyledViewBackgroundImage>
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
                    </StyledViewBackgroundImage>
                    <StyledViewBackgroundBox />
                  </StyledViewBackground>
                  <StyledViewCard active={idx === index}>
                    <StyledViewCardLabel>
                      {post.categories.nodes[0].name}
                    </StyledViewCardLabel>
                    <StyledViewCardTitle>{post.title}</StyledViewCardTitle>
                    <StyledViewCardText
                      dangerouslySetInnerHTML={{
                        __html: getExcerpt(post.excerpt)
                      }}
                    />
                    <MainButton
                      label={t('common:readMore')}
                      url={`/news/${post.slug}`}
                    />
                  </StyledViewCard>
                </StyledViewItem>
              ))}
            </StyledViewInner>
          ) : (
            <Swiper
              loop
              autoplay={{
                delay: 8000,
                disableOnInteraction: false
              }}
              onSlideChange={(swiper) => {
                setIndex(swiper.realIndex)
              }}
              onSwiper={(swiper) => {
                swiper.slideTo(1)
              }}
            >
              {posts.map((post, idx) => (
                <SwiperSlide key={idx}>
                  <StyledViewItem>
                    <StyledViewBackground>
                      <StyledViewBackgroundImage>
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
                      </StyledViewBackgroundImage>
                      <StyledViewBackgroundBox />
                    </StyledViewBackground>
                    <StyledViewCard active={idx === index}>
                      <StyledViewCardLabel>
                        {post.categories.nodes[0].name}
                      </StyledViewCardLabel>
                      <StyledViewCardTitle>{post.title}</StyledViewCardTitle>
                      <StyledViewCardText
                        dangerouslySetInnerHTML={{
                          __html: getExcerpt(post.excerpt)
                        }}
                      />
                      <MainButton
                        label={t('common:readMore')}
                        url={`/news/${post.slug}`}
                      />
                    </StyledViewCard>
                  </StyledViewItem>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </StyledView>
        <StyledTabs>
          {posts.map((post, idx) => {
            const active = idx === index

            return (
              <StyledTabItem key={idx}>
                <StyledTabDesktop active={active} onClick={() => setIndex(idx)}>
                  <StyledTabDesktopLabel active={active}>
                    {post.categories.nodes[0].name}
                  </StyledTabDesktopLabel>
                  <StyledTabDesktopTitle active={active}>
                    {post.title}
                  </StyledTabDesktopTitle>
                </StyledTabDesktop>
                <StyledTabMobile active={active} />
              </StyledTabItem>
            )
          })}
        </StyledTabs>
      </StyledBanner>
    </>
  )
}

export default HeroBanner
