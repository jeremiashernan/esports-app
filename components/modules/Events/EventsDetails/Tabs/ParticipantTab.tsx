import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import tw, { styled } from 'twin.macro'
import winnerImg from '../../../../../public/images/events/details/tmp-winner.png'
import { MainButton } from '../../../../elements/Buttons'
import { ParticipantsFilter } from '../../../../elements/Form'
import { ArrowPath } from '../../../../elements/Icons'

const StyledContent = styled.div(() => [tw``])

const StyledGrid = styled.div(() => [
  tw`grid mt-7 border border-pugb-gray-250`,
  tw`sm:grid-cols-2`,
  tw`md:grid-cols-3`,
  tw`xl:grid-cols-4`
])

const StyledGridItem = styled.div(() => [
  tw`flex flex-col items-center justify-center p-4 border border-pugb-gray-250
    bg-gradient-to-r from-white to-pugb-gray-250`
])

const StyledGridItemInfo = styled.div(() => [tw`flex justify-between w-full`])
const StyledGridItemInfoSeed = styled.div(() => [tw``])
const StyledGridItemInfoGrade = styled.div(() => [tw`font-bold`])

const StyledGridItemTitle = styled.p(() => [
  tw`mt-4 text-xl text-pugb-gray-800 font-markpro font-extrabold`
])
const StyledGridItemLink = styled.a(() => [
  tw`flex items-center text-pugb-red-300 transition-colors
  font-markpro font-extrabold cursor-pointer fill-current
  hover:text-pugb-red-200`
])
const StyledIcon = styled.div(() => [tw`ml-1`])

const StyledLoadMore = styled.div(() => [
  tw`flex justify-center mt-7`,
  tw`xl:mt-14`
])

const ParticipantTab = () => {
  const { t } = useTranslation()

  return (
    <StyledContent>
      <ParticipantsFilter />
      <StyledGrid>
        {Array.from(Array(16).keys()).map((index) => (
          <StyledGridItem key={index}>
            <StyledGridItemInfo>
              <StyledGridItemInfoSeed>Seed 1</StyledGridItemInfoSeed>
              <StyledGridItemInfoGrade>A</StyledGridItemInfoGrade>
            </StyledGridItemInfo>
            <Image src={winnerImg} alt="" />
            <StyledGridItemTitle>Cloud 9 Esports</StyledGridItemTitle>
            <StyledGridItemLink>
              NA Group Stage
              <StyledIcon>
                <ArrowPath />
              </StyledIcon>
            </StyledGridItemLink>
          </StyledGridItem>
        ))}
      </StyledGrid>
      <StyledLoadMore>
        <MainButton label={t('common:loadMore')} icon={faChevronDown} />
      </StyledLoadMore>
    </StyledContent>
  )
}

export default ParticipantTab
