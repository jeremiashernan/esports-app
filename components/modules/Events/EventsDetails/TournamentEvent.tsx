import useTranslation from 'next-translate/useTranslation'
import tw, { styled } from 'twin.macro'
import { Tournaments } from '../../../../constants/events'
import { TournamentCard } from '../../../elements/Cards'
import { ArrowPath } from '../../../elements/Icons'

type TournamentEventProps = {
  event: Tournaments
}

const StyledTournamentWrapper = styled.div(() => [
  tw`flex flex-col justify-center bg-right-bottom bg-no-repeat  bg-pugb-gray-50
    background-image[url('/images/events/tmp-tournament.png')]`,
  tw`md:min-height[650px]`
])

const StyledContent = styled.div(() => [tw`container px-5`, tw`xl:px-0`])
const StyleContentWidth = styled.div(() => [
  tw`w-full`,
  tw`xl:w-4/5`,
  tw`2xl:w-2/3`
])
const StyledContentTitle = styled.h2(() => [
  tw`mb-7 text-4xl text-pugb-gray-800 text-center font-markpro font-extrabold`,
  tw`xl:text-5xl`
])
const StyledTournamentContent = styled.div(() => [
  tw`grid gap-8`,
  tw`lg:grid-cols-2`
])
const StyledTournamentRule = styled.a(() => [
  tw`flex items-center w-max mt-8 mx-auto cursor-pointer fill-current
    font-markpro font-extrabold text-pugb-red-300 transition-colors 
    hover:text-pugb-red-200`
])
const StyledTournamentRuleTitle = styled.p(() => [tw``])
const StyledIcon = styled.div(() => [tw`ml-1`])

const TournamentEvent = ({ event }: TournamentEventProps) => {
  const { t } = useTranslation()

  return (
    <StyledTournamentWrapper>
      <StyledContent>
        <StyleContentWidth>
          <StyledContentTitle>
            {t('common:tournamentFormat')}
          </StyledContentTitle>
          <StyledTournamentContent>
            {event.tournaments.map((tournament, index) => (
              <TournamentCard tournament={tournament} key={index} />
            ))}
          </StyledTournamentContent>
          <StyledTournamentRule>
            <StyledTournamentRuleTitle>
              {t('common:tournamentRules')}
            </StyledTournamentRuleTitle>
            <StyledIcon>
              <ArrowPath />
            </StyledIcon>
          </StyledTournamentRule>
        </StyleContentWidth>
      </StyledContent>
    </StyledTournamentWrapper>
  )
}

export default TournamentEvent
