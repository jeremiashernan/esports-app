import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import { scheduleJob } from 'node-schedule'
import { resolve } from 'path'

const pathFile = './public/token.txt'
const defaultToken =
  process.env.INSTAGRAM_API_KEY ||
  'IGQVJXNmVHbmpxSmhvUGdpaGRiZA1JQMHpoVHY5SldzYVhJVVZA2bWFnNUhDanY0VmN5U3lOeHVDczgyLTJYR2kxWG9scXJoeXY4Y2VDWG1vZAFVxeFBic3l0M0V3OExpYUNMcExCNXFLRWhtTFJlVmFJYwZDZD'

const readToken = async () => {
  if (!fs.existsSync(pathFile)) {
    fs.promises.writeFile(pathFile, defaultToken)
  }

  const dir = resolve(pathFile)
  return await fs.promises.readFile(dir, 'utf-8')
}

const getMedias = async (token: string) => {
  const url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url&access_token=${token}`
  const response = await fetch(url)

  return response.json()
}

const setNewToken = async (token: string) => {
  const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`
  const response = await fetch(url)
  const { access_token: newToken } = await response.json()

  fs.promises.writeFile(pathFile, newToken)
}

const instagram = async (req: NextApiRequest, res: NextApiResponse) => {
  scheduleJob('0 0 1 * *', async () => await setNewToken(token))

  const token = await readToken()

  return res.json(await getMedias(token))
}

export default instagram
