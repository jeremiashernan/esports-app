import dynamic from 'next/dynamic'

const BroadcastTalent = dynamic(() => import('./BroadcastTalent'))
const FeaturedMatch = dynamic(() => import('./FeaturedMatch'))
const PrizingBreakdown = dynamic(() => import('./PrizingBreakdown'))
const TournamentEvent = dynamic(() => import('./TournamentEvent'))
const UpcomingMatch = dynamic(() => import('./UpcomingMatch'))

export {
  BroadcastTalent,
  FeaturedMatch,
  PrizingBreakdown,
  TournamentEvent,
  UpcomingMatch
}
