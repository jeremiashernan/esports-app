import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'
import tw, { styled } from 'twin.macro'
import { externalLinks, menuLinks } from '../../constants/links'
import { HamburgerCloseIcon, HamburgerIcon } from '../elements/Icons'
import { NavLink, SwitchLanguage } from '../elements/Links'

type MobileStyleProps = {
  show?: boolean
}

const StyledNav = styled.nav(() => [tw`flex flex-1`])

const StyledDesktopWrapper = styled.div(() => [tw`flex w-full justify-between`])
const StyledMenuDesktop = styled.ul(() => [tw`hidden xl:flex`])
const StyledLinksDesktop = styled.ul(() => [tw`hidden xl:flex`])
const StyledItem = styled.li(() => [tw`flex mb-5 xl:mb-0`])

const StyledMenuMobile = styled.div(() => [tw`flex mx-3.5 xl:hidden`])
const StyledMenuHamburger = styled.button(() => [
  tw`flex items-center justify-center w-11 fill-current text-white text-3xl outline-none`
])

const StyledNavMobile = styled.div(({ show }: MobileStyleProps) => [
  tw`absolute flex flex-wrap w-full height[calc(100% - 65px)] top[65px]
  border-t-2 border-pugb-gray-600 z-10
  bg-gradient-to-r from-pugb-gray-700 to-pugb-gray-900
  transform -translate-x-full transition-transform`,
  tw`xl:hidden`,
  show && tw`translate-x-0`
])
const StyledSubMenuMobile = styled.ul(() => [
  tw`flex flex-col w-3/5 pt-7 border-r-2 border-pugb-gray-600`
])
const StyledSubLinksMobile = styled.ul(() => [tw`flex flex-col w-2/5 pt-7`])

const Menu = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <StyledNav>
        <StyledDesktopWrapper>
          <StyledMenuDesktop>
            {menuLinks.map(({ label, url, language }) => (
              <StyledItem key={label}>
                <NavLink
                  label={t(label)}
                  url={t(url)}
                  locale={language ? language[0] : undefined}
                />
              </StyledItem>
            ))}
          </StyledMenuDesktop>
          <StyledLinksDesktop>
            {externalLinks.map(({ label, url }) => (
              <StyledItem key={label}>
                <NavLink label={label} url={url} external />
              </StyledItem>
            ))}
            <SwitchLanguage />
          </StyledLinksDesktop>
        </StyledDesktopWrapper>
        <StyledMenuMobile>
          <StyledMenuHamburger onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HamburgerCloseIcon /> : <HamburgerIcon />}
          </StyledMenuHamburger>
        </StyledMenuMobile>
      </StyledNav>
      <StyledNavMobile show={isOpen}>
        <StyledSubMenuMobile>
          {menuLinks.map(({ label, url, language }) => (
            <StyledItem key={label}>
              <NavLink
                label={t(label)}
                url={t(url)}
                locale={language ? language[0] : undefined}
              />
            </StyledItem>
          ))}
        </StyledSubMenuMobile>
        <StyledSubLinksMobile>
          {externalLinks.map(({ label, url }) => (
            <StyledItem key={label}>
              <NavLink label={label} url={url} external />
            </StyledItem>
          ))}
          <SwitchLanguage />
        </StyledSubLinksMobile>
      </StyledNavMobile>
    </>
  )
}

export default Menu
