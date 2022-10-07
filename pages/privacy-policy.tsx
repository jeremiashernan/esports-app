import { GetServerSideProps } from 'next'
import DefaultLayout from '../components/layouts/DefaultLayout'
import PrivacyPolicyTemplate from '../components/templates/PrivacyPolicyTemplate'

const PrivacyPolicyPage = () => (
  <DefaultLayout>
    <PrivacyPolicyTemplate />
  </DefaultLayout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    notFound: true
  }
}

export default PrivacyPolicyPage
