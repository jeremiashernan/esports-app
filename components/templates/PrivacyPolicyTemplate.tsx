import useTranslation from 'next-translate/useTranslation'
import { arrOfPoint } from '../../constants/arrOfPoint'
import {
  NumberedTitleTextBlock,
  StyledBackgroundTitle
} from '../elements/Blocks'
import { ContentContainer } from '../elements/Containers'
import { Heading2 } from '../elements/Headings'
import OrderedList from '../elements/OrderedList'
import { StyledContentPaddingsWrapper } from '../foundations'

const PrivacyPolicyTemplate = () => {
  const { t } = useTranslation()

  return (
    <>
      <StyledBackgroundTitle>
        <ContentContainer>
          <Heading2 title={t('privacyPolicy:privacyPolicyTitle')} />
        </ContentContainer>
      </StyledBackgroundTitle>
      <StyledContentPaddingsWrapper>
        <ContentContainer>
          <NumberedTitleTextBlock
            num={1}
            title={t('privacyPolicy:firstBlock.title')}
            text={t('privacyPolicy:firstBlock.text')}
          />
          <NumberedTitleTextBlock
            num={2}
            title={t('privacyPolicy:secondBlock.title')}
            text={t('privacyPolicy:secondBlock.text')}
          />
          <NumberedTitleTextBlock
            num={3}
            title={t('privacyPolicy:thirdBlock.title')}
            text={t('privacyPolicy:thirdBlock.text')}
          />
          <OrderedList arrOfPoint={arrOfPoint} />
        </ContentContainer>
      </StyledContentPaddingsWrapper>
    </>
  )
}
export default PrivacyPolicyTemplate
