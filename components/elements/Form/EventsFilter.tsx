import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import countries from 'i18n-iso-countries'
import english from 'i18n-iso-countries/langs/en.json'
import spanish from 'i18n-iso-countries/langs/es.json'
import portuguese from 'i18n-iso-countries/langs/pt.json'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'
import {
  EventFilter,
  EventFilterParams
} from '../../../services/interfaces/EventProps'
import Select from './Inputs/Select'

countries.registerLocale(english)
countries.registerLocale(spanish)
countries.registerLocale(portuguese)

type EventFilterProps = {
  filters: EventFilter[]
  onFilter: (params: EventFilterParams) => void
}

type OptionsProps = {
  label: string
  value: string
}

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

const StyledSearch = styled.div(() => [
  tw`flex w-full mb-3 h-12 border border-pugb-gray-350 bg-white`,
  tw`xl:w-max xl:h-14 xl:mb-0 xl:ml-auto`
])
const StyledSearchInput = styled.input(() => [
  tw`w-full h-full pl-5 text-pugb-gray-300 bg-transparent focus:outline-none`
])
const StyledSearchButton = styled.button(() => [
  tw`text-pugb-red-300 text-lg px-3 cursor-default`,
  tw`xl:px-5`
])

const getFilterById = (id: string, filters: EventFilter[]) => {
  const filtered = filters.find((filter) => filter.id === id)
  return filtered ? setFilterOption(filtered.values, id === 'region') : []
}

const setFilterOption = (values: string[], isRegion: boolean) => {
  const result: OptionsProps[] = []
  values.map((value) =>
    result.push({
      label:
        isRegion && value.length <= 3 ? countries.alpha2ToAlpha3(value) : value,
      value
    })
  )
  return result
}

const EventsFilter = ({ filters, onFilter }: EventFilterProps) => {
  const { t } = useTranslation()
  const [params, setParams] = useState<EventFilterParams>({})

  useEffect(() => {
    onFilter(params)
  }, [onFilter, params])

  return (
    <StyledWrapper>
      <StyledFilters>
        <Select
          isMulti
          options={getFilterById('year', filters)}
          placeholder={t('forms:eventsFilters.year')}
          onMultiInput={(value) => {
            if (value.length !== 0) {
              setParams({
                ...params,
                filters: {
                  ...params.filters,
                  year: value
                }
              })
            } else {
              delete params.filters?.year
              if (params.filters && Object.keys(params.filters).length === 0) {
                params.filters = undefined
                setParams({
                  ...params
                })
              }
            }
          }}
          clear={params.filters?.year?.length ? false : true}
        />
        <Select
          options={getFilterById('platform', filters)}
          placeholder={t('forms:eventsFilters.platform')}
          onInput={(value) =>
            setParams({
              ...params,
              filters: { ...params.filters, platform: value }
            })
          }
          clear={params.filters?.platform ? false : true}
        />
        <Select
          options={getFilterById('event_type', filters)}
          placeholder={t('forms:eventsFilters.eventType')}
          onInput={(value) =>
            setParams({
              ...params,
              filters: { ...params.filters, event_type: value }
            })
          }
          clear={params.filters?.event_type ? false : true}
        />
        <Select
          options={getFilterById('region', filters)}
          placeholder={t('forms:eventsFilters.region')}
          onInput={(value) =>
            setParams({
              ...params,
              filters: { ...params.filters, region: value }
            })
          }
          clear={params.filters?.region ? false : true}
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
      <StyledSearch>
        <StyledSearchInput
          placeholder={t('common:searchEvents')}
          onChange={(e) =>
            setParams({ ...params, search: e.target.value || '' })
          }
        />
        <StyledSearchButton>
          <FontAwesomeIcon icon={faSearch} />
        </StyledSearchButton>
      </StyledSearch>
    </StyledWrapper>
  )
}

export default EventsFilter
