import dynamic from 'next/dynamic'

const IconButton = dynamic(() => import('./IconButton'))
const MainButton = dynamic(() => import('./MainButton'))
const SimpleButton = dynamic(() => import('./SimpleButton'))

export { MainButton, IconButton, SimpleButton }
