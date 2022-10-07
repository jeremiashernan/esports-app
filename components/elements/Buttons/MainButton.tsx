import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import tw, { styled } from 'twin.macro'

type MainButtonProps = {
  label: string
  icon?: IconDefinition
  url?: string
  onClick?: () => void
}
const StyledButton = styled.a(() => [
  tw`relative inline-flex w-max overflow-x-hidden bg-pugb-red-300 cursor-pointer 
  transition-colors select-none hover:bg-pugb-red-200
  after:content after:absolute after:h-full after:w-14 after:right-0
  after:transform after:skew-x-20 after:translate-x-3.5 after:bg-pugb-gray-450`
])
const StyledLabel = styled.span(() => [
  tw`py-4 px-6 min-width[140px] font-markpro font-extrabold text-xl text-white z-index[1]`,
  tw`xl:py-5`
])
const StyledIcon = styled.span(() => [
  tw`relative flex items-center justify-center w-8 ml-4 pr-1 z-index[1]`
])

const MainButton = ({
  label,
  icon = faChevronRight,
  url,
  onClick
}: MainButtonProps) => {
  const button = (
    <StyledButton onClick={onClick}>
      <StyledLabel>{label}</StyledLabel>
      <StyledIcon>
        <FontAwesomeIcon icon={icon} color="white" />
      </StyledIcon>
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

export default MainButton
