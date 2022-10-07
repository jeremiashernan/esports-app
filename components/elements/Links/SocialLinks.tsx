import tw, { styled } from 'twin.macro'
import { ArrowRight } from '../Icons'

type LinkProps = {
  url: string
  label: string
}

const StyledText = styled.a(() => [
  tw`fill-current font-markpro font-extrabold
    text-lg text-pugb-red-300 transition-colors
    hover:text-pugb-gray-800`,
  tw`xl:text-xl`
])
const StyledTextArrow = styled.span(() => [tw`inline-block ml-2`])

const SocialLinks = ({ url, label }: LinkProps) => {
  return (
    <StyledText href={url} target="_blank">
      {label}
      <StyledTextArrow>
        <ArrowRight width={20} height={12} />
      </StyledTextArrow>
    </StyledText>
  )
}

export default SocialLinks
