import React, { useState } from 'react'
import tw, { css, styled } from 'twin.macro'

type CollapseProps = {
  open?: boolean
  title: string
  children: React.ReactNode
}

const StyledCollapseWrapper = styled.div(() => [
  tw`flex flex-col items-center w-full`,
  css`
    &:nth-child(even) {
      ${tw`bg-gradient-to-r from-pugb-gray-250 to-white`}
    }
    &:nth-child(odd) {
      ${tw`bg-gradient-to-r from-white to-pugb-gray-250`}
    }
  `
])
const StyledHeader = styled.div(() => [
  tw`w-full py-1 px-4 font-normal text-base text-pugb-gray-650
    cursor-pointer`
])
const StyledContent = styled.div(() => [tw`w-full `])

const Collapse = ({ open, title, children }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(open)

  return (
    <StyledCollapseWrapper>
      <StyledHeader onClick={() => setIsOpen(!isOpen)}>{title}</StyledHeader>
      {isOpen && <StyledContent>{children}</StyledContent>}
    </StyledCollapseWrapper>
  )
}

export default Collapse
