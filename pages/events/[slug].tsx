import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import DefaultLayout from '../../components/layouts/DefaultLayout'
import EventDetailsTemplate from '../../components/templates/EventDetailsTemplate'

const EventDetailsPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <NextSeo
        title="LVUP SHOWDOWN: 2021 Season Final"
        description={t('common:seo.description')}
      />
      <DefaultLayout>
        <EventDetailsTemplate />
      </DefaultLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({}) => {
  return {
    props: {}
  }
}

export default EventDetailsPage
