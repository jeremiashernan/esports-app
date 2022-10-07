import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { useRef, useState } from 'react'
import tw, { css, styled } from 'twin.macro'
import { useFetch } from '../../../hooks/useFetch'
import useWindowSize from '../../../hooks/useWindowSize'
import { SocialCard } from '../Cards'
import { ArrowLeft, ArrowRight } from '../Icons'
import { SocialLinks } from '../Links'

type YoutubeProps = {
  id: {
    videoId: string
  }
  snippet: {
    title: string
    thumbnails: {
      medium: {
        url: string
        width: number
        height: number
      }
    }
  }
}

type ViewStyleProps = {
  position: number
}

type ThumbStyleProps = {
  active: boolean
}

const StylesSocialCard = styled.div(() => [tw`xl:first:col-span-2`])
const StyledVideoContainer = styled.div(() => [
  tw`relative inline-flex flex-wrap w-full overflow-hidden h-0 padding-bottom[56.25%]`
])
const StyledVideoIframe = styled.iframe(() => [
  tw`absolute w-full h-full left-0 top-0`
])

const StyledThumbsContainer = styled.div(() => [tw`relative overflow-hidden`])
const StyledThumbsInner = styled.div(({ position }: ViewStyleProps) => [
  tw`whitespace-nowrap transition-transform duration-500 mt-2 -ml-1.5`,
  tw`xl:-ml-3`,
  css`
    transform: translateX(-${position}%);
  `
])
const StyledThumbsItem = styled.div(() => [
  tw`inline-flex w-1/3`,
  tw`md:w-1/4`,
  tw`lg:w-1/5`
])
const StyledThumbsItemCard = styled.a(({ active }: ThumbStyleProps) => [
  tw`flex flex-col w-full ml-1.5 opacity-40 transition-opacity cursor-pointer
  hover:opacity-100`,
  tw`xl:ml-3`,
  active && tw`opacity-100`
])
const StyledThumbsItemImg = styled.div(() => [
  tw`w-full aspect-w-16 aspect-h-9 mb-1`
])

const StyledSubscribe = styled.div(() => [
  tw`flex items-center justify-between mt-3`,
  tw`xl:mt-5`
])

const StyledSubscribeArrows = styled.div(() => [tw`flex`])
const StyledSubscribeArrowsLink = styled.a(() => [
  tw`ml-4 cursor-pointer fill-current text-pugb-gray-800 transition-colors
  hover:text-pugb-red-200`,
  tw`xl:ml-5`
])

const YoutubeCardComponent = () => {
  const { t, lang } = useTranslation()
  const { width } = useWindowSize()
  const [index, setIndex] = useState(0)
  const [position, setPosition] = useState(0)
  const count = useRef(0)

  const { data } = useFetch(`/api/social/youtube?lang=${lang}`)

  const updatePosition = (dec = false) => {
    count.current = dec ? count.current - 1 : count.current + 1
    let nSliders = 5

    if (width < 1024) {
      nSliders = 4
    }

    if (width < 768) {
      nSliders = 3
    }

    if (count.current < 0) {
      count.current = data.items.length - nSliders
    }

    if (count.current > data.items.length - nSliders) {
      count.current = 0
    }

    setPosition(count.current * (100 / nSliders))
  }

  return (
    <StylesSocialCard>
      {data && data.items && (
        <SocialCard title="Youtube">
          <StyledVideoContainer>
            <StyledVideoIframe
              width="853"
              height="480"
              src={`https://www.youtube-nocookie.com/embed/${data.items[index].id.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </StyledVideoContainer>
          <StyledThumbsContainer>
            <StyledThumbsInner position={position}>
              {data.items.map((item: YoutubeProps, idx: number) => (
                <StyledThumbsItem key={idx}>
                  <StyledThumbsItemCard
                    active={index === idx}
                    onClick={() => setIndex(idx)}
                  >
                    <StyledThumbsItemImg>
                      <Image
                        unoptimized
                        src={item.snippet.thumbnails.medium.url}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                      />
                    </StyledThumbsItemImg>
                  </StyledThumbsItemCard>
                </StyledThumbsItem>
              ))}
            </StyledThumbsInner>
          </StyledThumbsContainer>
          <StyledSubscribe>
            <SocialLinks
              label={t('common:subscribeOn', { text: 'Youtube' })}
              url={t('links:socialLinks.youtube')}
            />
            <StyledSubscribeArrows>
              <StyledSubscribeArrowsLink onClick={() => updatePosition(true)}>
                <ArrowLeft />
              </StyledSubscribeArrowsLink>
              <StyledSubscribeArrowsLink onClick={() => updatePosition()}>
                <ArrowRight />
              </StyledSubscribeArrowsLink>
            </StyledSubscribeArrows>
          </StyledSubscribe>
        </SocialCard>
      )}
    </StylesSocialCard>
  )
}

export default YoutubeCardComponent
