import {
  faChevronDown,
  faSort,
  faSortDown,
  faSortUp
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import countries from 'i18n-iso-countries'
import english from 'i18n-iso-countries/langs/en.json'
import spanish from 'i18n-iso-countries/langs/es.json'
import portuguese from 'i18n-iso-countries/langs/pt.json'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useCallback, useRef, useState } from 'react'
import ReactCountryFlag from 'react-country-flag'
import { MdLanguage, MdOutlineGroup, MdOutlineGroupWork } from 'react-icons/md'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import tw, { css, styled } from 'twin.macro'
import { useFetch } from '../../../hooks/useFetch'
import { useFormatCurrency } from '../../../hooks/useFormaNumber'
import { useFormatRange } from '../../../hooks/useFormatDate'
import {
  Event,
  EventFilter,
  EventFilterParams
} from '../../../services/interfaces/EventProps'
import { MainButton } from '../../elements/Buttons'
import { EventsFilter } from '../../elements/Form'
import { ArrowLongRight } from '../../elements/Icons'

countries.registerLocale(english)
countries.registerLocale(spanish)
countries.registerLocale(portuguese)

type CompletedEventsProps = {
  filters: EventFilter[]
}

type EventItemProps = {
  event: Event
}

type EmptyRowProps = {
  message: string
}

type ImageStyleProps = {
  size: number
}

const StyledCompletedEvents = styled.div(() => [
  tw`mt-16 py-16 bg-no-repeat bg-top bg-black
    background-image[url('/images/bg-completed-events.jpg')]`,
  tw`xl:py-28`
])
const StyledContent = styled.div(() => [tw`container px-5`, tw`xl:px-0`])

const StyledHeader = styled.h2(() => [
  tw`font-markpro font-extrabold text-white text-3xl text-center`,
  tw`lg:text-5xl`
])

const StyledTableWrapper = styled.div(() => [tw`overflow-x-auto mt-6`])
const StyledTable = styled.table(() => [
  tw`w-max`,
  tw`xl:w-full`,
  tw`table-fixed`
])
const StyledTableHead = styled.thead(() => [])
const StyledTableHeadRow = styled.tr(() => [
  tw`bg-gradient-to-r from-pugb-gray-700 to-pugb-gray-900`
])
const StyledTableHeadTitleCol = styled.th(() => [
  tw`py-1.5 px-4 text-white text-left font-normal w-72`
])

const StyledTableHeadColOrgType = styled.th(() => [
  tw`py-1.5 px-4 text-white text-left font-normal w-24`
])

const StyledTableHeadCol = styled.th(() => [
  tw`py-1.5 px-4 text-white text-left font-normal w-[7rem]`
])

const StyledTableDateCol = styled.th(() => [
  tw`py-1.5 px-4 text-white text-left font-normal w-[8rem]`
])

const StyledTableBody = styled.tbody(() => [
  tw`font-markpro text-pugb-gray-650 h-24`
])
const StyledTableBodyRow = styled.tr(() => [
  tw`bg-gradient-to-r
  even:from-pugb-gray-250 even:to-pugb-gray-150
  odd:from-pugb-gray-50 odd:to-white`
])
const StyledTableBodyCol = styled.td(() => [tw`py-3 px-4`])
const StyledTableWithIcon = styled.div(() => [
  tw`flex items-center`,
  css`
    & > div,
    & > img {
      margin-right: 0.5rem !important;
    }
  `
])
const StyledTableWithIconImage = styled.div(({ size }: ImageStyleProps) => [
  tw`relative flex items-center`,
  size &&
    css`
      width: ${size}px;
      height: ${size}px;
      min-width: ${size}px;
    `
])
const StyledDetailsButton = styled.a(() => [
  tw`flex items-center justify-center w-max
    text-pugb-red-300 transition-colors fill-current
    hover:text-pugb-red-200`
])
const StyledDetailsButtonText = styled.span(() => [tw`mr-3 font-markpro`])

const StyledEventDetailsTitle = styled.span(() => [tw`text-pugb-gray-800`])

const StyledDetailsActions = styled.div(() => [
  tw`grid grid-cols-3 gap-1 w-max text-pugb-gray-300`
])

const StyledLoadMore = styled.div(() => [
  tw`flex justify-center mt-7`,
  tw`xl:mt-14`
])

const getImage = (image: string) => {
  return `/images${image}`
}

const EmptyRow = ({ message }: EmptyRowProps) => (
  <StyledTableBodyRow>
    <StyledTableBodyCol colSpan={9} style={{ height: '16rem' }}>
      <StyledContent style={{ position: 'absolute', textAlign: 'center' }}>
        {message}
      </StyledContent>
    </StyledTableBodyCol>
  </StyledTableBodyRow>
)

const EventItemSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#969699" highlightColor="#858587">
      <StyledTableBodyRow>
        <StyledTableBodyCol>
          <StyledTableWithIcon>
            <Skeleton circle width={50} height={50} />
            <Skeleton
              style={{ marginLeft: '0.5rem' }}
              width={197}
              height={30}
            />
          </StyledTableWithIcon>
        </StyledTableBodyCol>
        <StyledTableBodyCol>
          <StyledDetailsActions>
            <Skeleton circle width={22} height={22} />
            <Skeleton circle width={22} height={22} />
            <Skeleton circle width={22} height={22} />
          </StyledDetailsActions>
        </StyledTableBodyCol>
        <StyledTableBodyCol>
          <StyledTableWithIcon>
            <Skeleton circle width={30} height={30} />
            <Skeleton style={{ marginLeft: '0.5rem' }} width={34} height={20} />
          </StyledTableWithIcon>
        </StyledTableBodyCol>
        <StyledTableBodyCol>
          <Skeleton width={100} height={20} />
        </StyledTableBodyCol>
        <StyledTableBodyCol>
          <Skeleton width={100} height={20} />
        </StyledTableBodyCol>
        <StyledTableBodyCol>
          <StyledTableWithIcon>
            <Skeleton width={30} height={30} />
            <Skeleton style={{ marginLeft: '0.5rem' }} width={34} height={20} />
          </StyledTableWithIcon>
        </StyledTableBodyCol>
        <StyledTableBodyCol>
          <StyledTableWithIcon>
            <Skeleton circle width={30} height={30} />
            <Skeleton style={{ marginLeft: '0.5rem' }} width={34} height={20} />
          </StyledTableWithIcon>
        </StyledTableBodyCol>
        <StyledTableBodyCol>
          <StyledTableWithIcon>
            <Skeleton circle width={30} height={30} />
            <Skeleton style={{ marginLeft: '0.5rem' }} width={34} height={20} />
          </StyledTableWithIcon>
        </StyledTableBodyCol>
        <StyledTableBodyCol>
          <Skeleton width={80} height={20} />
        </StyledTableBodyCol>
      </StyledTableBodyRow>
    </SkeletonTheme>
  )
}

const EventItem = ({ event }: EventItemProps) => {
  const { t, lang } = useTranslation()
  const countryNames = countries.getNames(lang)

  return (
    <StyledTableBodyRow>
      <StyledTableBodyCol>
        <StyledTableWithIcon>
          <StyledTableWithIconImage size={50}>
            <img src={getImage(event.tournament_logo)} alt="" />
          </StyledTableWithIconImage>
          <StyledEventDetailsTitle>{event.title}</StyledEventDetailsTitle>
        </StyledTableWithIcon>
      </StyledTableBodyCol>
      <StyledTableBodyCol tw="hidden">
        <StyledDetailsActions>
          <MdLanguage size="22" />
          <MdOutlineGroupWork size="22" />
          <MdOutlineGroup size="22" />
        </StyledDetailsActions>
      </StyledTableBodyCol>
      <StyledTableBodyCol>
        <StyledTableWithIcon>
          <StyledTableWithIconImage size={30}>
            <img src={getImage(event.organizer_logo)} alt="" />
          </StyledTableWithIconImage>
          {event.organizer}
        </StyledTableWithIcon>
      </StyledTableBodyCol>
      <StyledTableBodyCol>
        {useFormatRange(event.start_date, event.end_date)}
      </StyledTableBodyCol>
      <StyledTableBodyCol>
        {useFormatCurrency(+event.prize_amount, event.prize_currency)}
      </StyledTableBodyCol>
      <StyledTableBodyCol>
        <StyledTableWithIcon>
          {event.region.length > 3 ? (
            event.region
          ) : (
            <>
              <ReactCountryFlag
                countryCode={event.region}
                svg
                title={countryNames[event.region]}
                style={{ fontSize: '1.5rem' }}
              />
              {countries.alpha2ToAlpha3(event.region)}
            </>
          )}
        </StyledTableWithIcon>
      </StyledTableBodyCol>
      <StyledTableBodyCol>
        <StyledTableWithIcon>
          <StyledTableWithIconImage size={30}>
            <img src={getImage(event.winner_logo)} alt="" />
          </StyledTableWithIconImage>
          {event.winner_title}
        </StyledTableWithIcon>
      </StyledTableBodyCol>
      <StyledTableBodyCol>
        <StyledTableWithIcon>
          <StyledTableWithIconImage size={30}>
            <img src={getImage(event.runner_up_logo)} alt="" />
          </StyledTableWithIconImage>
          {event.runner_up_title}
        </StyledTableWithIcon>
      </StyledTableBodyCol>
      <StyledTableBodyCol tw="hidden">
        <Link href={`/events/${event.tournamentId}`} passHref>
          <StyledDetailsButton>
            <StyledDetailsButtonText>
              {t('forms:buttons.details')}
            </StyledDetailsButtonText>
            <ArrowLongRight />
          </StyledDetailsButton>
        </Link>
      </StyledTableBodyCol>
    </StyledTableBodyRow>
  )
}

const CompletedEvents = ({ filters }: CompletedEventsProps) => {
  const { t } = useTranslation()
  const [params, setParams] = useState<EventFilterParams>({ limit: 12 })
  const [limit, setLimit] = useState(12)
  const isShowButton = useRef(true)

  const { data } = useFetch(
    `/api/events${params ? `?params=${JSON.stringify(params)}` : ''}`
  )

  const handleFilter = useCallback((filterParams: EventFilterParams) => {
    isShowButton.current = true

    if (Object.keys(filterParams).length) {
      setParams({ ...filterParams, limit: 12 })
    }
  }, [])

  const loadMore = useCallback(() => {
    const newLimit = limit + 12
    setParams({ ...params, limit: newLimit })
    setLimit(newLimit)
    isShowButton.current = newLimit < data.count
  }, [params, limit, data])

  //Apply sorting.
  const applySorting = useCallback(
    (e) => {
      const orderBy = e.currentTarget.getAttribute('data-sort')
      setParams({
        ...params,
        sort: {
          by: orderBy,
          order:
            params.sort?.by === orderBy ? (params.sort?.order || 1) * -1 : 1
        }
      })
    },
    [setParams, params]
  )

  const sortIcon = (
    <FontAwesomeIcon
      icon={params.sort?.order === 1 ? faSortUp : faSortDown}
      color="white"
    />
  )
  const noSortIcon = <FontAwesomeIcon icon={faSort} color="white" />
  return (
    <StyledCompletedEvents>
      <StyledContent>
        <StyledHeader>{t('common:completedEvents')}</StyledHeader>
        <EventsFilter filters={filters} onFilter={handleFilter} />
        <StyledTableWrapper>
          <StyledTable>
            <StyledTableHead>
              <StyledTableHeadRow>
                <StyledTableHeadTitleCol
                  onClick={applySorting}
                  data-sort="title"
                >
                  {t('tables:events.event')}&nbsp;
                  {params.sort?.by === 'title' ? sortIcon : noSortIcon}
                </StyledTableHeadTitleCol>
                <StyledTableHeadColOrgType tw="hidden"></StyledTableHeadColOrgType>
                <StyledTableHeadColOrgType>
                  {t('tables:events.organizer')}
                </StyledTableHeadColOrgType>
                <StyledTableDateCol
                  onClick={applySorting}
                  data-sort="start_date"
                  tw="w-1/6"
                >
                  {t('tables:events.date')}&nbsp;
                  {params.sort?.by === 'start_date' ? sortIcon : noSortIcon}
                </StyledTableDateCol>
                <StyledTableDateCol
                  onClick={applySorting}
                  data-sort="prize_amount"
                >
                  {t('tables:events.prize')}&nbsp;
                  {params.sort?.by === 'prize_amount' ? sortIcon : noSortIcon}
                </StyledTableDateCol>
                <StyledTableHeadCol>
                  {t('tables:events.region')}
                </StyledTableHeadCol>
                <StyledTableHeadCol>
                  {t('tables:events.winner')}
                </StyledTableHeadCol>
                <StyledTableHeadCol>
                  {t('tables:events.runnerUp')}
                </StyledTableHeadCol>
                <StyledTableHeadCol tw="hidden"></StyledTableHeadCol>
              </StyledTableHeadRow>
            </StyledTableHead>
            <StyledTableBody>
              {data?.events?.length === 0 && (
                <EmptyRow message={t('tables:events.noResults')} />
              )}
              {data
                ? data.events.map((event: Event, index: number) => (
                    <EventItem key={index} event={event} />
                  ))
                : Array.from(Array(12).keys()).map((item) => (
                    <EventItemSkeleton key={item} />
                  ))}
            </StyledTableBody>
          </StyledTable>
        </StyledTableWrapper>
        {isShowButton.current &&
          data?.events?.length &&
          data?.limit < data?.count && (
            <StyledLoadMore>
              <MainButton
                label={t('common:loadMore')}
                icon={faChevronDown}
                onClick={() => loadMore()}
              />
            </StyledLoadMore>
          )}
      </StyledContent>
    </StyledCompletedEvents>
  )
}

export default CompletedEvents
