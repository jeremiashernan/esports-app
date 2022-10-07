import Link from 'next/link'
import tw, { styled } from 'twin.macro'
import { LogoIcon } from '../elements/Icons'
import Menu from './Menu'

const StyledHeader = styled.header(() => [
  tw`flex flex-wrap bg-gradient-to-r from-pugb-gray-700 to-pugb-gray-900`
])
const StyledLogoLink = styled.a(() => [
  tw`my-5 mx-3.5 width[125px]`,
  tw`xl:mx-9`,
  tw`2xl:width[181px] `
])

const Header = () => (
  <StyledHeader>
    <Link href="/" passHref>
      <StyledLogoLink>
        <LogoIcon />
      </StyledLogoLink>
    </Link>
    <Menu />
  </StyledHeader>
)

export default Header
