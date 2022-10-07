import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import DefaultLayout from '../../components/layouts/DefaultLayout'
import EventsTemplate from '../../components/templates/EventsTemplate'
import useHeadTitle from '../../hooks/useHeadTitle'
import { Event, EventFilter } from '../../services/interfaces/EventProps'

type EventProps = {
  active: Event[]
  featured: Event
  filters: EventFilter[]
}

const EventsPage = ({ active, featured, filters }: EventProps) => {
  const { t } = useTranslation()
  const title = useHeadTitle(t('links:menuLinks.events.label'))

  return (
    <>
      <NextSeo title={title} description={t('common:seo.description')} />
      <DefaultLayout>
        <EventsTemplate active={active} featured={featured} filters={filters} />
      </DefaultLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const origin = 'http://localhost:3000'

  const resFeatured = await fetch(
    `${origin}/api/events/featured?lang=${locale}`
  )
  const featured = await resFeatured.json()

  const resActive = await fetch(`${origin}/api/events/active`)
  const active = await resActive.json()

  const resCompleted = await fetch(`${origin}/api/events`)
  const completed = await resCompleted.json()

  return {
    props: {
      active,
      featured,
      filters: completed.filters
    }
  }
}

export default EventsPage
