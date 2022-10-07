import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import 'swiper/css'
import tw, { css, styled } from 'twin.macro'
import { useFormatDistance } from '../../../hooks/useFormatDate'
import useWindowSize from '../../../hooks/useWindowSize'
import defaultImg from '../../../public/images/pubg-default.jpg'
import { Post } from '../../../services/interfaces/NewsProps'
import { ArrowLeft, ArrowRight } from '../../elements/Icons'

type NewsProps = {
  title: string
  news: Post[]
  dark?: boolean
}

type NavProps = {
  prevClick: () => void
  nextClick: () => void
  dark: boolean
}

type ItemProps = {
  item: Post
}

type NewsStyleProps = {
  position?: number
  dark?: boolean
}

const StyledWrapper = styled.section(() => [tw`container`])
const StyledHeader = styled.div(() => [tw`flex justify-between mb-6`])
const StyledHeaderTitle = styled.h3(({ dark }: NewsStyleProps) => [
  tw`text-3xl font-markpro font-extrabold leading-none`,
  tw`xl:font-size[2.6rem]`,
  dark && tw`text-white`
])
const StyledHeaderNav = styled.div(() => [tw`hidden items-center`, tw`xl:flex`])
const StyledBottomNav = styled.div(() => [
  tw`flex items-center justify-between mt-5`,
  tw`xl:hidden`
])

const StyledNavArrows = styled.ul(() => [tw`grid grid-cols-2 gap-5 xl:mr-11`])
const StyledNavArrowItem = styled.li(() => [])
const StyledArrowLink = styled.a(({ dark }: NewsStyleProps) => [
  tw`cursor-pointer fill-current text-pugb-gray-800 transition-colors
  hover:text-pugb-red-200`,
  dark && tw`text-pugb-gray-300`
])
const StyledNavButton = styled.a(() => [
  tw`block py-4 w-36 text-center text-white font-markpro font-extrabold select-none
  bg-pugb-red-300 transition-colors hover:bg-pugb-red-200`
])

const StyledNews = styled.div(() => [tw`overflow-hidden pt-2`])
const StyleNewsInner = styled.div(({ position }: NewsStyleProps) => [
  tw`whitespace-nowrap transition-transform duration-500 xl:-ml-7`,
  position &&
    css`
      transform: translateX(-${position}%);
    `
])
const StyledNewsItem = styled.div(() => [
  tw`inline-flex min-height[395px] w-full whitespace-pre-wrap`,
  tw`xl:w-1/4 xl:min-height[470px]`,
  tw`2xl:min-height[430px]`
])
const StyledNewsItemCard = styled.a(() => [
  tw`flex flex-col w-full border-pugb-red-300 border-bottom-width[7px] select-none`,
  tw`xl:ml-7 xl:transform xl:transition-transform xl:hover:-translate-y-2`
])
const StyledNewsCardWrapperImg = styled.div(() => [tw`relative h-48`])
const StyledNewsCardWrapperContent = styled.div(() => [
  tw`flex flex-col flex-1 justify-between px-9 py-6
  bg-gradient-to-r from-pugb-gray-200 to-white`
])
const StyledNewCardContentTitle = styled.h3(() => [
  tw`text-2xl font-markpro font-extrabold height[100%]`
])
const StyledNewCardContentDetails = styled.div(() => [
  tw`flex justify-between text-sm mt-7`
])
const StyledNewCardContentLabel = styled.p(() => [])
const StyledNewCardContentDate = styled.p(() => [tw`text-pugb-gray-300`])

const SliderNav = ({ prevClick, nextClick, dark }: NavProps) => {
  const { t } = useTranslation()

  return (
    <>
      <StyledNavArrows>
        <StyledNavArrowItem>
          <StyledArrowLink dark={dark} onClick={prevClick}>
            <ArrowLeft />
          </StyledArrowLink>
        </StyledNavArrowItem>
        <StyledNavArrowItem>
          <StyledArrowLink dark={dark} onClick={nextClick}>
            <ArrowRight />
          </StyledArrowLink>
        </StyledNavArrowItem>
      </StyledNavArrows>
      <Link href="/news" passHref>
        <StyledNavButton>{t('common:allNews')}</StyledNavButton>
      </Link>
    </>
  )
}

const SliderItem = ({ item }: ItemProps) => (
  <StyledNewsItem>
    <Link href={`/news/${item.slug}`} passHref>
      <StyledNewsItemCard>
        <StyledNewsCardWrapperImg>
          <Image
            unoptimized={!!item.featuredImage}
            src={
              item.featuredImage
                ? item.featuredImage.node.sourceUrl
                : defaultImg
            }
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </StyledNewsCardWrapperImg>
        <StyledNewsCardWrapperContent>
          <StyledNewCardContentTitle>{item.title}</StyledNewCardContentTitle>
          <StyledNewCardContentDetails>
            <StyledNewCardContentLabel>
              {item.categories.nodes[0].name}
            </StyledNewCardContentLabel>
            <StyledNewCardContentDate>
              {useFormatDistance(item.date)}
            </StyledNewCardContentDate>
          </StyledNewCardContentDetails>
        </StyledNewsCardWrapperContent>
      </StyledNewsItemCard>
    </Link>
  </StyledNewsItem>
)

const NewsSlider = ({ title, news, dark }: NewsProps) => {
  const [position, setPosition] = useState(0)
  const index = useRef(0)
  const { width } = useWindowSize()

  const updatePosition = (dec = false) => {
    index.current = dec ? index.current - 1 : index.current + 1

    if (width < 1280) {
      if (index.current < 0) {
        index.current = news.length - 1
      }

      if (index.current > news.length - 1) {
        index.current = 0
      }

      setPosition(index.current * 100)
    } else {
      if (index.current < 0) {
        index.current = news.length - 4
      }

      if (index.current > news.length - 4) {
        index.current = 0
      }

      setPosition(index.current * 25)
    }
  }

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledHeaderTitle dark={dark}>{title}</StyledHeaderTitle>
        <StyledHeaderNav>
          <SliderNav
            dark={dark || false}
            prevClick={() => updatePosition(true)}
            nextClick={() => updatePosition()}
          />
        </StyledHeaderNav>
      </StyledHeader>
      <StyledNews>
        <StyleNewsInner position={position}>
          {news &&
            news.map((item, idx) => <SliderItem item={item} key={idx} />)}
        </StyleNewsInner>
      </StyledNews>
      <StyledBottomNav>
        <SliderNav
          dark={dark || false}
          prevClick={() => updatePosition(true)}
          nextClick={() => updatePosition()}
        />
      </StyledBottomNav>
    </StyledWrapper>
  )
}

export default NewsSlider
