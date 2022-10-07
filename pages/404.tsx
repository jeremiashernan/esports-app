import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import NotFountLayout from '../components/layouts/NotFountLayout'
import NotFoundTemplate from '../components/templates/NotFoundTemplate'
import useHeadTitle from '../hooks/useHeadTitle'

const NotFoundPage = () => {
  const { t } = useTranslation('404')
  const title = useHeadTitle(t('notFound'))

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NotFountLayout>
        <NotFoundTemplate />
      </NotFountLayout>
    </>
  )
}

export default NotFoundPage
