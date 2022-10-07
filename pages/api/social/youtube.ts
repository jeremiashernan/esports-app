import { NextApiRequest, NextApiResponse } from 'next'
import redisClient from '../../../services/redis-client'

const apiURL = 'https://www.googleapis.com/youtube/v3'
const apiKey = process.env.YOUTUBE_API_KEY || ''

const REDIS_TTL_KEY = process.env.REDIS_TTL_KEY || ''

const youtube = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only GET requests allowed' })
    return
  }

  const query = req.query
  let channelId = ''

  if (query['lang'] && apiKey) {
    switch (query.lang) {
      case 'pt':
        channelId = 'UCGX5wOrJduHWrIW1tyovcAg'
        break
      case 'es':
        channelId = 'UCuGuQisul73sJsasINXAKnQ'
        break
      default:
        channelId = 'UCLgYa1O5NodobOaDK6xj5aQ'
    }

    const fetchUrl = `${apiURL}/search?order=date&part=snippet&channelId=${channelId}&maxResults=12&key=${apiKey}`
    const cachedData = await redisClient.get(fetchUrl)

    if (cachedData) {
      return res.json(JSON.parse(cachedData))
    } else {
      const response = await fetch(fetchUrl)
      const apiData = await response.json()
      const ttlValue = parseInt(
        (await redisClient.get(REDIS_TTL_KEY)) || '0',
        10
      )

      await redisClient.set(fetchUrl, JSON.stringify(apiData))
      await redisClient.expire(fetchUrl, ttlValue)

      return res.json(apiData)
    }
  }

  return res.json({})
}

export default youtube
