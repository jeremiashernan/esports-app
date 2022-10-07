import dynamic from 'next/dynamic'

const BigContentContainer = dynamic(() => import('./BigContentContainer'))
const ContentContainer = dynamic(() => import('./ContentContainer'))

export { ContentContainer, BigContentContainer }
