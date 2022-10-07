import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../modules/Header'))

type NotFoundProps = {
  children: React.ReactNode
}

const NotFountLayout = ({ children }: NotFoundProps) => (
  <>
    <Header />
    <div>{children}</div>
  </>
)

export default NotFountLayout
