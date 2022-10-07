import { NextApiRequest, NextApiResponse } from 'next'
import * as Yup from 'yup'
import { getEvents } from '../../../services/google-sheets-client'

const validationSchema = Yup.object().shape({
  lang: Yup.string().required()
})

const featured = async (req: NextApiRequest, res: NextApiResponse) => {
  let data = await getEvents()

  const formatName = (name: string) => {
    const pattern = /\s/g
    return name.replace(pattern, '-').toLowerCase()
  }

  try {
    await validationSchema.validate(req.query)
    const lang = req.query.lang

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

    let result = data
    if (lang) {
      result = data.filter((item) => {
        if (lang === item.location && item.is_featured === 'TRUE') {
          return item
        }
      })
    }

    //Handle cases when there are no featured items for a specific language.
    //Treate the first item as featured tournament.
    if (lang && !result[0]) {
      result = data.filter((item) => item.location === lang)
    }

    let returns = {}
    if (result[0]) returns = result[0]

    res.status(200).json(returns)
  } catch (error) {
    res.status(400).json(error)
  }
}

export default featured
