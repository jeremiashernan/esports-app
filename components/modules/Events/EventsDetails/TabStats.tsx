import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'
import {
  LeaderBoardsTab,
  MatchesTab,
  ParticipantTab,
  PlayerStatsTab,
  TeamStatsTab
} from './Tabs'

type TabsProps = {
  label: string
  component: React.ReactElement | null
}

type TabsStyleProps = {
  active: boolean
}

const StyledStats = styled.div(() => [
  tw`py-20 bg-no-repeat bg-pugb-gray-0 background-image[url('/images/bg-events-wrapper.jpg')]`
])

const StyledTabs = styled.div(() => [tw`relative container px-5`, tw`md:px-0`])

const StyledTabsMenu = styled.ul(() => [
  tw`flex flex-col mb-7 border-b border-b-pugb-gray-300`,
  tw`md:flex-row md:flex-wrap`
])
const StyledTabsMenuItem = styled.li(() => [
  tw`mt-4 w-max`,
  tw`md:mr-10 md:last:mr-0`,
  tw`xl:mr-16`
])
const StyledTabsMenuItemLink = styled.a(({ active }: TabsStyleProps) => [
  tw`flex flex-col justify-center text-lg font-markpro font-extrabold
    cursor-pointer transition-colors text-pugb-gray-300
    after:content after:mt-2.5 after:w-full after:h-1 after:z-index[1] after:transition-colors
    hover:text-pugb-gray-800 hover:after:bg-pugb-red-300`,
  tw`xl:text-xl`,
  active && tw`text-pugb-gray-800 after:bg-pugb-red-300`
])

const TabStats = () => {
  const { t } = useTranslation()
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    setSelected(0)
  }, [])

  const tabs: TabsProps[] = [
    {
      label: t('tables:eventTabs.participants'),
      component: <ParticipantTab />
    },
    {
      label: t('tables:eventTabs.matches'),
      component: <MatchesTab />
    },
    {
      label: t('tables:eventTabs.leaderboards'),
      component: <LeaderBoardsTab />
    },
    {
      label: t('tables:eventTabs.teamStats'),
      component: <TeamStatsTab />
    },
    {
      label: t('tables:eventTabs.playerStats'),
      component: <PlayerStatsTab />
    }
  ]

  return (
    <StyledStats>
      <StyledTabs>
        <StyledTabsMenu>
          {tabs.map((tab, index) => (
            <StyledTabsMenuItem key={index} onClick={() => setSelected(index)}>
              <StyledTabsMenuItemLink active={index === selected}>
                {tab.label}
              </StyledTabsMenuItemLink>
            </StyledTabsMenuItem>
          ))}
        </StyledTabsMenu>
        {tabs[selected].component}
      </StyledTabs>
    </StyledStats>
  )
}

export default TabStats
