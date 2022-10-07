import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import tw, { styled } from 'twin.macro'
import { Tournament } from '../../../constants/events'
import { TournamentServivalIcons, TournamentWildIcon } from '../Icons'

type TournamentProps = {
  tournament: Tournament
}

const StyledWrapper = styled.div(() => [tw`relative shadow-lg`])

const StyledHeader = styled.div(() => [
  tw`flex px-10 py-4 items-center justify-start bg-pugb-gray-650`
])

const StyledTournamentHeaderTitle = styled.h4(() => [
  tw`ml-4 text-3xl text-white text-left font-markpro font-extrabold`
])

const StyledTournamentBody = styled.div(() => [
  tw`px-8 py-5 bg-gradient-to-r from-pugb-gray-200 to-white`,
  tw`lg:px-12`
])

const StyledTournamentBodyText = styled.p(() => [tw`w-full text-pugb-gray-650`])

const StyledTournamentBodyItem = styled.div(() => [
  tw`flex justify-start w-full pt-5`
])

const StyledIcon = styled.span(() => [
  tw`relative flex items-center justify-center w-4 text-pugb-red-300`
])

const StyledCustomIcon = styled.span(() => [
  tw`w-12 h-12 rounded-full bg-pugb-red-300
    flex justify-center items-center`
])

const StyleItemLabel = styled.span(() => [
  tw`ml-2 text-xl font-markpro font-extrabold text-pugb-gray-800`
])

const TournamentCard = ({ tournament }: TournamentProps) => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledCustomIcon>
          {tournament.type == 'survival' ? (
            <TournamentServivalIcons />
          ) : (
            <TournamentWildIcon />
          )}
        </StyledCustomIcon>
        <StyledTournamentHeaderTitle>
          {tournament.title}
        </StyledTournamentHeaderTitle>
      </StyledHeader>
      <StyledTournamentBody>
        <StyledTournamentBodyText>
          {tournament.description}
        </StyledTournamentBodyText>
        {tournament.items.map((item, index) => (
          <StyledTournamentBodyItem key={index}>
            <StyledIcon>
              <FontAwesomeIcon icon={faChevronRight} />
            </StyledIcon>
            <StyleItemLabel>{item}</StyleItemLabel>
          </StyledTournamentBodyItem>
        ))}
      </StyledTournamentBody>
    </StyledWrapper>
  )
}

export default TournamentCard
