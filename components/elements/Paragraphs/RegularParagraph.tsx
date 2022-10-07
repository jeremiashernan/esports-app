import tw, { styled } from 'twin.macro'

type ParagraphProps = {
  children: React.ReactNode
}

const StyledRegularParagraph = styled.p(() => [
  tw`font-lato text-pugb-gray-800 font-size[1.1875rem] line-height[1.625rem]`,
  tw`xl:text-pugb-gray-650 xl:font-size[1.25rem] xl:line-height[1.875rem]`
])

const RegularParagraph = ({ children }: ParagraphProps) => (
  <StyledRegularParagraph>{children}</StyledRegularParagraph>
)

export default RegularParagraph
