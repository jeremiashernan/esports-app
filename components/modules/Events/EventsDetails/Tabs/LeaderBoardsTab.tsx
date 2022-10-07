import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import tw, { css, styled } from 'twin.macro'
import { ParticipantsFilter } from '../../../../elements/Form'
import UpcomingMatch from '../UpcomingMatch'

type RankProps = {
  even: boolean
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
const StyledTableSubHeadRow = styled.tr(() => [
  tw`bg-gradient-to-r from-pugb-gray-550 to-pugb-gray-650`
])
const StyledTableHeadRankCol = styled.th(() => [
  tw`py-3 pl-5 text-white text-left font-normal w-16`
])
const StyledTableHeadTeamCol = styled.th(() => [
  tw`py-3 pl-5 text-white text-left font-normal w-52`
])
const StyledTableHeadPrizingCol = styled.th(() => [
  tw`py-3 pl-5 text-white text-left font-normal w-24`
])
const StyledTableHeadRoundCol = styled.th(() => [
  tw`py-3 pl-5 text-left text-white font-normal w-28`
])
const StyledTableSubRoundCol = styled.th(() => [tw`w-28`])
const StyledTableSubRoundContent = styled.div(() => [tw`flex justify-around`])
const StyledTableSubRoundTitle = styled.span(() => [
  tw`w-14 py-2 text-white text-left font-normal`,
  css`
    &:first-child {
      padding-left: 1.25rem;
    }
  `
])
const StyledTableSubRoundValue = styled.span(() => [
  tw`w-14 py-2 text-pugb-gray-650 text-left font-normal`,
  css`
    &:first-child {
      padding-left: 1.25rem;
    }
  `
])
const StyledTableTotalValue = styled.span(() => [
  tw`w-14 py-2 text-pugb-red-300 text-left font-normal`,
  css`
    &:first-child {
      padding-left: 1.25rem;
    }
  `
])
const StyledTableBody = styled.tbody(() => [
  tw`font-markpro text-pugb-gray-650`
])
const StyledTableBodyRow = styled.tr(() => [
  tw`bg-gradient-to-r
    odd:from-pugb-gray-250 odd:to-white
    even:from-white even:to-pugb-gray-250`
])
const StyledTableBodyCol = styled.td(() => [tw`py-3 px-4`])
const StyledTableBodyRankCol = styled.td(({ even }: RankProps) => [
  tw`py-3 px-4`,
  !even && tw`bg-pugb-gray-100`,
  even && tw`bg-gradient-to-r from-[#eaeaea] to-[#e8e8e8]`
])
const StyledRankValue = styled.span(() => [
  tw`flex items-center justify-center text-xl
  font-markpro font-extrabold text-pugb-gray-800`
])
const StyledTeamValue = styled.span(() => [
  tw`font-markpro font-extrabold text-pugb-gray-800 pl-4`
])
const StyledTeamContent = styled.div(() => [
  tw`flex items-center justify-start`
])
const StyledPrizingValue = styled.span(() => [
  tw`underline cursor-pointer font-bold`
])
const StyledEmptyContent = styled.div(() => [tw`mt-8`])

const LeaderboardsTab = () => {
  const { t } = useTranslation()

  const handleNumberFormat = (value: number) => {
    return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  }

  const prizing = 85000
  const data = true

  return (
    <StyledContent>
      <ParticipantsFilter />
      {data ? (
        <StyledLeaderboardsWrapper>
          <StyledTable>
            <StyledTableHead>
              <StyledTableHeadRow>
                <StyledTableHeadRankCol>
                  {t('tables:events.rank')}
                </StyledTableHeadRankCol>
                <StyledTableHeadTeamCol>
                  {t('tables:events.team')}
                </StyledTableHeadTeamCol>
                <StyledTableHeadPrizingCol>
                  {t('tables:events.prizing')}
                </StyledTableHeadPrizingCol>
                <StyledTableHeadRoundCol>
                  {t('tables:events.total')}
                </StyledTableHeadRoundCol>
                {Array.from(Array(7).keys()).map((item) => (
                  <StyledTableHeadRoundCol key={item}>
                    {t('tables:events.round')} {item + 1}
                  </StyledTableHeadRoundCol>
                ))}
              </StyledTableHeadRow>
              <StyledTableSubHeadRow>
                <StyledTableHeadRankCol></StyledTableHeadRankCol>
                <StyledTableHeadTeamCol></StyledTableHeadTeamCol>
                <StyledTableHeadPrizingCol></StyledTableHeadPrizingCol>
                {Array.from(Array(8).keys()).map((item) => (
                  <StyledTableSubRoundCol key={item}>
                    <StyledTableSubRoundContent>
                      <StyledTableSubRoundTitle>K</StyledTableSubRoundTitle>
                      <StyledTableSubRoundTitle>P</StyledTableSubRoundTitle>
                    </StyledTableSubRoundContent>
                  </StyledTableSubRoundCol>
                ))}
              </StyledTableSubHeadRow>
            </StyledTableHead>
            <StyledTableBody>
              {Array.from(Array(10).keys()).map((item) => (
                <StyledTableBodyRow key={item}>
                  <StyledTableBodyRankCol even={item % 2 === 0 ? false : true}>
                    <StyledRankValue>{item + 1}</StyledRankValue>
                  </StyledTableBodyRankCol>
                  <StyledTableBodyCol>
                    <StyledTeamContent>
                      <Image
                        src="/images/events/tmp-runner.png"
                        width={32}
                        height={24}
                        alt="team_logo"
                      />
                      <StyledTeamValue>Cloud 9 Esports</StyledTeamValue>
                    </StyledTeamContent>
                  </StyledTableBodyCol>
                  <StyledTableBodyCol>
                    <StyledPrizingValue>
                      ${handleNumberFormat(prizing - item * 5000)}
                    </StyledPrizingValue>
                  </StyledTableBodyCol>
                  {Array.from(Array(8).keys()).map((value) => (
                    <StyledTableSubRoundCol key={value}>
                      {value ? (
                        <StyledTableSubRoundContent>
                          <StyledTableSubRoundValue>
                            {value === item ? '—' : 104}
                          </StyledTableSubRoundValue>
                          <StyledTableSubRoundValue>
                            {value === item ? '—' : 280}
                          </StyledTableSubRoundValue>
                        </StyledTableSubRoundContent>
                      ) : (
                        <StyledTableSubRoundContent>
                          <StyledTableTotalValue>104</StyledTableTotalValue>
                          <StyledTableTotalValue>280</StyledTableTotalValue>
                        </StyledTableSubRoundContent>
                      )}
                    </StyledTableSubRoundCol>
                  ))}
                </StyledTableBodyRow>
              ))}
            </StyledTableBody>
          </StyledTable>
        </StyledLeaderboardsWrapper>
      ) : (
        <StyledEmptyContent>
          <UpcomingMatch />
        </StyledEmptyContent>
      )}
    </StyledContent>
  )
}

export default LeaderboardsTab
