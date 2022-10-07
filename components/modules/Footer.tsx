import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import tw, { styled } from 'twin.macro'
import { menuLinks, pageLinks, socialLinks } from '../../constants/links'
import { IconButton } from '../elements/Buttons'
import { esrbRatingIconDataUrl, LogoIcon } from '../elements/Icons'
import Newsletter from './Newsletter'

const StyledFooter = styled.footer(() => [])

const StyledFooterTop = styled.div(() => [
  tw`relative flex flex-col`,
  tw`xl:flex-row xl:height[311px]`
])

const StyledNewsletterWrapper = styled.div(() => [
  tw`relative flex items-center justify-end px-5 py-11
  bg-cover bg-right-top background-image[url('/images/bg-newsletter-mobile.jpg')]`,
  tw`xl:width[62.5%] xl:pr-16 xl:bg-center
  xl:background-image[url('/images/bg-newsletter.jpg')]`
])

const StyledSocialWrapper = styled.div(() => [
  tw`relative flex flex-col items-center justify-center py-9
  bg-gradient-to-r from-pugb-gray-700 to-pugb-gray-900
  border-l-4 border-pugb-red-300`,
  tw`xl:items-start xl:width[37.5%] xl:py-0 xl:pl-16 xl:border-l-8`
])
const StyledSocialTitle = styled.h3(() => [
  tw`mb-4 text-white text-2xl font-markpro font-extrabold`,
  tw`xl:font-size[2.625rem]`
])
const StyledSocialLinks = styled.ul(() => [
  tw`flex flex-wrap width[240px] justify-center`,
  tw`xl:grid xl:grid-cols-4 xl:gap-2 xl:w-max`
])
const StyledSocialLinksItem = styled.li(() => [tw`margin[3px] xl:m-0`])

const StyledFooterNav = styled.div(() => [
  tw`container flex flex-wrap items-start px-5 py-7`,
  tw`xl:px-0 xl:py-12`
])
const StyledFooterNavMenu = styled.ul(() => [
  tw`grid gap-6 w-1/2`,
  tw`xl:grid-rows-3 xl:grid-flow-col`
])

const StyledFooterNavPages = styled.ul(() => [
  tw`grid gap-6 w-1/2`,
  tw`xl:w-1/4`
])

const StyledFooterImage = styled.div(() => [
  tw`flex items-center justify-between mt-16 w-full`,
  tw`xl:justify-end xl:w-1/4 xl:mt-0`
])

const StyledFooterNavItem = styled.li(() => [])
const StyledFooterNavLink = styled.a(() => [
  tw`transition-colors font-size[0.9375rem] hover:text-pugb-red-300`,
  tw`xl:text-lg`
])

const StyledLogo = styled.div(() => [tw`width[171px] xl:mr-5`])

const StyledFooterCopy = styled.div(() => [
  tw`relative px-2 py-3 bg-pugb-gray-700 text-xs  text-pugb-gray-400 text-center`,
  tw`xl:text-base`
])
const StyledFooterCopyText = styled.p(() => [])

const StyledOtButton = styled.button(() => [
  tw`outline-none mt-3`,
  tw`xl:absolute xl:bottom-0 xl:left-3.5 xl:mt-0`
])

const EsrbRatingWrapper = styled.div(() => [
  tw`flex items-center height[3.75rem] width[7.875rem]`
])

const EsrbRatingbody = styled.div(() => [
  tw`h-full w-full border-t-2 border-r-2 border-b-2 border-black
  padding-left[0.625rem] padding-top[1rem] padding-bottom[1rem]
  font-size[0.75rem] line-height[0.875rem]`
])

const EsrbRatingImage = styled.img(() => [tw`height[3.75rem]`])

const Footer = () => {
  const { t, lang } = useTranslation()

  return (
    <StyledFooter>
      <StyledFooterTop>
        <StyledNewsletterWrapper>
          <Newsletter />
        </StyledNewsletterWrapper>
        <StyledSocialWrapper>
          <StyledSocialTitle>{t('common:getConnected')}</StyledSocialTitle>
          <StyledSocialLinks>
            {socialLinks.map(({ label, url, icon }) => (
              <StyledSocialLinksItem key={label}>
                <IconButton
                  blank={true}
                  icon={icon}
                  url={t(url)}
                  title={label}
                />
              </StyledSocialLinksItem>
            ))}
          </StyledSocialLinks>
        </StyledSocialWrapper>
      </StyledFooterTop>
      <StyledFooterNav>
        <StyledFooterNavMenu>
          {menuLinks.map(({ label, url }) => (
            <StyledFooterNavItem key={label}>
              <Link href={t(url)} passHref>
                <StyledFooterNavLink>{t(label)}</StyledFooterNavLink>
              </Link>
            </StyledFooterNavItem>
          ))}
        </StyledFooterNavMenu>
        <StyledFooterNavPages>
          {pageLinks.map(({ label, url, language }) => {
            if (language && language.includes(lang)) {
              return (
                <StyledFooterNavItem key={label}>
                  <Link href={t(url)} passHref>
                    <StyledFooterNavLink target="_blank">
                      {t(label)}
                    </StyledFooterNavLink>
                  </Link>
                </StyledFooterNavItem>
              )
            }
          })}
        </StyledFooterNavPages>
        <StyledFooterImage>
          <StyledLogo>
            <LogoIcon fill="#171719" />
          </StyledLogo>
          <EsrbRatingWrapper>
            <EsrbRatingImage src={esrbRatingIconDataUrl} />
            <EsrbRatingbody>Violence Blood</EsrbRatingbody>
          </EsrbRatingWrapper>
        </StyledFooterImage>
      </StyledFooterNav>
      <StyledFooterCopy>
        <StyledFooterCopyText>{t('common:copyright')}</StyledFooterCopyText>
        <StyledOtButton id="ot-sdk-btn" className="ot-sdk-show-settings">
          Cookie Settings
        </StyledOtButton>
      </StyledFooterCopy>
    </StyledFooter>
  )
}

export default Footer
