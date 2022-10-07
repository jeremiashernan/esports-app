import tw, { styled } from 'twin.macro'
import { Heading5 } from '../Headings'
import { SpanRed } from '../MarkersText'
import RegularParagraph from '../Paragraphs/RegularParagraph'

type NumberedTitleTextBlockProps = {
  num: string | number
  title: string
  text: string
}

const StiledTitleWrapper = styled.div(() => [
  tw`flex font-markpro font-extrabold font-size[1.5rem] line-height[1.8125rem] `,
  tw`xl:font-size[1.875rem] xl:line-height[2.125rem] `
])

const StyledNumberedTitleTextBlockWrapper = styled.div(() => [
  tw`padding-bottom[2.6875rem]`
])

const NumberedTitleTextBlock = ({
  num,
  title,
  text
}: NumberedTitleTextBlockProps) => (
  <StyledNumberedTitleTextBlockWrapper>
    <StiledTitleWrapper>
      <SpanRed>{num}.</SpanRed>
      <Heading5 title={title} />
    </StiledTitleWrapper>
    <RegularParagraph>{text}</RegularParagraph>
  </StyledNumberedTitleTextBlockWrapper>
)

export default NumberedTitleTextBlock
