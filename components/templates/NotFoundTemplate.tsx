import useTranslation from 'next-translate/useTranslation'
import tw, { styled } from 'twin.macro'
import { NotFoundCard } from '../elements/Cards'

const StyledWrapper = styled.section(() => [
  tw`w-full h-screen background-image[url('/images/bg-404-mobile.jpg')] bg-center bg-cover`,
  tw`xl:background-image[url('/images/bg-404.jpg')]`
])

const NotFoundTemplate = () => {
  const { t } = useTranslation('404')

  return (
    <StyledWrapper>
      <NotFoundCard
        title={t('title')}
        text={t('text')}
        textButton={t('button')}
      />
    </StyledWrapper>
  )
}

export default NotFoundTemplate
