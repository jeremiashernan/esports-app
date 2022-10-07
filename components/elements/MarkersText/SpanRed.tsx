import tw, { styled } from 'twin.macro'

type SpanProps = {
  children: React.ReactNode
}

const StyledSpanRed = styled.span(() => [tw`text-pugb-red-300 mr-1`])

const SpanRed = ({ children }: SpanProps) => (
  <StyledSpanRed>{children}</StyledSpanRed>
)

export default SpanRed
