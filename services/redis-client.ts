import { createClient } from 'redis'

const redisClient = createClient({ url: process.env.REDIS_URI })
redisClient.connect()

export default redisClient
