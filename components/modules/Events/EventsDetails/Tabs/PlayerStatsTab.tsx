import countries from 'i18n-iso-countries'
import english from 'i18n-iso-countries/langs/en.json'
import spanish from 'i18n-iso-countries/langs/es.json'
import portuguese from 'i18n-iso-countries/langs/pt.json'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { useState } from 'react'
import ReactCountryFlag from 'react-country-flag'
import tw, { styled } from 'twin.macro'
import { DetailedFilter } from '../../../../elements/Form'

countries.registerLocale(english)
countries.registerLocale(spanish)
countries.registerLocale(portuguese)

type PlayerStatsDataProps = {
  [matches: string]: number | string
  kills: number
  assists: number
  kda: number
  kd: number
  kas: number
  knocks: number
  damage_dealt: number
  avg_damage_dealt: number
  damage_taken: number
  avg_damage_taken: number
  revives: number
  headshot_kills: number
  time_survived: string
}

const StyledContent = styled.div(() => [tw``])
const StyledLeaderboardsWrapper = styled.div(() => [tw`overflow-x-auto mt-7`])
const StyledTable = styled.table(() => [
  tw`w-max`,
  tw`xl:w-full`,
  tw`table-fixed`
])
const StyledTableHead = styled.thead(() => [])
const StyledTableHeadRow = styled.tr(() => [
  tw`bg-gradient-to-r from-pugb-gray-700 to-pugb-gray-900`
])
const StyledTableHeadPlayerCol = styled.th(() => [
  tw`py-3 pl-5 text-white text-left font-normal w-60`
])
const StyledTableHeadCol = styled.th(() => [
  tw`py-3 pl-5 text-white text-left font-normal w-40`
])
const StyledTableHeadTeamCol = styled.th(() => [
  tw`py-3 pl-5 text-white text-left font-normal w-max w-20`
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
const StyledTableBodyTeamColContent = styled.div(() => [
  tw`flex items-center justify-center`
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

const initialStats = [
  {
    id: 'matches',
    label: '# of Matches',
    state: true
  },
  {
    id: 'kills',
    label: 'Kills',
    state: true
  },
  {
    id: 'assists',
    label: 'Assists',
    state: true
  },
  {
    id: 'kda',
    label: 'KDA',
    state: true
  },
  {
    id: 'kd',
    label: 'KD',
    state: false
  },
  {
    id: 'kas',
    label: 'KAS',
    state: false
  },
  {
    id: 'knocks',
    label: 'Knocks',
    state: false
  },
  {
    id: 'damage_dealt',
    label: 'Damage Dealt',
    state: true
  },
  {
    id: 'avg_damage_dealt',
    label: 'Avg. Damage Dealt',
    state: false
  },
  {
    id: 'damage_taken',
    label: 'Damage Taken',
    state: false
  },
  {
    id: 'avg_damage_taken',
    label: 'Avg. Damage Taken',
    state: false
  },
  {
    id: 'revives',
    label: 'Revives',
    state: false
  },
  {
    id: 'headshot_kills',
    label: 'Headshot Kills',
    state: false
  },
  {
    id: 'time_survived',
    label: 'Time Survived',
    state: true
  }
]

const PlayerStatsTab = () => {
  const { t, lang } = useTranslation()
  const countryNames = countries.getNames(lang)

  const [playerStats, setPlayerStats] = useState(initialStats)

  const mockup: PlayerStatsDataProps[] = Array.from(Array(10).keys()).map(
    () => ({
      matches: 36,
      kills: 48,
      assists: 14,
      kda: 2.7,
      kd: 2.7,
      kas: 2.7,
      knocks: 2.7,
      damage_dealt: 7165,
      avg_damage_dealt: 6517,
      damage_taken: 6517,
      avg_damage_taken: 6517,
      revives: 4,
      headshot_kills: 12,
      time_survived: '08:57:08'
    })
  )

  return (
    <StyledContent>
      <DetailedFilter stats={playerStats} handleStats={setPlayerStats} />
      <StyledLeaderboardsWrapper>
        <StyledTable>
          <StyledTableHead>
            <StyledTableHeadRow>
              <StyledTableHeadTeamCol>
                {t('tables:playerStats.team')}
              </StyledTableHeadTeamCol>
              <StyledTableHeadPlayerCol>
                {t('tables:playerStats.player')}
              </StyledTableHeadPlayerCol>
              {playerStats &&
                playerStats.map((stats) =>
                  stats.state ? (
                    <StyledTableHeadCol>
                      {t(`tables:playerStats.${stats.id}`)}
                    </StyledTableHeadCol>
                  ) : (
                    <></>
                  )
                )}
            </StyledTableHeadRow>
          </StyledTableHead>
          <StyledTableBody>
            {mockup.map((item, index) => (
              <StyledTableBodyRow key={index}>
                <StyledTableBodyCol>
                  <StyledTableBodyTeamColContent>
                    <Image
                      src="/images/events/tmp-runner.png"
                      width={32}
                      height={24}
                      alt="team_logo"
                    />
                  </StyledTableBodyTeamColContent>
                </StyledTableBodyCol>
                <StyledTableBodyCol>
                  <StyledTeamContent>
                    <ReactCountryFlag
                      countryCode="US"
                      svg
                      title={countryNames['US']}
                      style={{ fontSize: '1.5rem' }}
                    />
                    <StyledTeamValue>Player Name</StyledTeamValue>
                  </StyledTeamContent>
                </StyledTableBodyCol>
                {playerStats &&
                  playerStats.map((stats) =>
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

export default PlayerStatsTab
