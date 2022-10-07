import dynamic from 'next/dynamic'

const EventsFilter = dynamic(() => import('./EventsFilter'))
const NewsFilter = dynamic(() => import('./NewsFilter'))
const ParticipantsFilter = dynamic(() => import('./ParticipantsFilter'))
const DetailedFilter = dynamic(() => import('./DetailedFilter'))

export { EventsFilter, NewsFilter, ParticipantsFilter, DetailedFilter }
