import Link from 'next/link'
import tw, { styled } from 'twin.macro'

type ButtonProps = {
  label: string
  url: string
}

const StyledButton = styled.a(() => [
  tw`flex items-center justify-center w-max min-width[210px] height[60px] z-index[1] 
  font-markpro font-extrabold text-xl text-white select-none cursor-pointer
  transition-colors border-2 border-pugb-red-300 background-color[rgba(223, 0, 35, 0.2)]
  hover:background-color[rgba(223, 0, 35, 0.4)]`,
  tw`xl:height[68px]`
])

const SimpleButton = ({ label, url }: ButtonProps) => {
  return (
    <Link href={url} passHref>
      <StyledButton>{label}</StyledButton>
    </Link>
  )
}

export default SimpleButton
