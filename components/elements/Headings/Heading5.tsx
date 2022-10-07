import tw, { styled } from 'twin.macro'

type HeadingProps = {
  title: string
}

const StyledHeading5 = styled.h5(() => [
  tw`font-markpro font-extrabold text-pugb-gray-800 font-size[1.5rem] line-height[1.8125rem]`,
  tw`xl:font-size[1.875rem] xl:line-height[2.125rem]`
])

const Heading5 = ({ title }: HeadingProps) => (
  <StyledHeading5>{title}</StyledHeading5>
)

export default Heading5
