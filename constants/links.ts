import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import {
  faDiscord,
  faFacebookF,
  faInstagram,
  faRedditAlien,
  faTiktok,
  faTwitch,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

type Link = {
  label: string
  url: string
  language?: string[]
}

type Icon = {
  icon: IconDefinition
}

export const menuLinks: Link[] = [
  {
    label: 'links:menuLinks.news.label',
    url: 'links:menuLinks.news.url'
  },
  {
    label: 'links:menuLinks.events.label',
    url: 'links:menuLinks.events.url'
  },
  {
    label: 'links:menuLinks.pgc.label',
    url: 'links:menuLinks.pgc.url',
    language: ['en']
  }
  // {
  //   label: 'links:menuLinks.schedule.label',
  //   url: 'links:menuLinks.schedule.url'
  // },
  // {
  //   label: 'links:menuLinks.standings.label',
  //   url: 'links:menuLinks.standings.url'
  // },
  // {
  //   label: 'links:menuLinks.teams.label',
  //   url: 'links:menuLinks.teams.url'
  // },
  // {
  //   label: 'links:menuLinks.about.label',
  //   url: 'links:menuLinks.about.url'
  // }
]

export const externalLinks: Link[] = [
  {
    label: 'SUPER',
    url: 'https://pubgesports.com/resources/pdf/super_v3_0_1.pdf'
  }
]

export const pageLinks: Link[] = [
  {
    label: 'links:pageLinks.privacyPolicy.label',
    url: 'links:pageLinks.privacyPolicy.url',
    language: ['en', 'es', 'pt']
  },
  {
    label: 'links:pageLinks.termsOfService.label',
    url: 'links:pageLinks.termsOfService.url',
    language: ['en', 'es', 'pt']
  },
  {
    label: 'links:pageLinks.rulesOfCondut.label',
    url: 'links:pageLinks.rulesOfCondut.url',
    language: ['en', 'es', 'pt']
  },
  {
    label: 'links:pageLinks.privacyPolicyCalifornia.label',
    url: 'links:pageLinks.privacyPolicyCalifornia.url',
    language: ['en']
  }
  // {
  //   label: 'links:pageLinks.eula.label',
  //   url: 'links:pageLinks.eula.url'
  // },
  // {
  //   label: 'links:pageLinks.playerCreatedContent.label',
  //   url: 'links:pageLinks.playerCreatedContent.url'
  // }
]

export const socialLinks: (Link & Icon)[] = [
  {
    label: 'Youtube',
    url: 'links:socialLinks.youtube',
    icon: faYoutube
  },
  {
    label: 'Facebook',
    url: 'links:socialLinks.facebook',
    icon: faFacebookF
  },
  {
    label: 'Twitter',
    url: 'links:socialLinks.twitter',
    icon: faTwitter
  },
  {
    label: 'Instagram',
    url: 'links:socialLinks.instagram',
    icon: faInstagram
  },
  {
    label: 'Twitch',
    url: 'links:socialLinks.twitch',
    icon: faTwitch
  },
  {
    label: 'Discord',
    url: 'links:socialLinks.discord',
    icon: faDiscord
  },
  {
    label: 'Reddit',
    url: 'links:socialLinks.reddit',
    icon: faRedditAlien
  },
  {
    label: 'TikTok',
    url: 'links:socialLinks.tiktok',
    icon: faTiktok
  }
]

export const shareLinks: (Link & Icon)[] = [
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/sharer/sharer.php?u=',
    icon: faFacebookF
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/share?text=@PUBG%20LPPS%20News:&url=',
    icon: faTwitter
  },
  {
    label: 'Reddit',
    url: 'https://www.reddit.com/submit?title=%40PUBG%20LPPS%20News&url=',
    icon: faRedditAlien
  }
]
