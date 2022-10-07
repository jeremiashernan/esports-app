import Image from 'next/image'
import tw, { styled } from 'twin.macro'
import { BroadcastTalent } from '../../../constants/events'

type TalentCardProps = {
  talent: BroadcastTalent
}

const StyledTalentCardWrapper = styled.div(() => [
  tw`flex flex-row items-center mt-8 pr-8`
])
const StyledAvatarContent = styled.div(() => [tw`w-12 mr-4 rounded-full`])
const StyledTalentName = styled.span(() => [
  tw`text-black text-center font-markpro font-extrabold 
    font-size[1.375rem] leading-7`
])

const TeamCard = ({ talent }: TalentCardProps) => {
  return (
    <StyledTalentCardWrapper>
      <StyledAvatarContent>
        <Image src={talent.avatar} alt={talent.name} />
      </StyledAvatarContent>
      <StyledTalentName>{talent.name}</StyledTalentName>
    </StyledTalentCardWrapper>
  )
}

export default TeamCard
