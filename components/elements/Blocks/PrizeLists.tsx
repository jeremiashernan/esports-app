import tw, { styled } from 'twin.macro'
import { Prizes } from '../../../constants/events'
import { useFormatCurrency } from '../../../hooks/useFormaNumber'

type PrizeListsProps = {
  prizeLists: Prizes
}

type HighlightProps = {
  isGradient: boolean
  isHighlight: boolean
}

type GradientProps = {
  isGradient: boolean
}

type PrizeListsContentProps = {
  value: number
  position: number
  highlight: number
}

const StyledPrizeListsWrapper = styled.div(() => [
  tw`flex justify-center items-center flex-col w-full order-2`,
  tw`md:order-1`,
  tw`lg:flex-row`,
  tw`md:w-max`
])
const StyledContent = styled.div(() => [
  tw`flex justify-center items-center flex-col w-full`
])
const StyledPrizeListsContent = styled.div(() => [
  tw`flex justify-center items-center flex-nowrap w-full`,
  tw`height[4.375rem]`
])
const StyledPrizeListsPosition = styled.div(
  ({ isGradient, isHighlight }: HighlightProps) => [
    tw`flex items-center justify-center h-full width[4.375rem] bg-pugb-gray-100`,
    tw`text-black font-markpro font-extrabold font-size[1.875rem] line-height[2.125rem]`,
    tw`md:font-size[1.25rem] md:leading-5`,
    tw`2xl:font-size[1.875rem] 2xl:line-height[2.125rem]`,
    !isHighlight &&
      isGradient &&
      tw`bg-gradient-to-r from-[#eaeaea] to-[#e8e8e8]`,
    isHighlight && isGradient && tw`bg-pugb-red-450 text-white`,
    isHighlight && !isGradient && tw`bg-pugb-red-300 text-white`
  ]
)
const StyledPrizeListsValue = styled.div(({ isGradient }: GradientProps) => [
  tw`flex items-center h-full w-full px-24
    bg-gradient-to-r from-white to-pugb-gray-250`,
  tw`text-black text-left font-markpro font-extrabold font-size[1.875rem] line-height[2.125rem]`,
  tw`md:font-size[1.25rem] md:leading-5 md:px-12`,
  tw`md:width[20rem]`,
  tw`lg:width[15rem]`,
  tw`2xl:font-size[1.875rem] 2xl:line-height[2.125rem]`,
  tw`2xl:px-24 2xl:width[25rem]`,
  isGradient && tw`bg-gradient-to-r from-pugb-gray-250 to-white`
])

const PrizeListsContent = ({
  value,
  position,
  highlight
}: PrizeListsContentProps) => (
  <StyledPrizeListsContent>
    <StyledPrizeListsPosition
      isGradient={position % 2 == 0}
      isHighlight={position <= highlight}
    >
      {position}
    </StyledPrizeListsPosition>
    <StyledPrizeListsValue isGradient={position % 2 == 0}>
      ${useFormatCurrency(value)}
    </StyledPrizeListsValue>
  </StyledPrizeListsContent>
)

const PrizeLists = ({ prizeLists }: PrizeListsProps) => {
  return (
    <StyledPrizeListsWrapper>
      {prizeLists.prizes.length < 8 ? (
        <StyledContent>
          {prizeLists.prizes.map((prize, index) => (
            <PrizeListsContent
              value={prize.value}
              position={prize.position}
              highlight={prizeLists.highlight}
              key={index}
            />
          ))}
        </StyledContent>
      ) : (
        <StyledPrizeListsWrapper>
          <StyledContent>
            {prizeLists.prizes.slice(0, 8).map((prize, index) => (
              <PrizeListsContent
                value={prize.value}
                position={prize.position}
                highlight={prizeLists.highlight}
                key={index}
              />
            ))}
          </StyledContent>
          <StyledContent>
            {prizeLists.prizes.slice(8).map((prize, index) => (
              <PrizeListsContent
                value={prize.value}
                position={prize.position}
                highlight={prizeLists.highlight}
                key={index}
              />
            ))}
          </StyledContent>
        </StyledPrizeListsWrapper>
      )}
    </StyledPrizeListsWrapper>
  )
}

export default PrizeLists
