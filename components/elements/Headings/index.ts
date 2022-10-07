import dynamic from 'next/dynamic'

const BlockHeading = dynamic(() => import('./BlockHeading'))
const CMSHeading = dynamic(() => import('./CMSHeading'))
const Heading2 = dynamic(() => import('./Heading2'))
const Heading5 = dynamic(() => import('./Heading5'))

export { BlockHeading, CMSHeading, Heading2, Heading5 }
