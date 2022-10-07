import tw, { styled } from 'twin.macro'

type toggleProps = {
  toggle: boolean
}
type switchProps = {
  toggle: boolean
  setToggle: (toggle: boolean) => void
}
const StyledSwitchContainer = styled.div(() => [
  tw`flex flex-col justify-between items-center w-max`
])
const StyledContent = styled.div(({ toggle }: toggleProps) => [
  tw`w-10 h-6 flex items-center bg-pugb-gray-100
    rounded-full p-1 cursor-pointer`,
  tw`md:w-12 md:h-7`,
  toggle && tw`bg-pugb-red-300`
])
const StyledSwitch = styled.div(({ toggle }: toggleProps) => [
  tw`bg-white w-3 h-3 rounded-full shadow-md
    transform duration-300 ease-in-out`,
  tw`md:w-5 md:h-5`,
  toggle && tw`transform translate-x-5`
])
const StyledLabel = styled.p(() => [
  tw`text-pugb-gray-650 font-normal text-center tracking-[0.3px]`
])

function SwitchButton({ toggle, setToggle }: switchProps) {
  return (
    <StyledSwitchContainer>
      <StyledLabel>Detailed Stats</StyledLabel>
      <StyledContent
        toggle={toggle}
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        <StyledSwitch toggle={toggle} />
      </StyledContent>
    </StyledSwitchContainer>
  )
}

export default SwitchButton
