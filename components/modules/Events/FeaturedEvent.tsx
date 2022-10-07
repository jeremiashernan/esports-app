import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
/*- section to be removed -*/
import React, { useState } from 'react'
/*- end -*/
import tw, { css, styled } from 'twin.macro'
import featuredImg from '../../../public/images/featured-event.jpg'
import { Event } from '../../../services/interfaces/EventProps'
import { MainButton, SimpleButton } from '../../elements/Buttons'
/*- section to be removed -*/
import { MatchModal } from '../../elements/Modal'
/*- end -*/

type FeaturedEventProps = {
  event: Event
}

const StyledWrapper = styled.div(() => [tw`container px-5`, tw`xl:px-0`])

const StyledFeaturedEvent = styled.div(() => [
  tw`flex flex-col-reverse items-center
  bg-gradient-to-r from-pugb-gray-700 to-pugb-gray-900`,
  tw`lg:flex-row lg:height[500px]`,
  tw`xl:px-0`
])

const StyledContent = styled.div(() => [
  tw`p-4`,
  tw`lg:w-7/12 lg:px-10`,
  tw`xl:width[55%] xl:px-20`
])
const StyledContentTitle = styled.h2(() => [
  tw`relative pb-3.5 text-white font-markpro font-extrabold font-size[1.75rem] leading-9
      after:content after:absolute after:left-0 after:bottom-0 after:w-11 
      after:height[3px] after:bg-pugb-red-300`,
  tw`xl:font-size[3.125rem] xl:line-height[3.45rem]
      xl:after:w-14 xl:after:h-1 xl:pb-5`
])
const StyledContentDescription = styled.p(() => [
  tw`mt-4 text-white`,
  tw`xl:text-lg`
])
const StyledContentButtons = styled.div(() => [
  tw`flex flex-col mt-6`,
  tw`sm:flex-row sm:mt-10`,
  css`
    & > a + a {
      ${tw`mt-2 sm:ml-5 sm:mt-0`}
    }
  `
])
const StyledContentApply = styled.p(() => [tw`mt-4 text-sm text-white`])
const StyledContentApplyLink = styled.a(() => [
  tw`text-pugb-red-300 transition-colors  
    hover:text-pugb-red-200`
])

const StyledImage = styled.div(() => [
  tw`relative w-full min-height[200px]`,
  tw`lg:h-full lg:flex-1`
])

const FeaturedEvent = ({ event }: FeaturedEventProps) => {
  const { t } = useTranslation()

  /*- section to be removed -*/
  const [showModal, setShowModal] = useState(false)
  /*- end -*/
  return (
    <StyledWrapper>
      <StyledFeaturedEvent>
        <StyledContent>
          <StyledContentTitle>{event.title}</StyledContentTitle>
          <StyledContentDescription>
            {event.description}
          </StyledContentDescription>
          <StyledContentButtons>
            <SimpleButton
              label={t('common:eventInfo')}
              url={`/events/${event.tournamentId}`}
            />
            <MainButton
              label={t('common:watchNow')}
              onClick={() => setShowModal(true)}
            />
          </StyledContentButtons>
          <StyledContentApply>
            {t('common:wantYouEvent')}
            <Link href="#" passHref>
              <StyledContentApplyLink>
                {t('common:applyHere')}
              </StyledContentApplyLink>
            </Link>
          </StyledContentApply>
        </StyledContent>
        <StyledImage>
          <Image
            src={featuredImg}
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </StyledImage>
      </StyledFeaturedEvent>
      <MatchModal show={showModal} onClose={() => setShowModal(false)} />
    </StyledWrapper>
  )
}

export default FeaturedEvent
