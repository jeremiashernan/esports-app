import useTranslation from 'next-translate/useTranslation'
import tw, { styled } from 'twin.macro'
import { PrizePool } from '../../../constants/events'
import { useFormatCurrency } from '../../../hooks/useFormaNumber'

type PrizePoolsProps = {
  prizePools: PrizePool
}

const StyledPrizePoolsWrapper = styled.div(() => [
  tw`flex justify-center items-center flex-col p-8 order-1
    bg-gradient-to-r from-pugb-gray-550 to-pugb-gray-650`,
  tw`md:order-2`,
  tw`lg:px-12`,
  tw`xl:px-20`
])
const StyledPrizePoolsContent = styled.div(() => [
  tw`flex justify-center items-center flex-col`,
  tw`first:mb-10`
])
const StylePrizePoolsTitle = styled.span(() => [
  tw`mb-2.5 text-center text-white uppercase font-bold text-xl`
])
const StyledPrizePoolsValue = styled.span(() => [
  tw`mb-2.5 text-pugb-red-300 text-center font-extrabold font-markpro text-6xl`
])
const StyledPrizePoolsDescription = styled.span(() => [
  tw`text-center text-white`
])

const PrizePools = ({ prizePools }: PrizePoolsProps) => {
  const { t } = useTranslation()

  return (
    <StyledPrizePoolsWrapper>
      <StyledPrizePoolsContent>
        <StylePrizePoolsTitle>
          {t('common:totalPrizePool')}
        </StylePrizePoolsTitle>
        <StyledPrizePoolsValue>
          ${useFormatCurrency(prizePools.total.value)}
        </StyledPrizePoolsValue>
        <StyledPrizePoolsDescription>
          {prizePools.total.description}
        </StyledPrizePoolsDescription>
      </StyledPrizePoolsContent>
      <StyledPrizePoolsContent>
        <StylePrizePoolsTitle>{t('common:bonusPrizing')}</StylePrizePoolsTitle>
        <StyledPrizePoolsValue>
          ${useFormatCurrency(+prizePools.bonus.value)}
        </StyledPrizePoolsValue>
        <StyledPrizePoolsDescription>
          {prizePools.bonus.description}
        </StyledPrizePoolsDescription>
      </StyledPrizePoolsContent>
    </StyledPrizePoolsWrapper>
  )
}

export default PrizePools
