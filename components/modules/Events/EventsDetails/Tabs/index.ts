import dynamic from 'next/dynamic'

const ParticipantTab = dynamic(() => import('./ParticipantTab'))
const MatchesTab = dynamic(() => import('./MatchesTab'))
const LeaderBoardsTab = dynamic(() => import('./LeaderBoardsTab'))
const TeamStatsTab = dynamic(() => import('./TeamStatsTab'))
const PlayerStatsTab = dynamic(() => import('./PlayerStatsTab'))

export {
  ParticipantTab,
  MatchesTab,
  LeaderBoardsTab,
  TeamStatsTab,
  PlayerStatsTab
}
