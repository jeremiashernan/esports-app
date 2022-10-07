import dynamic from 'next/dynamic'

export * from './EventsDetails'
export { ActiveEvents, CompletedEvents, FeaturedEvent }

const ActiveEvents = dynamic(() => import('./ActiveEvents'))
const CompletedEvents = dynamic(() => import('./CompletedEvents'))
const FeaturedEvent = dynamic(() => import('./FeaturedEvent'))
