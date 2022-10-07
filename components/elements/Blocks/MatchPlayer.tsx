import Image from 'next/image'
import tw, { styled } from 'twin.macro'
import MatchPlayerBarImg from '../../../public/images/events/tmp-match-bar.png'
import MatchPlayerLeftImg from '../../../public/images/events/tmp-match-left.png'
import MatchPlayerRightImg from '../../../public/images/events/tmp-match-right.png'
import MatchPlayerImg from '../../../public/images/events/tmp-match.png'

const StyledMatchPlayerWrapper = styled.div(() => [
  tw`flex justify-center items-stretch`
])
const StyledSideBar = styled.div(() => [tw`block pt-1 px-1`])
const StyledMainContent = styled.div(() => [tw`flex flex-col`])

const MatchPlayer = () => {
  return (
    <StyledMatchPlayerWrapper>
      <StyledSideBar>
        <Image
          src={MatchPlayerLeftImg}
          alt=""
          objectFit="cover"
          objectPosition="top"
        />
      </StyledSideBar>
      <StyledMainContent>
        <Image
          src={MatchPlayerImg}
          alt=""
          objectFit="cover"
          objectPosition="top"
        />
        <Image
          src={MatchPlayerBarImg}
          alt=""
          objectFit="cover"
          objectPosition="top"
        />
      </StyledMainContent>
      <StyledSideBar>
        <Image
          src={MatchPlayerRightImg}
          alt=""
          objectFit="cover"
          objectPosition="top"
        />
      </StyledSideBar>
    </StyledMatchPlayerWrapper>
  )
}

export default MatchPlayer
