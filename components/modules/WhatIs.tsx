import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import tw, { styled } from 'twin.macro'
import whatIsImg from '../../public/images/bg-whatis.jpg'

const StyledWrapper = styled.section(() => [tw`relative overflow-hidden`])

const StyledBackground = styled.div(() => [tw`absolute w-full h-full`])
const StyledBackgroundImage = styled.div(() => [tw`relative h-full`])
const StyledBackgroundMask = styled.div(() => [
  tw`absolute w-full h-full top-10 bg-gradient-to-b from-transparent to-pugb-gray-900`,
  tw`xl:top-28`
])
const StyledBackgroundMaskRadial = styled.div(() => [
  tw`absolute top-1/2 left-1/2 w-full h-screen min-width[1200px] min-height[1200px]
  transform -translate-x-1/2 -translate-y-1/2 opacity-90
  background-image[radial-gradient(50% 50% at 50% 50%, #000 0%, rgba(0, 0, 0, 0) 100%)]`
])

const StyledContainer = styled.div(() => [
  tw`relative container flex flex-col items-center py-12 px-5 top-0`,
  tw`xl:py-28`
])
const StyledTitle = styled.h2(() => [
  tw`mb-8 text-center text-white text-3xl leading-none font-markpro font-extrabold`,
  tw`xl:font-size[3.875rem]`
])
const StyledText = styled.p(() => [
  tw`mb-5 text-center text-white`,
  tw`xl:w-1/2 xl:text-lg`
])

const WhatIs = () => {
  const { t } = useTranslation()

  const paragraphs = t('common:about.text').split('\n')

  return (
    <StyledWrapper>
      <StyledBackground>
        <StyledBackgroundImage>
          <Image src={whatIsImg} alt="" layout="fill" objectFit="cover" />
        </StyledBackgroundImage>
        <StyledBackgroundMask />
        <StyledBackgroundMaskRadial />
      </StyledBackground>
      <StyledContainer>
        <StyledTitle>{t('common:about.title')}</StyledTitle>
        {paragraphs.map((paragraph, index) => {
          if (paragraph) return <StyledText key={index}>{paragraph}</StyledText>
        })}
        {/* <MainButton
          label={t('links:menuLinks.about.label')}
          url={t('links:menuLinks.about.url')}
        /> */}
      </StyledContainer>
    </StyledWrapper>
  )
}

export default WhatIs
