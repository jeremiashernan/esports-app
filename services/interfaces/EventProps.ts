export interface Event {
  tournamentId: string
  start_date: string
  end_date: string
  teams_count: string
  game_mode: string
  location: string
  video_url: string
  platform: string
  region: string
  tournament_logo: string
  title: string
  description: string
  organizer_logo: string
  organizer: string
  prize_currency: string
  prize_amount: string
  bonus_amount: string
  prize_caption: string
  bonus_caption: string
  winner_logo: string
  winner_title: string
  runner_up_logo: string
  runner_up_title: string
  event_type: string
  is_featured: string
}

export interface EventFilter {
  id: 'year' | 'platform' | 'event_type' | 'region'
  values: string[]
}

export interface EventFilterParams {
  limit?: number
  filters?: {
    year?: string[]
    platform?: string
    event_type?: string
    region?: string
  }
  search?: string
  sort?: {
    by: string
    order: number
  }
}
