import { NextApiRequest, NextApiResponse } from 'next'
import { getEvents } from '../../../services/google-sheets-client'

const active = async (req: NextApiRequest, res: NextApiResponse) => {
  let data = await getEvents()
  const currentDate = new Date()

  const formatName = (name: string) => {
    const pattern = /\s/g
    return name.replace(pattern, '-').toLowerCase()
  }

  data = data.map((item) => ({
    ...item,
    tournament_logo: item.tournament_logo
      ? `/events/google/tournament/${formatName(item.tournament_logo)}`
      : undefined,
    organizer_logo: item.organizer_logo
      ? `/events/google/organizer/${formatName(item.organizer_logo)}`
      : undefined,
    winner_logo: item.winner_logo
      ? `/events/google/winner/${formatName(item.winner_logo)}`
      : undefined,
    runner_up_logo: item.runner_up_logo
      ? `/events/google/runner/${formatName(item.runner_up_logo)}`
      : undefined
  }))

  data = data.filter((item) => {
    if (
      !item.end_date ||
      item.end_date === null ||
      item.end_date === undefined
    ) {
      return item
    } else {
      const endDate = new Date(item.end_date)
      const startDate = new Date(item.start_date)
      if (
        currentDate.getTime() <= endDate.getTime() &&
        currentDate.getTime() >= startDate.getTime()
      ) {
        return item
      }
      if (currentDate.getTime() <= startDate.getTime()) {
        return item
      }
    }
  })

  res.status(200).json(data)
}

export default active
