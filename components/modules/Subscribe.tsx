import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import tw, { styled } from 'twin.macro'
import subscribeImg from '../../public/images/subscribe.jpg'
import twitchImg from '../../public/images/twitch-purple.svg'
import { ArrowSubscribeIcon, LogoIcon } from '../elements/Icons'

const StyledSubscribe = styled.div(() => [
  tw`container flex flex-col`,
  tw`xl:flex-row xl:height[450px]`
])

const StyledBackgroundImage = styled.div(() => [
  tw`relative w-full height[134px]`,
  tw`xl:width[57.9%] xl:h-full`
])

const StyledContent = styled.a(() => [
  tw`relative flex flex-col justify-between w-full p-7
  background-image[url('/images/bg-subscribe.jpg')] bg-cover bg-center
  border-left-width[6px] border-pugb-red-300 fill-current text-pugb-red-300
  transition-colors hover:text-pugb-red-200`,
  tw`xl:width[42.1%] xl:py-16 xl:px-14`
])
const StyledContentHeading = styled.div(() => [tw`mb-7 xl:mb-0`])
const StyledContentHeadingTitle = styled.h3(() => [
  tw`font-markpro font-extrabold text-3xl text-white leading-none`,
  tw`xl:uppercase xl:font-size[4.5rem]`
])
const StyledContentTwitch = styled.div(() => [])
const StyledYoutubeImage = styled.div(() => [
  tw`width[127px] mb-1`,
  tw`xl:width[190px] xl:mb-3`
])
const StyledContentTwitchLink = styled.p(() => [
  tw`font-markpro font-bold font-size[0.625rem] text-white uppercase`,
  tw`xl:text-lg`
])
const StyledContentTwitchLinkSpan = styled.span(() => [tw`text-pugb-gray-300`])
const StyledContentTwitchArrow = styled.div(() => [
  tw`absolute width[58px] bottom-0 right-0`,
  tw`xl:width[103px]`
])

const StyledLogo = styled.div(() => [
  tw`fill-current w-28 mb-2`,
  tw`xl:width[311px] xl:mb-6`
])

const Subscribe = () => {
  const { t } = useTranslation()

  const twitchLink = t('links:socialLinks.twitch')
  const arrLink = twitchLink.split('/')
  const channel = arrLink[arrLink.length - 1]

  return (
    <StyledSubscribe>
      <StyledBackgroundImage>
        <Image
          src={subscribeImg}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </StyledBackgroundImage>
      <Link href={twitchLink} passHref>
        <StyledContent target="_blank">
          <StyledContentHeading>
            <StyledLogo>
              <LogoIcon fill="#cecece" />
            </StyledLogo>
            <StyledContentHeadingTitle>
              {t('common:follow')}
            </StyledContentHeadingTitle>
          </StyledContentHeading>
          <StyledContentTwitch>
            <StyledYoutubeImage>
              <Image src={twitchImg} alt="" layout="responsive" />
            </StyledYoutubeImage>
            <StyledContentTwitchLink>
              <StyledContentTwitchLinkSpan>
                twitch.tv
              </StyledContentTwitchLinkSpan>
              /{channel}
            </StyledContentTwitchLink>
            <StyledContentTwitchArrow>
              <ArrowSubscribeIcon />
            </StyledContentTwitchArrow>
          </StyledContentTwitch>
        </StyledContent>
      </Link>
    </StyledSubscribe>
  )
}

export default Subscribe
