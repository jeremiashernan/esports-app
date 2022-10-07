import tw, { styled } from 'twin.macro'
import { MainButton } from '../Buttons'
import { WarningIcon } from '../Icons'

type NotFoundCardProps = {
  title: string
  text: string
  textButton: string
}

const StyledContainer = styled.div(() => [
  tw`absolute w-full top-1/2 transform -translate-y-1/2 pl-6 pr-6`,
  tw`xl:width[39.875rem] xl:left-1/2 xl:top-1/2 xl:transform xl:-translate-y-1/2
  xl:-translate-x-1/2`
])

const StyledRedCenterHeader = styled.div(() => [
  tw`flex height[2.75rem] justify-center bg-pugb-red-300`,
  tw`xl:height[4.25rem]`
])

const StyledWrapper = styled.div(() => [tw`relative shadow-lg`])

const StyledModalHeaderIcon = styled.span(() => [
  tw`hidden`,
  tw`xl:block xl:margin-right[1.125rem] xl:mt-auto xl:mb-auto`
])

const StyledModalHeaderTitle = styled.h4(() => [
  tw`mt-auto mb-auto font-markpro font-size[1.375rem] leading-7 font-extrabold text-white`,
  tw`xl:text-3xl`
])

const StyledModalBody = styled.div(() => [
  tw`flex flex-wrap justify-center h-full padding-top[1.1875rem] pl-5 pr-5 padding-bottom[2.125rem] bg-gradient-to-r
  from-pugb-gray-200 to-white`,
  tw`xl:padding-bottom[2.5625rem] xl:pt-7`
])

const StyledModalBodyText = styled.p(() => [
  tw`w-full margin-bottom[1.625rem] text-pugb-gray-650 text-center line-height[1.625rem]
  font-size[1.187rem]`,
  tw`xl:margin-bottom[2.75rem] xl:font-size[1.375rem] xl:leading-8 xl:width[28.25rem]`
])

const NotFoundCard = ({ title, text, textButton }: NotFoundCardProps) => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledRedCenterHeader>
          <StyledModalHeaderIcon>
            <WarningIcon />
          </StyledModalHeaderIcon>
          <StyledModalHeaderTitle>{title}</StyledModalHeaderTitle>
        </StyledRedCenterHeader>
        <StyledModalBody>
          <StyledModalBodyText>{text}</StyledModalBodyText>
          <MainButton label={textButton} url="/" />
        </StyledModalBody>
      </StyledWrapper>
    </StyledContainer>
  )
}

export default NotFoundCard
