import useTranslation from 'next-translate/useTranslation'
import tw, { styled } from 'twin.macro'

type TitleProps = {
  category?: string
  search?: string
}

const StyledContent = styled.div(() => [
  tw`text-white font-markpro font-extrabold text-xl`,
  tw`xl:text-3xl`
])

const StyledContentCategory = styled.div(() => [tw`flex items-center`])
const StyledContentCategoryTitle = styled.h3(() => [])
const StyledContentCategoryName = styled.h3(() => [])
const StyledContentCategoryDivisor = styled.span(() => [
  tw`mx-4 h-0.5 w-3 bg-pugb-red-300`,
  tw`xl:w-6`
])

const StyledContentSearch = styled.h3(() => [tw``])

const NewsTitle = ({ category, search }: TitleProps) => {
  const { t } = useTranslation()

  return (
    <StyledContent>
      {category && (
        <StyledContentCategory>
          <StyledContentCategoryTitle>
            {t('common:category')}
          </StyledContentCategoryTitle>
          <StyledContentCategoryDivisor />
          <StyledContentCategoryName>{category}</StyledContentCategoryName>
        </StyledContentCategory>
      )}
      {search && (
        <StyledContentSearch>
          {t('common:searchResults', { result: search })}
        </StyledContentSearch>
      )}
    </StyledContent>
  )
}

export default NewsTitle
