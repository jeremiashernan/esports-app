import Link from 'next/link'
import { useRouter } from 'next/router'
import tw, { styled } from 'twin.macro'
import { ExternalIcon, LiveIcon } from '../Icons'

type LinkProps = {
  label: string
  url?: string
  live?: boolean
  external?: boolean
  locale?: string
}

type StyleProps = {
  active?: boolean
  url?: boolean
}

const StyledLink = styled.a(({ active, url }: StyleProps) => [
  tw`flex flex-col justify-center relative px-8 cursor-pointer transition-colors
    after:content after:w-full after:h-0.5 after:transition-colors
    hover:after:bg-pugb-red-300`,
  tw`xl:px-6 xl:hover:bg-pugb-gray-600`,
  tw`2xl:px-10`,
  active && tw`xl:bg-pugb-gray-600`,
  active && url && tw`after:bg-pugb-red-300`
])
const StyledLabel = styled.span(() => [tw`text-white text-xl xl:text-lg`])
const StyledLive = styled.span(() => [tw`absolute left-3.5`])
const StyledExternal = styled.span(() => [
  tw`absolute right-0 xl:right-2 2xl:right-3.5`
])

const NavLink = ({ label, url, live, external, locale }: LinkProps) => {
  const { pathname } = useRouter()

  return (
    <>
      {url && (
        <Link href={url} passHref locale={locale}>
          <StyledLink
            active={pathname === url || pathname.startsWith(url)}
            url
            target={external ? '_blank' : ''}
          >
            <StyledLabel>{label}</StyledLabel>
            {external && (
              <StyledExternal>
                <ExternalIcon />
              </StyledExternal>
            )}
          </StyledLink>
        </Link>
      )}
      {!url && (
        <StyledLink active={live}>
          {live && (
            <StyledLive>
              <LiveIcon />
            </StyledLive>
          )}
          <StyledLabel>{label}</StyledLabel>
        </StyledLink>
      )}
    </>
  )
}

export default NavLink
