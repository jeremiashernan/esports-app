import tw, { css, styled } from 'twin.macro'
import { Heading5 } from '../Headings'
import RegularParagraph from '../Paragraphs/RegularParagraph'

type NumberedTitleTextBlockCustomColorProps = {
  num: string
  title: string
  text: string
  id: string
  numColor?: string
}

type StyledSpanColorProps = {
  textColor?: string
}

const StiledTitleWrapper = styled.div(() => [
  tw`flex font-markpro font-extrabold font-size[1.5rem] line-height[1.8125rem] `,
  tw`xl:font-size[1.875rem] xl:line-height[2.125rem] `
])

const StyledNumberedTitleTextBlockCustomColorWrapper = styled.div(() => [
  tw`pb-8`,
  tw`xl:padding-bottom[2.8125rem]`
])

const StyledSpanColor = styled.span(({ textColor }: StyledSpanColorProps) => [
  tw`mr-1 text-pugb-red-300`,
  textColor &&
    css`
      color: ${textColor};
    `
])

const NumberedTitleTextBlockCustomColor = ({
  num,
  title,
  text,
  id,
  numColor
}: NumberedTitleTextBlockCustomColorProps) => (
  <StyledNumberedTitleTextBlockCustomColorWrapper>
    <StiledTitleWrapper id={id}>
      <StyledSpanColor textColor={numColor}>{num}.</StyledSpanColor>
      <Heading5 title={title} />
    </StiledTitleWrapper>
    <RegularParagraph>{text}</RegularParagraph>
  </StyledNumberedTitleTextBlockCustomColorWrapper>
)

export default NumberedTitleTextBlockCustomColor
