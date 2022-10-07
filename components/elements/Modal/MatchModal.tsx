import React from 'react'
import tw, { styled } from 'twin.macro'
import { Teams } from '../../../constants/events'
import { MatchPlayer, MatchTeams } from '../Blocks'
import { Modal } from '../Modal'

type MatchModalProps = {
  show: boolean
  onClose: () => void
}

const StyledModalContent = styled.div(() => [
  tw`flex flex-row flex-nowrap w-full flex-col`,
  tw`lg:flex-row`
])
const StyledModalTeamContent = styled.div(() => [
  tw`block relative top-0 right-0 overflow-auto w-full h-auto
    self-auto shadow-lg bg-white`,
  tw`lg:w-[22rem] lg:h-screen`,
  tw`xl:w-[22rem] xl:absolute xl:h-screen`
])
const StyledModalVideoContent = styled.div(() => [
  tw`block relative overflow-hidden w-[90%] mx-auto my-8
    self-auto`,
  tw`lg:w-[37.5rem] lg:my-auto`,
  tw`xl:w-[40rem] xl:mr-auto xl:ml-[15vw]`,
  tw`2xl:w-[41.25rem] 2xl:m-auto`
])

const MatchModal = ({ show, onClose }: MatchModalProps) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
  }
  return (
    <Modal show={show} onClose={onClose}>
      <StyledModalContent>
        <StyledModalVideoContent onClick={(e) => handleClick(e)}>
          <MatchPlayer />
        </StyledModalVideoContent>
        <StyledModalTeamContent onClick={(e) => handleClick(e)}>
          <MatchTeams teams={Teams} />
        </StyledModalTeamContent>
      </StyledModalContent>
    </Modal>
  )
}

export default MatchModal
