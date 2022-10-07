import { NextApiRequest, NextApiResponse } from 'next'
import * as Yup from 'yup'
import { getEvents } from '../../../services/google-sheets-client'

const validationSchema = Yup.object().shape({
  limit: Yup.number(),
  filters: Yup.object().shape({
    year: Yup.array(),
    platform: Yup.string(),
    event_type: Yup.string(),
    region: Yup.string()
  }),
  search: Yup.string(),
  sort: Yup.object().shape({
    by: Yup.string(),
    order: Yup.string()
  })
})

const events = async (req: NextApiRequest, res: NextApiResponse) => {
  let data = await getEvents()
  const params = req.query.params ? JSON.parse(req.query.params.toString()) : {}
  const current_date = new Date()

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
      ? `/events/google/teams/${formatName(item.winner_logo)}`
      : undefined,
    runner_up_logo: item.runner_up_logo
      ? `/events/google/teams/${formatName(item.runner_up_logo)}`
      : undefined
  }))

  data = data.filter((item) => {
    if (item.end_date) {
      const end_date = new Date(item.end_date)
      if (current_date.getTime() > end_date.getTime()) {
        return item
      }
    }
  })

  const removeSameValue = (arr: Array<string>) => {
    arr = arr.filter(function (item, index, inputArray) {
      return inputArray.indexOf(item) == index
    })

    return arr
  }

  const year_value: Array<string> = []
  const platfrom_value: Array<string> = []
  const event_type_value: Array<string> = []
  const region_value: Array<string> = []

  data.forEach((item) => {
    const start_date = new Date(item.start_date)
    year_value.push(start_date.getFullYear().toString())
    platfrom_value.push(item.platform)
    event_type_value.push(item.event_type)
    region_value.push(item.region)
  })

  try {
    await validationSchema.validate(params)
    if (params.filters) {
      if (params.filters.year?.length) {
        data = data.filter((item) => {
          const start_date = new Date(item.start_date)
          if (
            params.filters.year
              .join(',')
              .includes(start_date.getFullYear().toString())
          ) {
            return item
          }
        })
      }

      if (params.filters.platform) {
        data = data.filter((item) => {
          if (params.filters.platform === item.platform) {
            return item
          }
        })
      }

      if (params.filters.event_type) {
        data = data.filter((item) => {
          if (params.filters.event_type === item.event_type) {
            return item
          }
        })
      }

      if (params.filters.region) {
        data = data.filter((item) => {
          if (params.filters.region === item.region) {
            return item
          }
        })
      }
    }

    if (params.search) {
      const re = new RegExp(params.search.toString(), 'gi')

      data = data.filter((item) => {
        if (re.test(item.title)) {
          return item
        }
      })
    }

    //Default sort order is by date.
    const { by = 'start_date', order = 1 } = params.sort || {}
    data = data.sort((eventA, eventB) => {
      const isDate = by === 'start_date'
      const valueA = isDate ? new Date(eventA[by]).getTime() : eventA[by]
      const valueB = isDate ? new Date(eventB[by]).getTime() : eventB[by]

      return (valueA > valueB ? -1 : 1) * order
    })

    const limit = params.limit
      ? data.length < params.limit
        ? data.length
        : params.limit
      : data.length
    const results = data.slice(0, limit)

    const returns = {
      events: results.length ? results : [],
      filters: [
        {
          id: 'year',
          values: removeSameValue(year_value)
        },
        {
          id: 'platform',
          values: removeSameValue(platfrom_value)
        },
        {
          id: 'event_type',
          values: removeSameValue(event_type_value)
        },
        {
          id: 'region',
          values: removeSameValue(region_value)
        }
      ],
      limit,
      count: data.length
    }

    res.status(200).json(returns)
  } catch (error) {
    res.status(400).json(error)
  }
}

export default events
