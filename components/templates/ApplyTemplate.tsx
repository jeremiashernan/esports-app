import useTranslation from 'next-translate/useTranslation'
import tw, { styled } from 'twin.macro'
import { arrOfPoint } from '../../constants/arrOfPoint'
import {
  NumberedTitleTextBlock,
  StyledBackgroundTitle
} from '../elements/Blocks'
import { MainButton } from '../elements/Buttons'
import { ContentContainer } from '../elements/Containers'
import { Heading2 } from '../elements/Headings'
import OrderedList from '../elements/OrderedList'
import { StyledContentPaddingsWrapper } from '../foundations'

const StyledFormHeaderTitle = styled.h4(() => [
  tw`mt-auto mb-auto font-markpro font-size[1.375rem] leading-7 font-extrabold text-white`,
  tw`xl:font-size[1.875rem] xl:line-height[2.125rem]`
])
const StyledRedCenterHeader = styled.div(() => [
  tw`flex height[2.75rem] justify-center bg-pugb-red-300`,
  tw`xl:height[4.25rem]`
])

const StyledFormContainer = styled.div(() => [
  tw`flex justify-between flex-row flex-wrap padding-top[2.625rem] padding-bottom[3.4375rem] padding-right[1.875rem]
  padding-left[1.875rem] bg-gradient-to-r from-pugb-gray-200 to-[#ffffff] min-width[100%]`,
  tw`xl:w-auto xl:padding-right[3.75rem] xl:padding-left[3.75rem]`
])

const StyledFlexSide = styled.div(() => [
  tw`flex flex-col width[100%]`,
  tw`xl:w-auto`
])

const StyledWrapperMainButton = styled.div(() => [
  tw` flex w-full justify-center`
])

const StyledFormInput = styled.input(() => [
  tw`min-width[100%] py-3 px-5 margin-bottom[1.875rem] border border-pugb-gray-100 text-pugb-gray-650 text-lg
  placeholder-pugb-gray-300 focus:outline-none`,
  tw`xl:width[23.125rem] height[3.8125rem] xl:py-4`
])

const ApplyTemplate = () => {
  const { t } = useTranslation()

  return (
    <>
      <StyledBackgroundTitle>
        <ContentContainer>
          <Heading2 title={t('apply:applyTitle')} />
        </ContentContainer>
      </StyledBackgroundTitle>
      <StyledContentPaddingsWrapper>
        <ContentContainer>
          <NumberedTitleTextBlock
            num={1}
            title={t('apply:firstNumberedBlock.title')}
            text={t('apply:firstNumberedBlock.text')}
          />
          <OrderedList arrOfPoint={arrOfPoint.slice(0, 3)} />
          <NumberedTitleTextBlock
            num={2}
            title={t('apply:secondNumberedBlock.title')}
            text={t('apply:secondNumberedBlock.text')}
          />
          <StyledRedCenterHeader>
            <StyledFormHeaderTitle>
              {t('forms:applyForm.applyFormTitle')}
            </StyledFormHeaderTitle>
          </StyledRedCenterHeader>
          <StyledFormContainer>
            <StyledFlexSide>
              <StyledFormInput
                placeholder={t('forms:applyForm.yourFirstName')}
              />
              <StyledFormInput placeholder={t('forms:applyForm.eventName')} />
              <StyledFormInput placeholder={t('forms:applyForm.organizer')} />
              <StyledFormInput placeholder={t('forms:applyForm.gameMode')} />
              <StyledFormInput placeholder={t('forms:applyForm.location')} />
              <StyledFormInput placeholder={t('forms:applyForm.startDate')} />
            </StyledFlexSide>
            <StyledFlexSide>
              <StyledFormInput
                placeholder={t('forms:applyForm.emailAddress')}
              />
              <StyledFormInput placeholder={t('forms:applyForm.eventType')} />
              <StyledFormInput
                placeholder={t('forms:applyForm.numberOfTeams')}
              />
              <StyledFormInput
                placeholder={t('forms:applyForm.totalPrizeAmount')}
              />
              <StyledFormInput placeholder={t('forms:applyForm.region')} />
              <StyledFormInput placeholder={t('forms:applyForm.endDate')} />
            </StyledFlexSide>
            <StyledWrapperMainButton>
              <MainButton label={t('forms:submit')} />
            </StyledWrapperMainButton>
          </StyledFormContainer>
        </ContentContainer>
      </StyledContentPaddingsWrapper>
    </>
  )
}

export default ApplyTemplate
