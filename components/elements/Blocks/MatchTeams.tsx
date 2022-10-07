import Image from 'next/image'
import tw, { css, styled } from 'twin.macro'
import { Team } from '../../../constants/events'
import { MatchMember } from '../Blocks'

type MatchTeamsProps = {
  teams: Team[]
}

type ColorProps = {
  color: string
}

type StateProps = {
  state: boolean
}

const StyledMatchTeamsWrapper = styled.div(() => [tw`flex w-full flex-col`])
const StyledTeamContent = styled.div(() => [tw`w-full`])
const StyledTeamHeader = styled.div(() => [
  tw`w-full flex bg-pugb-gray-600 h-8 justify-between`
])
const StyledPositionContent = styled.div(({ color }: ColorProps) => [
  tw`h-full w-10 flex items-center justify-center`,
  css`
    background-color: #${color};
  `
])
const StyledPositionLabel = styled.span(() => [
  tw`font-markpro font-extrabold text-base text-center text-white
    flex items-center`
])
const StyleLogoContent = styled.div(() => [
  tw`mx-2 w-6 flex items-center h-full`
])
const StyledStatusContent = styled.div(() => [
  tw`flex items-center justify-end`
])
const StyledStatusItem = styled.div(({ state }: StateProps) => [
  tw`w-10 h-full border border-white/30`,
  state && tw`bg-pugb-red-300`
])
const StyledTeamInfoContent = styled.div(() => [tw`flex h-full`])

const MatchTeams = ({ teams }: MatchTeamsProps) => {
  const positionLabel = (position: number) => {
    let label = ''
    switch (position) {
      case 1:
        label = '1st'
        break
      case 2:
        label = '2nd'
        break
      case 3:
        label = '3rd'
        break
      default:
        label = position.toString() + 'th'
    }
    return label
  }
  return (
    <StyledMatchTeamsWrapper>
      {teams.map((team, index) => (
        <StyledTeamContent key={index}>
          <StyledTeamHeader>
            <StyledTeamInfoContent>
              <StyledPositionContent color={team.color}>
                <StyledPositionLabel>
                  {positionLabel(team.position)}
                </StyledPositionLabel>
              </StyledPositionContent>
              <StyleLogoContent>
                <Image
                  src={team.logo}
                  alt=""
                  objectFit="contain"
                  objectPosition="top"
                />
              </StyleLogoContent>
              <StyledPositionLabel>{team.title}</StyledPositionLabel>
            </StyledTeamInfoContent>
            <StyledStatusContent>
              <StyledStatusItem state={team.status1} />
              <StyledStatusItem state={team.status2} />
            </StyledStatusContent>
          </StyledTeamHeader>
          {team.members.map((member, ind) => (
            <MatchMember member={member} key={ind} />
          ))}
        </StyledTeamContent>
      ))}
    </StyledMatchTeamsWrapper>
  )
}

export default MatchTeams
