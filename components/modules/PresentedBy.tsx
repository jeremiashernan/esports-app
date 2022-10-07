import useTranslation from 'next-translate/useTranslation'
import tw, { styled } from 'twin.macro'
import brands from '../../constants/brands'
import { BlockHeading } from '../elements/Headings'

const StyledBrand = styled.div(() => [tw`container`])
const StyledBox = styled.div(() => [
  tw`w-11/12 mx-auto mt-9`,
  tw`xl:w-10/12 xl:mt-16`
])
const StyledLogos = styled.ul(() => [
  tw`grid grid-cols-2 gap-x-14 gap-y-3 mt-4`,
  tw`xl:w-1/3 xl:mx-auto xl:mt-8`
])
const StyledLogosItem = styled.li(() => [tw`flex items-center justify-center`])
const StyledLogosLink = styled.a(() => [
  tw`fill-current text-pugb-gray-300 transition-colors hover:text-pugb-red-300`
])

const PresentedBy = () => {
  const { t } = useTranslation()

  return (
    <StyledBrand>
      <StyledBox>
        <BlockHeading title={t('common:presentedBy')} />
        <StyledLogos>
          {brands.map(({ id, url, image }) => {
            const Logo = image

            return (
              <StyledLogosItem key={id}>
                <StyledLogosLink href={url} target="_blank">
                  <Logo />
                </StyledLogosLink>
              </StyledLogosItem>
            )
          })}
        </StyledLogos>
      </StyledBox>
    </StyledBrand>
  )
}

export default PresentedBy
