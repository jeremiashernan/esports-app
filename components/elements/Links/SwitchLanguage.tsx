import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import setLanguage from 'next-translate/setLanguage'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import tw, { css, styled } from 'twin.macro'
import { languages } from '../../../constants/languages'

type LinkProps = {
  active?: boolean
}

const StyledSwitch = styled.div(() => [
  tw`flex flex-col pl-8 justify-center
  xl:pl-4 xl:w-32 xl:border-l-2 xl:border-pugb-gray-600`
])
const StyledSwitchTitle = styled.p(() => [
  tw`mb-0.5 text-xs text-pugb-gray-300`
])
const StyledSwitchButton = styled.a(() => [
  tw`flex flex-col w-max justify-center relative text-white text-sm transition-colors cursor-pointer
  after:content after:w-full after:h-0.5 after:transition-colors
  hover:after:bg-pugb-red-300`
])

const StyledModalMask = styled.div(() => [
  tw`fixed flex items-center justify-center top-0 left-0 w-full h-full 
  bg-black bg-opacity-90 transform z-50`,
  css`
    &.enter {
      ${tw`opacity-0`}
    }
    &.enter-active {
      ${tw`opacity-100 transition-opacity duration-500`}
    }
    &.exit {
      ${tw`opacity-100`}
    }
    &.exit-active {
      ${tw`opacity-0 transition-opacity duration-500`}
    }
  `
])
const StyledModalWrapper = styled.div(() => [
  tw`flex flex-col w-full mx-5 p-8 bg-pugb-gray-800
  xl:w-1/4 xl:mx-0`
])

const StyledModalHeader = styled.div(() => [tw`flex justify-between mb-8`])
const StyledModalTitle = styled.h4(() => [
  tw`font-markpro uppercase font-extrabold text-xl text-white`
])
const StyleModalClose = styled.a(() => [
  tw`text-pugb-gray-300 text-xl transition-colors cursor-pointer select-none
  hover:text-white`
])

const StyledModalNav = styled.ul(() => [
  tw`grid gap-2 xl:grid-rows-3 xl:grid-flow-col`
])
const StyledModalNavItem = styled.li(() => [tw`flex`])
const StyledModalNavLink = styled.a(({ active }: LinkProps) => [
  tw`flex flex-col justify-center relative text-white cursor-pointer transition-colors
  after:content after:w-full after:h-0.5 after:transition-colors
  hover:after:bg-pugb-red-300`,
  active && tw`after:bg-pugb-red-300`
])

const splitName = (name: string) => {
  return name.replace('-', '<br>')
}

const SwitchLanguage = () => {
  const [showModal, setShowModal] = useState(false)
  const { t, lang } = useTranslation('common')
  const router = useRouter()

  const activeLanguage = languages.filter(({ initial }) => initial === lang)[0]

  const getLanguageLink = useCallback(
    (initial: string) => {
      let baseURL = '/'

      switch (initial) {
        case 'es':
          baseURL = `https://latam.pubgesports.com/es`
          break
        case 'pt':
          baseURL = `https://latam.pubgesports.com/pt`
          break
        default:
          baseURL = 'https://na.pubgesports.com/'
          break
      }

      return router.isReady ? `${baseURL}${router.pathname}` : ''
    },
    [router]
  )

  return (
    <>
      <StyledSwitch>
        <StyledSwitchTitle>{t('i18n.region')}</StyledSwitchTitle>
        <StyledSwitchButton
          onClick={() => setShowModal(true)}
          dangerouslySetInnerHTML={{
            __html: splitName(t(activeLanguage.label))
          }}
        />
      </StyledSwitch>
      <CSSTransition in={showModal} timeout={500} unmountOnExit>
        <StyledModalMask>
          <StyledModalWrapper>
            <StyledModalHeader>
              <StyledModalTitle>{t('i18n.select')}</StyledModalTitle>
              <StyleModalClose onClick={() => setShowModal(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </StyleModalClose>
            </StyledModalHeader>
            <StyledModalNav>
              {languages.map(({ initial, label }) => {
                return (
                  <StyledModalNavItem key={initial}>
                    <Link href={getLanguageLink(initial)} passHref replace>
                      <StyledModalNavLink
                        active={initial === lang}
                        onClick={async () => {
                          await setLanguage(initial)
                          setShowModal(false)
                        }}
                      >
                        {t(label)}
                      </StyledModalNavLink>
                    </Link>
                  </StyledModalNavItem>
                )
              })}
              <StyledModalNavItem>
                <StyledModalNavLink
                  href="https://pubgesports.com"
                  target="_blank"
                >
                  {t('i18n.languages.global')}
                </StyledModalNavLink>
              </StyledModalNavItem>
              <StyledModalNavItem>
                <StyledModalNavLink
                  href="https://pubgesports.eu"
                  target="_blank"
                >
                  {t('i18n.languages.europe')}
                </StyledModalNavLink>
              </StyledModalNavItem>
            </StyledModalNav>
          </StyledModalWrapper>
        </StyledModalMask>
      </CSSTransition>
    </>
  )
}

export default SwitchLanguage
