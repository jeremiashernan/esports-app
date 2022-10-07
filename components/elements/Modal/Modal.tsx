import React from 'react'
import tw, { styled } from 'twin.macro'

type ModalProps = {
  children: React.ReactNode
  show: boolean
  onClose: () => void
}

type StatusProps = {
  show: boolean
}

const StyledModalWrapper = styled.div(({ show }: StatusProps) => [
  tw`fixed flex flex-wrap justify-center my-0 mx-auto top-0 left-0
    w-screen h-screen z-[100] overflow-x-hidden pointer-events-none`,
  tw`bg-pugb-gray-800/[.9] opacity-0`,
  show && tw`opacity-100 pointer-events-auto `
])

const Modal = ({ children, show, onClose }: ModalProps) => (
  <StyledModalWrapper show={show} onClick={onClose}>
    {children}
  </StyledModalWrapper>
)

export default Modal
