import useTranslation from 'next-translate/useTranslation'
import tw, { styled } from 'twin.macro'
import { PrizePool, Prizes } from '../../../../constants/events'
import { PrizeLists, PrizePools } from '../../../elements/Blocks'

type PrizingBreakdownProps = {
  prizePools: PrizePool
  prizeLists: Prizes
}

const StyledPrizingBreakdownWrapper = styled.div(() => [
  tw`py-16 bg-no-repeat bg-top bg-cover
    background-image[url('/images/bg-completed-events.jpg')]`
])
const StyledContent = styled.div(() => [tw`container px-5`, tw`xl:px-0`])
const StyledPrizingContent = styled.div(() => [
  tw`flex justify-center items-stretch flex-col`,
  tw`md:flex-row`
])
const StyledContentTitle = styled.h2(() => [
  tw`mb-7 text-4xl text-white text-center font-markpro font-extrabold`,
  tw`xl:text-5xl xl:mb-10`
])

const PrizingBreakdown = ({
  prizePools,
  prizeLists
}: PrizingBreakdownProps) => {
  const { t } = useTranslation()

  return (
    <StyledPrizingBreakdownWrapper>
      <StyledContent>
        <StyledContentTitle>{t('common:prizingBreakdown')}</StyledContentTitle>
        <StyledPrizingContent>
          <PrizeLists prizeLists={prizeLists} />
          <PrizePools prizePools={prizePools} />
        </StyledPrizingContent>
      </StyledContent>
    </StyledPrizingBreakdownWrapper>
  )
}

export default PrizingBreakdown
