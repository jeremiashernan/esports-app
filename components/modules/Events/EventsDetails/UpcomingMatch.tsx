import { useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'

type UpcomingMatchProps = {
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}
const StyledUpcomingMatchWrapper = styled.div(() => [
  tw`w-full max-w-[95rem] shadow-lg m-auto
    bg-gradient-to-r from-white to-pugb-gray-250`
])
const StyledTitle = styled.h1(() => [
  tw`font-markpro font-extrabold text-2xl w-max
    pt-8 pb-3 text-pugb-gray-800 mx-auto`,
  tw`md:text-6xl md:pt-16 md:pb-6`
])
const StyledTimeSection = styled.div(() => [tw`grid grid-cols-7 m-auto w-max`])
const StyledCountContent = styled.div(() => [
  tw`font-markpro font-medium text-xl text-center`,
  tw`md:text-5xl`
])
const Styledlabel = styled.p(() => [
  tw`text-base text-center text-pugb-gray-300`,
  tw`md:text-2xl`
])
const StyledDescription = styled.p(() => [
  tw`pt-8 pb-2 text-base text-center text-pugb-gray-650 break-words w-full`,
  tw`md:text-2xl md:pt-14 md:pb-6`
])

const UpcomingMatch = () => {
  const calculateTimeLeft = () => {
    const year = new Date().getFullYear()
    const difference = +new Date(`${year}-2-5`) - +new Date()
    let timeLeft: UpcomingMatchProps = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }
  const [times, setTimes] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimes(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout()
  }, [times])

  const numberFormat = (count?: number) => {
    if (count) {
      if (count.toString().length == 2) return count
      else return `0${count}`
    } else {
      return '00'
    }
  }

  return (
    <StyledUpcomingMatchWrapper>
      <StyledTitle>Upcoming Match</StyledTitle>
      <StyledTimeSection>
        <StyledCountContent>
          {numberFormat(times.days)}
          <Styledlabel>Days</Styledlabel>
        </StyledCountContent>
        <StyledCountContent>:</StyledCountContent>
        <StyledCountContent>
          {numberFormat(times.hours)}
          <Styledlabel>Hrs</Styledlabel>
        </StyledCountContent>
        <StyledCountContent>:</StyledCountContent>
        <StyledCountContent>
          {numberFormat(times.minutes)}
          <Styledlabel>Min</Styledlabel>
        </StyledCountContent>
        <StyledCountContent>:</StyledCountContent>
        <StyledCountContent>
          {numberFormat(times.seconds)}
          <Styledlabel>Sec</Styledlabel>
        </StyledCountContent>
      </StyledTimeSection>
      <StyledDescription>
        This data will be available once the match has been played
      </StyledDescription>
    </StyledUpcomingMatchWrapper>
  )
}

export default UpcomingMatch
