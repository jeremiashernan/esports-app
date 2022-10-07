import countries from 'i18n-iso-countries'
import english from 'i18n-iso-countries/langs/en.json'
import spanish from 'i18n-iso-countries/langs/es.json'
import portuguese from 'i18n-iso-countries/langs/pt.json'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import ReactCountryFlag from 'react-country-flag'
import { MdLanguage, MdOutlineGroup, MdOutlineGroupWork } from 'react-icons/md'
import tw, { css, styled } from 'twin.macro'
import { useFormatCurrency } from '../../../hooks/useFormaNumber'
import { useFormatRange } from '../../../hooks/useFormatDate'
import { Event } from '../../../services/interfaces/EventProps'
import { ArrowLongRight } from '../../elements/Icons'

countries.registerLocale(english)
countries.registerLocale(spanish)
countries.registerLocale(portuguese)

type ActiveEventsProps = {
  events: Event[]
}

type EventItemProps = {
  event: Event
}

type ImageStyleProps = {
  size: number
}

type EmptyRowProps = {
  message: string
}

const StyledWrapper = styled.div(() => [tw`container px-5`, tw`xl:px-0`])

const StyledActiveEvents = styled.div(() => [tw`mt-16 shadow-xl`])

const StyledHeader = styled.hgroup(() => [
  tw`py-4 px-10 bg-pugb-red-300 bg-no-repeat background-position-x[98%]
  background-image[url('/images/bg-active-events.png')]`
])
const StyledHeaderTitle = styled.h2(() => [
  tw`font-markpro font-bold text-white text-2xl`,
  tw`lg:text-4xl`
])

const StyledTableWrapper = styled.div(() => [tw`overflow-x-auto`])
const StyledTable = styled.table(() => [tw`w-full`, tw`xl:w-full`])
const StyledTableHead = styled.thead(() => [])
const StyledTableHeadRow = styled.tr(() => [
  tw`bg-gradient-to-r from-pugb-gray-700 to-pugb-gray-900`
])
const StyledTableHeadCol = styled.th(() => [
  tw`py-1.5 px-4 text-white text-left font-normal`
])
const StyledTableBody = styled.tbody(() => [
  tw`font-markpro text-pugb-gray-300`
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
    `
])
const StyledDetailsButton = styled.a(() => [
  tw`flex items-center justify-center w-32 h-12 bg-pugb-red-300 
    transition-colors text-white fill-current
    hover:bg-pugb-red-200`
])
const StyledDetailsButtonText = styled.span(() => [tw`mr-3 font-markpro`])
const StyledEventDetails = styled.div(() => [])
const StyledEventDetailsTitle = styled.span(() => [
  tw`text-pugb-gray-800`,
  tw`xl:text-lg`
])
const StyledEventDetailsActions = styled.div(() => [
  tw`grid grid-cols-3 gap-1 w-max`
])
const StyledContent = styled.div(() => [
  tw`w-[95%] px-0 m-auto`,
  tw`lg:px-0 lg:w-[90%]`,
  tw`xl:px-0 xl:container`
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
          <StyledEventDetails>
            <StyledEventDetailsTitle>{event.title}</StyledEventDetailsTitle>
            <StyledEventDetailsActions tw="hidden">
              <MdLanguage size="22" />
              <MdOutlineGroupWork size="22" />
              <MdOutlineGroup size="22" />
            </StyledEventDetailsActions>
          </StyledEventDetails>
        </StyledTableWithIcon>
      </StyledTableBodyCol>
      <StyledTableBodyCol tw="justify-center">
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

const ActiveEvents = ({ events }: ActiveEventsProps) => {
  const { t } = useTranslation()

  return (
    <StyledWrapper>
      <StyledActiveEvents>
        <StyledHeader>
          <StyledHeaderTitle>{t('common:activeEvents')}</StyledHeaderTitle>
        </StyledHeader>
        <StyledTableWrapper>
          <StyledTable>
            <StyledTableHead>
              <StyledTableHeadRow>
                <StyledTableHeadCol>
                  {t('tables:events.event')}
                </StyledTableHeadCol>
                <StyledTableHeadCol>
                  {t('tables:events.organizer')}
                </StyledTableHeadCol>
                <StyledTableHeadCol tw="w-1/6">
                  {t('tables:events.date')}
                </StyledTableHeadCol>
                <StyledTableHeadCol>
                  {t('tables:events.prize')}
                </StyledTableHeadCol>
                <StyledTableHeadCol>
                  {t('tables:events.region')}
                </StyledTableHeadCol>
                <StyledTableHeadCol tw="hidden"></StyledTableHeadCol>
              </StyledTableHeadRow>
            </StyledTableHead>
            <StyledTableBody>
              {events.length !== 0 ? (
                events.map((event, index) => (
                  <EventItem key={index} event={event} />
                ))
              ) : (
                <EmptyRow message={t('tables:events.noResults')} />
              )}
            </StyledTableBody>
          </StyledTable>
        </StyledTableWrapper>
      </StyledActiveEvents>
    </StyledWrapper>
  )
}

export default ActiveEvents
