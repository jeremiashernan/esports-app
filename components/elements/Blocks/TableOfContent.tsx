import { MouseEvent } from 'react'
import tw, { styled } from 'twin.macro'
import { TNodeList } from '../../../constants/nodeRulesList'
import useActiveId from '../../../hooks/useActiveId'

type StyledNavLinkProps = {
  level: number
  isActive: boolean
}

type TableOfContentProps = {
  roleList: TNodeList
}

const StyledNavLink = styled.a(({ level, isActive }: StyledNavLinkProps) => [
  tw`block font-lato text-pugb-gray-300 font-size[1.25rem] line-height[3rem]`,
  isActive && tw`text-pugb-gray-650`,
  level == 2 && tw`pl-4`
])

const StyledNavHeaderTitle = styled.h4(() => [
  tw`mt-auto mb-auto font-markpro font-size[1.375rem] leading-7 font-extrabold text-white`,
  tw`xl:font-size[1.5rem] xl:line-height[1.875rem]`
])

const StyledNavHeader = styled.div(() => [
  tw`flex height[3.6875rem] justify-start bg-pugb-red-300
  padding-left[1.6875rem] min-width[20rem]`
])

const StyledNavContainer = styled.div(() => [
  tw`hidden h-full sticky top-0 padding-right[3.8125rem] min-width[24rem]`,
  tw`xl:block`
])

const StyledNavBody = styled.div(() => [
  tw`height[33.375rem] overflow-x-auto padding-left[1.6875rem] padding-right[1.6875rem] padding-top[1.4375rem] padding-bottom[1.4375rem]
 bg-gradient-to-l from-pugb-gray-200 to-[#ffffff] min-width[20rem]`
])

const TableOfContent = ({ roleList }: TableOfContentProps) => {
  const activeId = useActiveId(roleList.map((r) => r.id))

  return (
    <StyledNavContainer>
      <StyledNavHeader>
        <StyledNavHeaderTitle>Table of Contents</StyledNavHeaderTitle>
      </StyledNavHeader>
      <StyledNavBody>
        {roleList.map((role) => (
          <StyledNavLink
            onClick={(e: MouseEvent) => {
              e.preventDefault()
              document.getElementById(role.id)?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
            isActive={role.id == activeId}
            key={role.id}
            href={`#${role.id}`}
            level={Number(role.level)}
          >
            {role.id}. {role.title}
          </StyledNavLink>
        ))}
      </StyledNavBody>
    </StyledNavContainer>
  )
}

export default TableOfContent
