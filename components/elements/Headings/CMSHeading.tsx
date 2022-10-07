import tw, { styled } from 'twin.macro'

type CMSProps = {
  title: string
  children?: React.ReactNode
}

const StyledHeadingBackground = styled.section(() => [
  tw`w-full py-8 bg-cover background-image[url('/images/bg-hero-wrapper.jpg')]`,
  tw`xl:pt-28 xl:pb-14`
])
const StyledHeadingWrapper = styled.div(() => [
  tw`container px-8 xl:width[887px] xl:px-0`
])
const StyledHeadingTitle = styled.h1(() => [
  tw`font-markpro text-center font-extrabold text-pugb-gray-800 font-size[1.75rem] leading-9`,
  tw`xl:font-size[3.875rem] xl:line-height[4.4rem]`
])

const CMSHeading = ({ title, children }: CMSProps) => {
  return (
    <>
      <StyledHeadingBackground>
        <StyledHeadingWrapper>
          <StyledHeadingTitle>{title}</StyledHeadingTitle>
        </StyledHeadingWrapper>
        {children}
      </StyledHeadingBackground>
    </>
  )
}

export default CMSHeading
