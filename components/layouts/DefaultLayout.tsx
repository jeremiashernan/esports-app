import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../modules/Header'))
const Footer = dynamic(() => import('../modules/Footer'))

type Props = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: Props) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default DefaultLayout
