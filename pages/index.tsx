import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import DefaultLayout from '../components/layouts/DefaultLayout'
import HomeTemplate from '../components/templates/HomeTemplate'
import useHeadTitle from '../hooks/useHeadTitle'
import absoluteUrl from '../services/absolute-url'

type PageProps = {
  origin: string
  currentURL: string
}

const IndexPage = ({ origin, currentURL }: PageProps) => {
  const { t, lang } = useTranslation()
  const title = useHeadTitle()

  const twitterArr = t('links:socialLinks.twitter').split('/')
  const twitterAccount = `@${twitterArr[twitterArr.length - 1]}`

  return (
    <>
      <NextSeo
        title={title}
        description={t('common:seo.description')}
        canonical={currentURL}
        openGraph={{
          type: 'website',
          title,
          description: t('common:seo.description'),
          url: currentURL,
          images: [
            {
              url: `${origin}/images/banners/temp-hero.jpg`
            }
          ],
          locale: lang,
          site_name: 'PUBG Esports'
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: twitterAccount
        }}
      />
      <DefaultLayout>
        <HomeTemplate />
      </DefaultLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  defaultLocale,
  locale,
  req
}) => {
  const { origin } = absoluteUrl(req)

  return {
    props: {
      origin,
      currentURL: `${origin}${locale === defaultLocale ? '' : `/${locale}`}`
    }
  }
}

export default IndexPage
