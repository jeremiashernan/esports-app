import { GetServerSideProps } from 'next'
import DefaultLayout from '../components/layouts/DefaultLayout'
import ApplyTemplate from '../components/templates/ApplyTemplate'

const ApplyPage = () => (
  <DefaultLayout>
    <ApplyTemplate />
  </DefaultLayout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    notFound: true
  }
}

export default ApplyPage
