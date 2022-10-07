import tw, { styled } from 'twin.macro'

type StyledOrderedListItemProps = {
  number: number
  point: string
}

type OrderedListProps = {
  arrOfPoint: string[]
}

const StyledOrderedList = styled.ul(() => [
  tw`padding-bottom[1.875rem]`,
  tw`xl:padding-bottom[2.375rem]`
])

const StyledOrderedListItem = styled.li(() => [
  tw`flex mt-1 font-size[1.16875rem] font-markpro font-extrabold `,
  tw`xl:font-size[1.375rem]`
])

const StyledOrderedListItemMarker = styled.div(() => [
  tw`flex justify-center margin-right[0.875rem] min-width[1.625rem] height[1.625rem] text-white bg-pugb-red-300 `,
  tw`xl:min-width[1.9375rem] xl:height[1.9375rem] xl:margin-right[1.1875rem]`
])

const StyledOrderedListItemPoint = styled.div(() => [
  tw`text-pugb-gray-800 font-size[1.25rem] line-height[1.625rem]`,
  tw`xl:font-size[1.375rem] xl:line-height[1.75rem]`
])

const StyledOrderedListItemComponent = ({
  number,
  point
}: StyledOrderedListItemProps) => (
  <StyledOrderedListItem>
    <StyledOrderedListItemMarker>{number}</StyledOrderedListItemMarker>
    <StyledOrderedListItemPoint>{point}</StyledOrderedListItemPoint>
  </StyledOrderedListItem>
)

const OrderedList = ({ arrOfPoint }: OrderedListProps) => (
  <StyledOrderedList>
    {arrOfPoint &&
      arrOfPoint.map((p, index) => (
        <StyledOrderedListItemComponent
          key={index}
          number={index + 1}
          point={p}
        />
      ))}
  </StyledOrderedList>
)
export default OrderedList
