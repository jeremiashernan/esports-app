import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { useState } from 'react'
import tw, { styled } from 'twin.macro'
import { DetailedFilter } from '../../../../elements/Form'

type TeamProps = {
  even: boolean
}

type TableDataProps = {
  [matches: string]: number
  total_points: number
  avg_total_points: number
  wwcd: number
  avg_rank: number
  placement_points: number
  avg_placement_points: number
  kills: number
  avg_kills: number
  damage_dealt: number
}

type initialStatsProps = {
  id: string
  label: string
  state: boolean
}

const StyledContent = styled.div(() => [tw``])
const StyledLeaderboardsWrapper = styled.div(() => [tw`overflow-x-auto mt-7`])
const StyledTable = styled.table(() => [
  tw`w-max relative`,
  tw`xl:w-full`,
  tw`table-fixed`
])
const StyledTableHead = styled.thead(() => [])
const StyledTableHeadRow = styled.tr(() => [
  tw`bg-gradient-to-r from-pugb-gray-700 to-pugb-gray-900`
])
const StyledTableHeadTeamCol = styled.th(() => [
  tw`py-3 pl-5 text-white text-left font-normal w-60`
])
const StyledTableHeadCol = styled.th(() => [
  tw`py-3 pl-5 text-white text-left font-normal w-44`
])
const StyledTableBody = styled.tbody(() => [
  tw`font-markpro text-pugb-gray-650`
])
const StyledTableBodyRow = styled.tr(() => [
  tw`bg-gradient-to-r
    odd:from-pugb-gray-250 odd:to-white
    even:from-white even:to-pugb-gray-250`
])
const StyledTableBodyCol = styled.td(() => [tw`py-3 px-5`])
const StyledTableBodyTeamCol = styled.td(({ even }: TeamProps) => [
  tw`py-3 px-5`,
  !even && tw`bg-pugb-gray-100`,
  even && tw`bg-gradient-to-r from-[#eaeaea] to-[#e8e8e8]`
])
const StyledTeamValue = styled.span(() => [
  tw`font-markpro font-extrabold text-pugb-gray-800 pl-5`
])
const StyledTeamContent = styled.div(() => [
  tw`flex items-center justify-start`
])
const StyledValue = styled.span(() => [
  tw`font-markpro font-normal text-pugb-gray-800`
])

const initialStats: initialStatsProps[] = [
  {
    id: 'matches',
    label: '# of Matches',
    state: true
  },
  {
    id: 'total_points',
    label: 'Total Points',
    state: true
  },
  {
    id: 'avg_total_points',
    label: 'Avg. Total Points',
    state: false
  },
  {
    id: 'wwcd',
    label: 'WWCD',
    state: true
  },
  {
    id: 'avg_rank',
    label: 'Avg. Rank',
    state: false
  },
  {
    id: 'placement_points',
    label: 'Placement Points',
    state: true
  },
  {
    id: 'avg_placement_points',
    label: 'Avg. Placement Points',
    state: false
  },
  {
    id: 'kills',
    label: 'Kills',
    state: true
  },
  {
    id: 'avg_kills',
    label: 'Avg. Kills',
    state: false
  },
  {
    id: 'damage_dealt',
    label: 'Damage Dealt',
    state: false
  }
]

const TeamStatsTab = () => {
  const { t } = useTranslation()

  const [teamStats, setTeamStats] = useState<initialStatsProps[]>(initialStats)

  const mockup: TableDataProps[] = Array.from(
    Array<TableDataProps>(10).keys()
  ).map(() => ({
    matches: 36,
    total_points: 377,
    avg_total_points: 10.47,
    wwcd: 8,
    avg_rank: 104,
    placement_points: 133,
    avg_placement_points: 3.69,
    kills: 244,
    avg_kills: 6.78,
    damage_dealt: 300
  }))

  return (
    <StyledContent>
      <DetailedFilter stats={teamStats} handleStats={setTeamStats} />
      <StyledLeaderboardsWrapper>
        <StyledTable>
          <StyledTableHead>
            <StyledTableHeadRow>
              <StyledTableHeadTeamCol>
                {t('tables:teamStats.team')}
              </StyledTableHeadTeamCol>
              {teamStats &&
                teamStats.map((stats) =>
                  stats.state ? (
                    <StyledTableHeadCol>
                      {t(`tables:teamStats.${stats.id}`)}
                    </StyledTableHeadCol>
                  ) : (
                    <></>
                  )
                )}
            </StyledTableHeadRow>
          </StyledTableHead>
          <StyledTableBody>
            {mockup.map((item: TableDataProps, index) => (
              <StyledTableBodyRow key={index}>
                <StyledTableBodyTeamCol even={index % 2 === 0 ? false : true}>
                  <StyledTeamContent>
                    <Image
                      src="/images/events/tmp-runner.png"
                      width={32}
                      height={24}
                      alt="team_logo"
                    />
                    <StyledTeamValue>Cloud 9 Esports</StyledTeamValue>
                  </StyledTeamContent>
                </StyledTableBodyTeamCol>
                {teamStats &&
                  teamStats.map((stats: initialStatsProps) =>
                    stats.state ? (
                      <StyledTableBodyCol>
                        <StyledValue>{item[stats.id]}</StyledValue>
                      </StyledTableBodyCol>
                    ) : (
                      <></>
                    )
                  )}
              </StyledTableBodyRow>
            ))}
          </StyledTableBody>
        </StyledTable>
      </StyledLeaderboardsWrapper>
    </StyledContent>
  )
}

export default TeamStatsTab
