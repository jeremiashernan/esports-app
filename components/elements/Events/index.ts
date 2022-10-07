import dynamic from 'next/dynamic'

const EventInfos = dynamic(() => import('./EventInfos'))
const ScheduleInfo = dynamic(() => import('./ScheduleInfo'))

export { EventInfos, ScheduleInfo }
