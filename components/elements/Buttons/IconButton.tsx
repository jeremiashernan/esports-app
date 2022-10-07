import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import tw, { css, styled } from 'twin.macro'

type ButtonStyleProps = {
  size?: number
}

type ButtonProps = {
  icon: IconDefinition
  title?: string
  url?: string
  blank?: boolean
  size?: number
}

const StyledButton = styled.a(({ size = 54 }: ButtonStyleProps) => [
  tw`flex justify-center items-center bg-pugb-red-300 transition-colors cursor-pointer
    hover:bg-pugb-red-200`,
  css`
    width: ${size}px;
    height: ${size}px;
    font-size: ${size / 2}px;
  `
])

const IconButton = ({ icon, title, url, blank, size }: ButtonProps) => {
  const button = (
    <StyledButton
      target={url && blank ? '_blank' : ''}
      title={title}
      size={size}
    >
      <FontAwesomeIcon icon={icon} color="white" />
    </StyledButton>
  )
  return (
    <>
      {url && (
        <Link href={url} passHref>
          {button}
        </Link>
      )}
      {!url && button}
    </>
  )
}

export default IconButton
