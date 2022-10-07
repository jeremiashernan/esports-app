import useTranslation from 'next-translate/useTranslation'
import tw, { styled } from 'twin.macro'
import { EventInfos, ScheduleInfo } from '../../../elements/Events'
import PresentedBy from '../../PresentedBy'

const StyledFeaturedWrapper = styled.div(() => [
  tw`relative px-5 pb-20 bg-top bg-no-repeat bg-pugb-gray-50
    background-image[url('/images/bg-events-wrapper.jpg')]`,
  tw`xl:px-0 xl:pb-28`
])
const StyledFeatured = styled.div(() => [
  tw`relative container p-5 -top-20 -mb-20
    bg-gradient-to-r from-pugb-gray-700 to-pugb-gray-900 text-white`,
  tw`2xl:p-11 2xl:pt-6`
])
const StyledHeader = styled.div(() => [
  tw`flex flex-col mb-6`,
  tw`2xl:flex-row 2xl:items-center`
])
const StyledHeaderInfo = styled.div(() => [tw``])
const StyledHeaderInfoTitle = styled.h3(() => [
  tw`text-4xl font-markpro font-extrabold uppercase`
])
const StyledHeaderInfoText = styled.h3(() => [
  tw`text-xl font-bold text-pugb-red-300 uppercase`
])
const StyledHeaderEvents = styled.div(() => [
  tw`mt-4`,
  tw`2xl:mt-0 2xl:ml-auto`
])

const FeaturedMatch = () => {
  const { t } = useTranslation()

  return (
    <StyledFeaturedWrapper>
      <StyledFeatured>
        <StyledHeader>
          <StyledHeaderInfo>
            <StyledHeaderInfoTitle>
              {t('common:matchSchedule')}
            </StyledHeaderInfoTitle>
            <StyledHeaderInfoText>Group Stage</StyledHeaderInfoText>
          </StyledHeaderInfo>
          <StyledHeaderEvents>
            <EventInfos />
          </StyledHeaderEvents>
        </StyledHeader>
        <ScheduleInfo />
      </StyledFeatured>
      <PresentedBy />
    </StyledFeaturedWrapper>
  )
}

export default FeaturedMatch
