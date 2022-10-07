import dynamic from 'next/dynamic'

const NumberedTitleTextBlock = dynamic(() => import('./NumberedTitleTextBlock'))
const NumberedTitleTextBlockCustomColor = dynamic(
  () => import('./NumberedTitleTextBlockCustomColor')
)
const StyledBackgroundTitle = dynamic(() => import('./StyledBackgroundTitle'))
const StyledContentWrapper = dynamic(() => import('./StyledContentWrapper'))
const TableOfContent = dynamic(() => import('./TableOfContent'))

const InstagramCardComponent = dynamic(() => import('./InstagramCardComponent'))
const TwitterCardComponent = dynamic(() => import('./TwitterCardComponent'))
const YoutubeCardComponent = dynamic(() => import('./YoutubeCardComponent'))

const PrizeLists = dynamic(() => import('./PrizeLists'))
const PrizePools = dynamic(() => import('./PrizePools'))
const MatchPlayer = dynamic(() => import('./MatchPlayer'))
const MatchTeams = dynamic(() => import('./MatchTeams'))
const MatchMember = dynamic(() => import('./MatchMember'))

export {
  StyledBackgroundTitle,
  StyledContentWrapper,
  NumberedTitleTextBlock,
  NumberedTitleTextBlockCustomColor,
  TableOfContent,
  InstagramCardComponent,
  TwitterCardComponent,
  YoutubeCardComponent,
  PrizeLists,
  PrizePools,
  MatchPlayer,
  MatchTeams,
  MatchMember
}
