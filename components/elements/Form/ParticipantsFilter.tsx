import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import countries from 'i18n-iso-countries'
import english from 'i18n-iso-countries/langs/en.json'
import spanish from 'i18n-iso-countries/langs/es.json'
import portuguese from 'i18n-iso-countries/langs/pt.json'
import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'
import tw, { styled } from 'twin.macro'
import { EventFilterParams } from '../../../services/interfaces/EventProps'
import Select from './Inputs/Select'

countries.registerLocale(english)
countries.registerLocale(spanish)
countries.registerLocale(portuguese)

const StyledWrapper = styled.div(() => [
  tw`flex flex-col-reverse mt-12`,
  tw`xl:flex-row`
])

const StyledFilters = styled.div(() => [
  tw`grid grid-cols-2 gap-3`,
  tw`lg:grid-cols-3`,
  tw`xl:grid-cols-5 xl:w-3/4`,
  tw`2xl:width[70%]`
])

const StyledClearButton = styled.button(() => [
  tw` flex items-center pl-5 w-full h-12 bg-pugb-red-300 transition-colors
    hover:bg-pugb-red-200`,
  tw`xl:h-14`
])
const StyledClearButtonText = styled.span(() => [
  tw`ml-2 font-markpro text-white`
])

const ParticipantsFilter = () => {
  const { t } = useTranslation()
  const [params, setParams] = useState<EventFilterParams>({})

  return (
    <StyledWrapper>
      <StyledFilters>
        <Select
          options={[]}
          placeholder={t('forms:participantsFilters.allRounds')}
          onMultiInput={(value) =>
            setParams({
              ...params,
              filters: { ...params.filters, year: value }
            })
          }
          clear={params.filters?.year ? false : true}
        />
        <Select
          options={[]}
          placeholder={t('forms:participantsFilters.allLobbies')}
          onInput={(value) =>
            setParams({
              ...params,
              filters: { ...params.filters, platform: value }
            })
          }
          clear={params.filters?.platform ? false : true}
        />
        {params.filters && (
          <StyledClearButton
            onClick={() => setParams({ ...params, filters: undefined })}
          >
            <FontAwesomeIcon icon={faTimes} color="white" />
            <StyledClearButtonText>
              {t('forms:eventsFilters.clearFilters')}
            </StyledClearButtonText>
          </StyledClearButton>
        )}
      </StyledFilters>
    </StyledWrapper>
  )
}

export default ParticipantsFilter
