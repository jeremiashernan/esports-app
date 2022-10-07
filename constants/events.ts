import TalentAvatar from '../public/images/events/tem-talent-avatar.png'
import eventLogo from '../public/images/events/tmp-event-logo.png'
import organizerLogo from '../public/images/events/tmp-organizer.png'
import runnerUpLogo from '../public/images/events/tmp-runner.png'
import winnerLogo from '../public/images/events/tmp-winner.png'

const description =
  'Lorem ipsum dolores set amet conquis adoes set amet lorem ipsum dolores. Amet conquis adoes set amet lorem ipsum dolores.'

const item = 'Lorem ipsum dolores set amet'

const prizeDescription =
  'Lorem ipsum dolores set amet conquis adoes set amet lorem ipsum dolores.'

export type Event = {
  name: string
  description?: string
  logo: StaticImageData
  prize: number
  date: {
    start: string
    end: string
  }
  region: {
    country: string
    locale: string
  }
  organizer?: {
    name: string
    logo: StaticImageData
  }
  winner?: {
    name: string
    logo: StaticImageData
  }
  runnerUp?: {
    name: string
    logo: StaticImageData
  }
}

export type Tournament = {
  title: string
  type: string
  description: string
  items: string[]
}

export type Tournaments = {
  tournaments: Tournament[]
}

export const featuredEvent: Event = {
  name: 'LVUP SHOWDOWN: 2021 Season Final',
  logo: eventLogo,
  description,
  prize: 50000,
  date: {
    start: '2022-01-03',
    end: '2022-02-03'
  },
  region: {
    country: 'US',
    locale: 'NA'
  }
}

export const activeEvents: Event = {
  name: 'PUBG Mobile Club Open - Spring Split 2022',
  logo: eventLogo,
  prize: 50000,
  date: {
    start: '2022-01-03',
    end: '2022-02-15'
  },
  region: {
    country: 'US',
    locale: 'NA'
  },
  organizer: {
    name: 'ESL',
    logo: organizerLogo
  }
}

export const completedEvents: Event = {
  name: 'PUBG Mobile Club Open - Spring Split 2021',
  logo: eventLogo,
  prize: 50000,
  date: {
    start: '2021-10-13',
    end: '2021-12-05'
  },
  region: {
    country: 'BR',
    locale: 'NA'
  },
  organizer: {
    name: 'ESL',
    logo: organizerLogo
  },
  winner: {
    name: 'TI',
    logo: winnerLogo
  },
  runnerUp: {
    name: 'CLD9',
    logo: runnerUpLogo
  }
}

export const tournamentEvents: Tournaments = {
  tournaments: [
    {
      title: 'Weekly Survival',
      type: 'survival',
      description,
      items: [item, item, item]
    },
    {
      title: 'Wild Card',
      type: 'wild',
      description,
      items: [item, item, item]
    }
  ]
}

export type PrizePool = {
  total: {
    value: number
    description: string
  }
  bonus: {
    value: number
    description: string
  }
}

export type Prize = {
  value: number
  position: number
}

export type Prizes = {
  highlight: number
  prizes: Prize[]
}

export const PrizePools: PrizePool = {
  total: {
    value: 500000,
    description: prizeDescription
  },
  bonus: {
    value: 6000,
    description: prizeDescription
  }
}

export const PrizeLists: Prizes = {
  highlight: 3,
  prizes: Array.from(Array(16).keys()).map((i) => ({
    value: 1000,
    position: i + 1
  }))
}

export type BroadcastTalent = {
  name: string
  avatar: StaticImageData
}

export type Talents = {
  talents: BroadcastTalent[]
}

export const broadcastTalents: Talents = {
  talents: Array.from(Array(7).keys()).map(() => ({
    name: 'Cameron Davis',
    avatar: TalentAvatar
  }))
}

export type Grenade = {
  id: number
  amount: number
}

export type Equipment = {
  rifle: string
  pistol: string
  bag: boolean
  helmet: boolean
  armor: boolean
  grenade: Grenade[]
}

export type Member = {
  id: number
  name: string
  point1: number
  point2: number
  health: number
  energy: number
  equipment: Equipment
}

export type Team = {
  logo: StaticImageData
  color: string
  position: number
  title: string
  status1: boolean
  status2: boolean
  members: Member[]
}

export const Teams: Array<Team> = Array.from(Array(8).keys()).map((i) => ({
  title: 'Cloud 9 Esports',
  color: Math.floor(Math.random() * 16777215).toString(16),
  logo: runnerUpLogo,
  position: i + 1,
  status1: i === 0,
  status2: false,
  members: Array.from(Array(4).keys()).map((j) => ({
    id: j + 1,
    name: 'Player Name',
    point1: 0,
    point2: 60,
    health: 85,
    energy: 90,
    equipment: {
      rifle: 'SLR',
      pistol: 'Beryl',
      bag: true,
      helmet: true,
      armor: false,
      grenade: Array.from(Array(8).keys()).map((k) => ({
        id: k + 1,
        amount: Math.floor(Math.random() * 5)
      }))
    }
  }))
}))
