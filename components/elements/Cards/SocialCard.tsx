import {
  faInstagram,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import tw, { styled } from 'twin.macro'

type SocialProps = {
  title: 'Instagram' | 'Twitter' | 'Youtube'
  children: React.ReactNode
  gradient?: boolean
}

type CardStyleProps = {
  gradient: boolean
}

const getIcon = (title: string) => {
  switch (title) {
    case 'Instagram':
      return faInstagram
    case 'Twitter':
      return faTwitter
    default:
      return faYoutube
  }
}

const StyledCard = styled.div(() => [tw`flex flex-1 flex-col`])

const StyledCardHeader = styled.div(() => [
  tw`flex items-center justify-between h-16 px-6 bg-pugb-red-300`
])

const StyledCardHeaderTitle = styled.h4(() => [
  tw`text-3xl text-white font-markpro font-extrabold`
])

const StyledCardContent = styled.div(({ gradient }: CardStyleProps) => [
  tw`p-6 bg-white`,
  gradient && tw`bg-gradient-to-r from-white to-pugb-gray-200`
])
const StyledIcon = styled(FontAwesomeIcon)`
  ${tw`text-4xl text-white`}
`

const SocialCard = ({ title, children, gradient = false }: SocialProps) => {
  const icon = getIcon(title)

  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledCardHeaderTitle>{title}</StyledCardHeaderTitle>
        <StyledIcon icon={icon} />
      </StyledCardHeader>
      <StyledCardContent gradient={gradient}>{children}</StyledCardContent>
    </StyledCard>
  )
}

export default SocialCard
