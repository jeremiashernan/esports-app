import tw, { css, styled } from 'twin.macro'
import { Member } from '../../../constants/events'
import {
  ArmorIcon,
  BagIcon,
  GrenadeIcon,
  HelmetIcon,
  PistolIcon,
  RifleIcon
} from '../../elements/Icons'
import { Collapse } from '../Collapse'

type MatchMemberProps = {
  member: Member
}

type EquipProps = {
  isEquip: boolean
}

type EnergyProps = {
  energy: number
}

type HealthProps = {
  health: number
}

const StyledMemberContent = styled.div(() => [tw`bg-pugb-gray-250`])
const StyledStateContent = styled.div(() => [
  tw`w-full grid grid-cols-8 grid-rows-2`
])
const StyledBarContent = styled.div(() => [
  tw`row-span-2 col-span-5 flex items-center justify-center
    border border-pugb-gray-100 py-1 px-8 flex-col`
])
const StyledBarPointContent = styled.div(() => [
  tw`flex justify-around items-center w-full mt-4`
])
const StyledBarPointLabel = styled.div(() => [
  tw`font-markpro font-extrabold text-base text-pugb-gray-800`
])
const StyledBarEnergyContent = styled.div(() => [
  tw`w-full bg-black/10 h-[0.25rem] mt-2`
])
const StyledBarEnergyProgress = styled.div(({ energy }: EnergyProps) => [
  tw`w-full bg-pugb-red-300 h-full`,
  css`
    width: ${energy}%;
  `
])
const StyledBarHealthContent = styled.div(() => [
  tw`w-full bg-black/10 h-[0.75rem] my-2`
])
const StyledBarHealthProgress = styled.div(({ health }: HealthProps) => [
  tw`w-full bg-pugb-gray-500 h-full`,
  css`
    width: ${health}%;
  `
])
const StyledWeaponContent = styled.div(() => [
  tw`grid grid-cols-5 col-span-3 p-1
    border border-pugb-gray-100`
])
const StyledWeaponContentLogo = styled.div(() => [
  tw`col-span-2 flex justify-end items-center`
])
const StyledWeaponContentLabel = styled.div(() => [
  tw`font-normal col-span-3 text-base underline pl-4
    flex justify-start items-center cursor-pointer`
])
const StyledEquipmentItem = styled.div(() => [
  tw`flex items-center justify-center p-1
    border border-pugb-gray-100`
])
const StyledEquipmentItemLabel = styled.div(({ isEquip }: EquipProps) => [
  tw`pl-4 font-normal text-xs text-pugb-red-300`,
  isEquip && tw`text-[#0DA346]`
])
const StyledEquipmentContent = styled.div(() => [tw`grid grid-cols-3 w-full`])
const StyledGrenadeContent = styled.div(() => [
  tw`w-full grid grid-cols-2 grid-rows-4`
])
const StyledGrenadeItemContent = styled.div(() => [tw`grid grid-cols-4`])
const StyledGrenadeItemLogo = styled.div(() => [
  tw`flex items-center justify-center border border-pugb-gray-100`
])
const StyledGrenadeItem = styled.div(() => [
  tw`col-span-3 flex items-center pl-8 border border-pugb-gray-100
    font-normal text-base text-pugb-gray-800`
])

const MatchMember = ({ member }: MatchMemberProps) => (
  <Collapse title={member.name}>
    <StyledMemberContent>
      <StyledStateContent>
        <StyledBarContent>
          <StyledBarPointContent>
            <StyledBarPointLabel>{member.point1}</StyledBarPointLabel>
            <StyledBarPointLabel>{member.point2}</StyledBarPointLabel>
          </StyledBarPointContent>
          <StyledBarEnergyContent>
            <StyledBarEnergyProgress energy={member.energy} />
          </StyledBarEnergyContent>
          <StyledBarHealthContent>
            <StyledBarHealthProgress health={member.health} />
          </StyledBarHealthContent>
        </StyledBarContent>
        <StyledWeaponContent>
          <StyledWeaponContentLogo>
            <RifleIcon />
          </StyledWeaponContentLogo>
          <StyledWeaponContentLabel>
            {member.equipment.rifle}
          </StyledWeaponContentLabel>
        </StyledWeaponContent>
        <StyledWeaponContent>
          <StyledWeaponContentLogo>
            <PistolIcon />
          </StyledWeaponContentLogo>
          <StyledWeaponContentLabel>
            {member.equipment.pistol}
          </StyledWeaponContentLabel>
        </StyledWeaponContent>
      </StyledStateContent>
      <StyledEquipmentContent>
        <StyledEquipmentItem>
          <BagIcon />
          <StyledEquipmentItemLabel isEquip={member.equipment.bag}>
            {member.equipment.bag ? 'Equipped' : 'None'}
          </StyledEquipmentItemLabel>
        </StyledEquipmentItem>
        <StyledEquipmentItem>
          <HelmetIcon />
          <StyledEquipmentItemLabel isEquip={member.equipment.helmet}>
            {member.equipment.helmet ? 'Equipped' : 'None'}
          </StyledEquipmentItemLabel>
        </StyledEquipmentItem>
        <StyledEquipmentItem>
          <ArmorIcon />
          <StyledEquipmentItemLabel isEquip={member.equipment.armor}>
            {member.equipment.armor ? 'Equipped' : 'None'}
          </StyledEquipmentItemLabel>
        </StyledEquipmentItem>
      </StyledEquipmentContent>
      <StyledGrenadeContent>
        {member.equipment.grenade.map((item, i) => (
          <StyledGrenadeItemContent key={i}>
            <StyledGrenadeItemLogo>
              <GrenadeIcon />
            </StyledGrenadeItemLogo>
            <StyledGrenadeItem>{item.amount}</StyledGrenadeItem>
          </StyledGrenadeItemContent>
        ))}
      </StyledGrenadeContent>
    </StyledMemberContent>
  </Collapse>
)

export default MatchMember
