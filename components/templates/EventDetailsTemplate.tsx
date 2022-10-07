import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import tw, { css, styled } from 'twin.macro'
import {
  broadcastTalents,
  PrizeLists,
  PrizePools,
  tournamentEvents
} from '../../constants/events'
import { useFetch } from '../../hooks/useFetch'
import { useFormatRange } from '../../hooks/useFormatDate'
import eventLogo from '../../public/images/events/details/tmp-event-logo.png'
import { Post } from '../../services/interfaces/NewsProps'
import { MainButton, SimpleButton } from '../elements/Buttons'
import {
  BroadcastTalent,
  FeaturedMatch,
  PrizingBreakdown,
  TournamentEvent
} from '../modules/Events'
import TabStats from '../modules/Events/EventsDetails/TabStats'
import { NewsSlider } from '../modules/News'

const StyledEvents = styled.div(() => [tw`relative bg-pugb-gray-200`])

const StyledHeader = styled.div(() => [
  tw`pt-16 pb-28 bg-no-repeat bg-cover bg-top
    background-image[url('/images/bg-header-events.jpg')]`
])
const StyledHeaderWrapper = styled.div(() => [
  tw`container px-5 flex flex-wrap items-center justify-between`,
  tw`lg:px-0`,
  tw`2xl:items-start`
])
const StyledHeaderLogo = styled.div(() => [tw`w-24 mr-4`, tw`sm:w-32 sm:mr-7`])
const StyledHeaderInfo = styled.div(() => [tw`flex-1`])
const StyledHeaderInfoTitle = styled.h1(() => [
  tw`font-markpro font-extrabold text-white text-3xl`,
  tw`sm:text-4xl`,
  tw`lg:text-5xl`,
  tw`2xl:text-6xl`
])
const StyledHeaderInfoText = styled.p(() => [
  tw`text-sm text-white`,
  tw`md:flex md:items-center md:text-lg`
])
const StyledHeaderInfoTextMark = styled.span(() => [
  tw`block bg-pugb-red-300`,
  tw`md:w-4 md:h-0.5 md:mx-2`
])
const StyledHeaderActions = styled.div(() => [
  tw`w-full mt-8`,
  tw`sm:flex`,
  tw`2xl:self-end 2xl:justify-end 2xl:w-4/12`,
  css`
    & > a + a {
      ${tw`mt-2 sm:ml-5 sm:mt-0`}
    }
  `
])

const StyledNews = styled.div(() => [
  tw`px-5 py-7 bg-pugb-gray-800`,
  tw`xl:py-16 xl:pb-24`
])

const EventDetailsTemplate = () => {
  const { t, lang } = useTranslation()

  const { data } = useFetch(`/api/posts?lang=${lang}&first=8`)
  const posts: Post[] = data && data.posts

  return (
    <StyledEvents>
      <StyledHeader>
        <StyledHeaderWrapper>
          <StyledHeaderLogo>
            <Image src={eventLogo} alt="" />
          </StyledHeaderLogo>
          <StyledHeaderInfo>
            <StyledHeaderInfoTitle>
              LVUP SHOWDOWN: 2021 Season Final
            </StyledHeaderInfoTitle>
            <StyledHeaderInfoText>
              Studio Paradise, Las Vegas, NV
              <StyledHeaderInfoTextMark />
              {useFormatRange('2021-11-25', '2021-12-16')}
            </StyledHeaderInfoText>
          </StyledHeaderInfo>
          <StyledHeaderActions>
            <SimpleButton label={t('common:fullSchedule')} url="#" />
            <MainButton label={t('common:watchNow')} />
          </StyledHeaderActions>
        </StyledHeaderWrapper>
      </StyledHeader>
      <FeaturedMatch />
      <TournamentEvent event={tournamentEvents} />
      <TabStats />
      <PrizingBreakdown prizeLists={PrizeLists} prizePools={PrizePools} />
      <BroadcastTalent talents={broadcastTalents} />
      <StyledNews>
        {posts && (
          <NewsSlider title={t('common:relatedNews')} news={posts} dark />
        )}
      </StyledNews>
    </StyledEvents>
  )
}

export default EventDetailsTemplate
