import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import tw, { css, styled } from 'twin.macro'
import winnerImg from '../../../public/images/events/details/tmp-winner.png'

type ItemHeaderStyleProps = {
  background: string
}

const StyledGrid = styled.div(() => [
  tw`grid`,
  tw`sm:grid-cols-2`,
  tw`lg:grid-cols-3`,
  tw`xl:grid-cols-5`
])

const StyledItem = styled.div(() => [
  tw`flex flex-col items-center  bg-pugb-gray-800`
])
const StyledItemHeader = styled.div(({ background }: ItemHeaderStyleProps) => [
  tw`w-full height[275px] bg-no-repeat bg-cover`,
  css`
    background-image: url('${background}');
  `
])

const StyledWinner = styled.div(() => [
  tw`flex flex-col items-center justify-center h-full`
])
const StyledWinnerText = styled.p(() => [
  tw`mt-5 text-3xl text-pugb-gray-800 font-markpro font-extrabold`
])

const StyledItemContent = styled.div(() => [
  tw`flex flex-col flex-1 py-4 items-center justify-center w-full
    bg-gradient-to-r from-pugb-gray-250 to-white`
])
const StyledItemContentBadge = styled.div(() => [
  tw`bg-pugb-red-300 py-1 px-4 text-lg font-markpro font-extrabold`
])
const StyledItemContentTitle = styled.h4(() => [
  tw`mt-4 text-3xl text-pugb-gray-800 font-markpro font-extrabold uppercase`
])
const StyledItemContentTime = styled.h4(() => [
  tw`mt-6 text-3xl text-pugb-gray-650`
])

const events = [
  {
    name: 'Miramar',
    background: '/images/events/details/tmp-schedule-1.jpg',
    time: '18:00',
    winner: {
      logo: winnerImg,
      name: 'Cloud 9'
    }
  },
  {
    name: 'Miramar',
    background: '/images/events/details/tmp-schedule-1.jpg',
    time: '18:00',
    winner: {
      logo: winnerImg,
      name: 'Cloud 9'
    }
  },
  {
    name: 'Erangel',
    background: '/images/events/details/tmp-schedule-2.jpg',
    time: '18:00',
    winner: null
  },
  {
    name: 'Erangel',
    background: '/images/events/details/tmp-schedule-2.jpg',
    time: '18:00',
    winner: null
  },
  {
    name: 'Erangel',
    background: '/images/events/details/tmp-schedule-2.jpg',
    time: '18:00',
    winner: null
  }
]

const ScheduleInfo = () => {
  const { t } = useTranslation()

  return (
    <StyledGrid>
      {events.map((event, index) => (
        <StyledItem key={index}>
          <StyledItemHeader background={event.background}>
            {event.winner && (
              <StyledWinner>
                <Image src={event.winner.logo} alt="" />
                <StyledWinnerText>{event.winner.name}</StyledWinnerText>
              </StyledWinner>
            )}
          </StyledItemHeader>
          <StyledItemContent>
            <StyledItemContentBadge>
              {t('common:match', { text: index + 1 })}
            </StyledItemContentBadge>
            <StyledItemContentTitle>{event.name}</StyledItemContentTitle>
            <StyledItemContentTime>{event.time}</StyledItemContentTime>
          </StyledItemContent>
        </StyledItem>
      ))}
    </StyledGrid>
  )
}

export default ScheduleInfo
