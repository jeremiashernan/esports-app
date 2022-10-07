import tw, { styled } from 'twin.macro'

type ContainerProps = {
  children: React.ReactNode
}

const StyledContentContainer = styled.div(() => [
  tw`padding-left[1.4375rem] padding-right[1.4375rem]`,
  tw`xl:max-width[80rem] xl:ml-auto xl:mr-auto xl:pl-0 xl:pr-0`
])

const BigContentContainer = ({ children }: ContainerProps) => (
  <StyledContentContainer>{children}</StyledContentContainer>
)

export default BigContentContainer
