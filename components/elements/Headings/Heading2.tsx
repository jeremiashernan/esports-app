import tw, { styled } from 'twin.macro'

type HeadingProps = {
  title: string
}

const StyledHeading2 = styled.h2(() => [
  tw`font-markpro text-center font-extrabold text-pugb-gray-800 font-size[1.5rem] line-height[1.8125rem]`,
  tw`xl:font-size[3.875rem] xl:line-height[4.375rem]`
])

const Heading2 = ({ title }: HeadingProps) => (
  <StyledHeading2>{title}</StyledHeading2>
)

export default Heading2
