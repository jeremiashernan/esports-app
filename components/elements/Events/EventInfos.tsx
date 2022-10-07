import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { ReactCountryFlag } from 'react-country-flag'
import { MdOutlineGroup } from 'react-icons/md'
import tw, { css, styled } from 'twin.macro'
import organizerLogo from '../../../public/images/events/tmp-organizer.png'

const StyledGrid = styled.div(() => [
  tw`grid grid-cols-2`,
  tw`sm:grid-cols-3`,
  tw`lg:grid-cols-6`
])

const StyledItem = styled.div(() => [
  tw`flex flex-col items-center min-width[145px] min-height[120px] bg-pugb-gray-800
    border border-pugb-gray-500 font-markpro`
])
const StyledItemTitle = styled.h3(() => [
  tw`mt-3 text-pugb-gray-300 text-sm font-medium uppercase`
])
const StyledItemInfo = styled.div(() => [
  tw`flex flex-1 justify-center flex-col items-center font-extrabold`
])
const StyledItemInfoText = styled.p(() => [])
const StyledItemInfoHighlighted = styled.p(() => [tw`text-3xl`])
const StyledItemWithIcon = styled.div(() => [
  tw`flex items-center`,
  css`
    & p {
      ${tw`ml-1`}
    }
  `
])

const StyledLogo = styled(Image)`
  ${tw`filter brightness-0 invert`}
`

const EventInfos = () => {
  const { t } = useTranslation()

  return (
    <StyledGrid>
      <StyledItem>
        <StyledItemTitle>{t('tables:events.eventType')}</StyledItemTitle>
        <StyledItemInfo>
          <MdOutlineGroup size={32} />
          <StyledItemInfoText>Community</StyledItemInfoText>
        </StyledItemInfo>
      </StyledItem>
      <StyledItem>
        <StyledItemTitle>{t('tables:events.organizer')}</StyledItemTitle>
        <StyledItemInfo>
          <StyledItemWithIcon>
            <StyledLogo src={organizerLogo} alt="" />
            <StyledItemInfoText>ESL</StyledItemInfoText>
          </StyledItemWithIcon>
        </StyledItemInfo>
      </StyledItem>
      <StyledItem>
        <StyledItemTitle>{t('tables:events.teams')}</StyledItemTitle>
        <StyledItemInfo>
          <StyledItemInfoHighlighted>26</StyledItemInfoHighlighted>
        </StyledItemInfo>
      </StyledItem>
      <StyledItem>
        <StyledItemTitle>{t('tables:events.gameMode')}</StyledItemTitle>
        <StyledItemInfo>
          <StyledItemInfoText>Squad FPP</StyledItemInfoText>
        </StyledItemInfo>
      </StyledItem>
      <StyledItem>
        <StyledItemTitle>{t('tables:events.prize')}</StyledItemTitle>
        <StyledItemInfo>
          <StyledItemInfoHighlighted>$450K</StyledItemInfoHighlighted>
        </StyledItemInfo>
      </StyledItem>
      <StyledItem>
        <StyledItemTitle>{t('tables:events.region')}</StyledItemTitle>
        <StyledItemInfo>
          <ReactCountryFlag countryCode="US" svg style={{ fontSize: '2rem' }} />
          <StyledItemInfoText>USA</StyledItemInfoText>
        </StyledItemInfo>
      </StyledItem>
    </StyledGrid>
  )
}

export default EventInfos
