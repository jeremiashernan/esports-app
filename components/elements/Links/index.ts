import dynamic from 'next/dynamic'

const NavLink = dynamic(() => import('./NavLink'))
const SocialLinks = dynamic(() => import('./SocialLinks'))
const SwitchLanguage = dynamic(() => import('./SwitchLanguage'))

export { NavLink, SocialLinks, SwitchLanguage }
