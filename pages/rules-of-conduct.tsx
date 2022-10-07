import { GetServerSideProps } from 'next'
import DefaultLayout from '../components/layouts/DefaultLayout'
import RulesTemplate from '../components/templates/RulesTemplate'

const RulesPage = () => (
  <DefaultLayout>
    <RulesTemplate />
  </DefaultLayout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    notFound: true
  }
}

export default RulesPage
