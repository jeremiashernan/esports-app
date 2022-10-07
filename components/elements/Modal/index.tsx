import dynamic from 'next/dynamic'

const MatchModal = dynamic(() => import('./MatchModal'))
const Modal = dynamic(() => import('./Modal'))

export { MatchModal, Modal }
