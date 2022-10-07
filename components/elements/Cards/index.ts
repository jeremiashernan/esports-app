import dynamic from 'next/dynamic'

const NotFoundCard = dynamic(() => import('./NotFoundCard'))
const SocialCard = dynamic(() => import('./SocialCard'))
const TournamentCard = dynamic(() => import('./TournamentCard'))

export { NotFoundCard, SocialCard, TournamentCard }
