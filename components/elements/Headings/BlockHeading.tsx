import tw, { styled } from 'twin.macro'

type BlockHeadingProps = {
  title: string
}

const StyledBlockHeading = styled.h3(() => [tw`flex justify-between items-end`])
const StyledBlockHeadindDivide = styled.hr(() => [
  tw`w-4/12 pb-1.5 border-black border-opacity-20`,
  tw`xl:w-5/12`
])
const StyledBlockHeadingTitle = styled.span(() => [
  tw`leading-none text-center text-pugb-gray-650`,
  tw`xl:text-lg xl:tracking-widest xl:uppercase`
])

const BlockHeading = ({ title }: BlockHeadingProps) => (
  <StyledBlockHeading>
    <StyledBlockHeadindDivide />
    <StyledBlockHeadingTitle>{title}</StyledBlockHeadingTitle>
    <StyledBlockHeadindDivide />
  </StyledBlockHeading>
)

export default BlockHeading
