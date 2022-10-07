import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import tw, { styled } from 'twin.macro'
import { Talents } from '../../../../constants/events'

type BroadcastTalentProps = {
  talents: Talents
}

const StyledBroadcast = styled.div(() => [
  tw`py-14 bg-cover bg-no-repeat bg-top
  background-image[url('/images/bg-events-wrapper.jpg')]`
])
const StyledBroadcastWrapper = styled.div(() => [
  tw`container px-5`,
  tw`xl:px-0`
])
const StyledBroadcastInside = styled.div(() => [
  tw`w-full shadow-2xl bg-gradient-to-r from-white to-pugb-gray-250`,
  tw`xl:w-5/6 xl:mx-auto`
])

const StyledContent = styled.div(() => [
  tw`flex justify-around flex-wrap px-14 py-10`
])

const StyledHeader = styled.div(() => [
  tw`flex justify-center py-3 bg-pugb-red-300`
])
const StyledHeaderTitle = styled.h2(() => [
  tw`text-white text-center font-markpro font-extrabold text-3xl`
])

const StyledTalentCardWrapper = styled.div(() => [
  tw`flex flex-row items-center mt-8 pr-8`
])
const StyledAvatarContent = styled.div(() => [tw`w-12 mr-4 rounded-full`])
const StyledTalentName = styled.span(() => [
  tw`text-black text-center font-markpro font-extrabold 
    font-size[1.375rem] leading-7`
])

const BroadcastTalent = ({ talents: { talents } }: BroadcastTalentProps) => {
  const { t } = useTranslation()

  return (
    <StyledBroadcast>
      <StyledBroadcastWrapper>
        <StyledBroadcastInside>
          <StyledHeader>
            <StyledHeaderTitle>{t('common:broadcastTalent')}</StyledHeaderTitle>
          </StyledHeader>
          <StyledContent>
            {talents.map((talent, index) => (
              <StyledTalentCardWrapper key={index}>
                <StyledAvatarContent>
                  <Image src={talent.avatar} alt={talent.name} />
                </StyledAvatarContent>
                <StyledTalentName>{talent.name}</StyledTalentName>
              </StyledTalentCardWrapper>
            ))}
          </StyledContent>
        </StyledBroadcastInside>
      </StyledBroadcastWrapper>
    </StyledBroadcast>
  )
}

export default BroadcastTalent
