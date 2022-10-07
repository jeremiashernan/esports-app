import { google } from 'googleapis'

const GOOGLE_SHEETS_PRIVATE_KEY =
  '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCicCA7kVmkHb+o\nwMSSqB4sF4hh0+Yge4tE3de9jh/nwehMlkKzxUpoEdCp8lXI3pDIixaDRKSdq1Q8\nDyGVuZf/hZR8scOQEnE5Rbr0bnd/7YY4f0nAMqCn6OKML9m+GfS9YxYV2NIos0kF\nz9ZwEIXJAZlmqiR7Y0vF1kS2u4gZoxXJ7sHhc0vYmu00Ibh/MCeqU7LNS+FOaELv\nMDpYjM4RY5YT2JOSMYN2qNWX+YDzd7Zj2NxwmUhuxOlFprbti73eoRHQHnmCZBsg\n357WkMSr3AXmE2GmnH1Mf5PFCX0qpChc2EdvOv5d/4F4JKfpQFyP5LRFotnq4I4k\n1WDR21ydAgMBAAECggEAERrHeh5LFyn+xZFO4baMPs5XkR2UDPWVa7IEhrRRjcDw\naigka/Opax39H/ghql4tVsC2pSn0P5oL66sYOUDqzYBOa3b4hdI7U/GQxy5erPzg\n9lAI/xEVs7ilKmfbgNYQ3GRzrec/8gM2/EKvbOuAevMNKS9fWhLRpspyP9+tbC2C\nKovkNUeginBFDyn0hLvgZcAYhaoJbpMKUetKur6FPNo1V7R7bdEbnx3QjlWKzq9o\nbpUeqFRnIpd8OeTFh/5a/GkcYjYwS3ZRiw25N0LaNdtd+V1PgzGcLKfwH4oLlwWD\nJIoM2Uvp0AAuN2GoiR+5G3j0fALvGLiYCbyAQG0IzQKBgQDMilEl7+OaYhlh4eVZ\n6x/OoISx/vQm4d2PQvBpSjIXJwDTerNR6NMF4FTPtwK1Q4JpnlZK6ycoXQiSrPNt\nktO1Kio2v/6e6bp5wO57gIPVlD7t/SDmIh5AOnEBRGdFP2diuqfewyk4sZ6gjT/m\nPkdecwT9ghkxCnp7LIRzIFsDKwKBgQDLTie6GKqrMPU6eQmrv+8RWG8ZhVqePtJp\nl+9eR4wXDgTAYCwmwX+s4FsVV6F4LPbHhdUsKHsV1LoLiX20PKNfS70MkwPm2drR\nzvXp1nl/JabRn3MGYvQnP4hUbEx8D9jwvL4jeaCphUeIrqd6FJzWYCnx2+5yGTRM\n094nV+dbVwKBgDieLPpAXhNVBkum+RKb2BEdM74FodXFfcvzLpMmm5j3De58L3kD\n5q3gu/lHYnOEfWv5DU/tqcgtgHsBbtys4Pdr9YV0PeoFLr4XHqyHFXcgcw7zm5C4\nbwE+bBt6sM9lTpvwqRkrkpSD7jHpB4AXSzAkzIPT6F8/1EmWOA+aLDdDAoGAWgY1\nmTYq/LslG8tU+PR4jBm4uHhQdBolWhSpLfpIkjzm5biwVEkCnC6MppqzKV/ftuIQ\nTwlt13DnIQy02Qaw4RXMlLDU3XhCaP1X7z/FdQPbJp+Qc5eFvYtodtmt1JG/4nnx\nSAwnlGksD94m0uwlttfGOw7EO0nl2s9GY+2MyOkCgYEAtf4onw1qVRvMmSg20CkZ\nUVAJMna/odQgr0Ymhz37YcL7a/dsAhqwO4NWPmrLD0zf1GP66Nlw2+eiQJyh49/r\ntTLAsUEl0wRCcrmvKGjiLtbATdAtfiQE6JKBlDCdRXbXzt6u0rlJ2HBo7TmB2K/n\nmE+7v+EmScAHW3OAueRYTFY=\n-----END PRIVATE KEY-----\n'
const GOOGLE_SHEETS_CLIENT_EMAIL =
  'roman-pubgesport-api@iron-lodge-308511.iam.gserviceaccount.com'

const loadSheets = async (sheet: string) => {
  const target = ['https://www.googleapis.com/auth/spreadsheets.readonly']
  const jwt = new google.auth.JWT({
    email: GOOGLE_SHEETS_CLIENT_EMAIL,
    key: GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes: target
  })

  const sheets = google.sheets({ version: 'v4', auth: jwt })
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId:
      process.env.SPREADSHEET_ID ||
      '1sJc7HQomH5L1AsdlMKam3lHfSlZPjb3gEeg3X45hmN4',
    range: sheet
  })

  return response.data.values
}

export const getEvents = async () => {
  try {
    const events = await loadSheets(
      process.env.SPREADSHEET_NAME || 'event_list'
    )

    if (events && events.length) {
      const keys = events[0]
      const elements = events
        .slice(1)
        .map((event: string[]) =>
          keys.reduce(
            (prev, key, index) => ({ ...prev, [key]: event[index] }),
            {}
          )
        )
      return elements
    }
  } catch (err) {
    throw new Error()
  }
  return []
}

export const getEventDetails = async () => {
  try {
    const data = await loadSheets('event')
    if (data && data.length) {
      const keys = data[0]
      const events = data
        .slice(1)
        .map((event: string[]) =>
          keys.reduce(
            (prev, key, index) => ({ ...prev, [key]: event[index] }),
            {}
          )
        )
      return events
    }
  } catch (err) {
    throw new Error()
  }
}

export const getTournamentFormat = async () => {
  try {
    const data = await loadSheets('tournament_format')
    if (data && data.length) {
      const keys = data[0]
      const tournament_format = data
        .slice(1)
        .map((event: string[]) =>
          keys.reduce(
            (prev, key, index) => ({ ...prev, [key]: event[index] }),
            {}
          )
        )
      return tournament_format
    }
  } catch (err) {
    throw new Error()
  }
}

export const getFormatItem = async () => {
  try {
    const data = await loadSheets('format_item')
    if (data && data.length) {
      const keys = data[0]
      const format_item = data
        .slice(1)
        .map((event: string[]) =>
          keys.reduce(
            (prev, key, index) => ({ ...prev, [key]: event[index] }),
            {}
          )
        )
      return format_item
    }
  } catch (err) {
    throw new Error()
  }
}

export const getCompanies = async () => {
  try {
    const data = await loadSheets('companies')
    if (data && data.length) {
      const keys = data[0]
      const companies = data
        .slice(1)
        .map((event: string[]) =>
          keys.reduce(
            (prev, key, index) => ({ ...prev, [key]: event[index] }),
            {}
          )
        )
      return companies
    }
  } catch (err) {
    throw new Error()
  }
}

export const getMatches = async () => {
  try {
    const data = await loadSheets('matches')
    if (data && data.length) {
      const keys = data[0]
      const matches = data
        .slice(1)
        .map((event: string[]) =>
          keys.reduce(
            (prev, key, index) => ({ ...prev, [key]: event[index] }),
            {}
          )
        )
      return matches
    }
  } catch (err) {
    throw new Error()
  }
}

export const getTeams = async () => {
  try {
    const data = await loadSheets('teams')
    if (data && data.length) {
      const keys = data[0]
      const teams = data
        .slice(1)
        .map((event: string[]) =>
          keys.reduce(
            (prev, key, index) => ({ ...prev, [key]: event[index] }),
            {}
          )
        )
      return teams
    }
  } catch (err) {
    throw new Error()
  }
}

export const getPlayers = async () => {
  try {
    const data = await loadSheets('players')
    if (data && data.length) {
      const keys = data[0]
      const players = data
        .slice(1)
        .map((event: string[]) =>
          keys.reduce(
            (prev, key, index) => ({ ...prev, [key]: event[index] }),
            {}
          )
        )
      return players
    }
  } catch (err) {
    throw new Error()
  }
}

export const getPrize = async () => {
  try {
    const data = await loadSheets('prize')
    if (data && data.length) {
      const keys = data[0]
      const prize = data
        .slice(1)
        .map((event: string[]) =>
          keys.reduce(
            (prev, key, index) => ({ ...prev, [key]: event[index] }),
            {}
          )
        )
      return prize
    }
  } catch (err) {
    throw new Error()
  }
}

export const getBroadcasts = async () => {
  try {
    const data = await loadSheets('broadcasts')
    if (data && data.length) {
      const keys = data[0]
      const broadcasts = data
        .slice(1)
        .map((event: string[]) =>
          keys.reduce(
            (prev, key, index) => ({ ...prev, [key]: event[index] }),
            {}
          )
        )
      return broadcasts
    }
  } catch (err) {
    throw new Error()
  }
}

export const getLeaderboards = async () => {
  try {
    const data = await loadSheets('leaderboards')
    if (data && data.length) {
      const keys = data[0]
      const leaderboards = data
        .slice(1)
        .map((event: string[]) =>
          keys.reduce(
            (prev, key, index) => ({ ...prev, [key]: event[index] }),
            {}
          )
        )
      return leaderboards
    }
  } catch (err) {
    throw new Error()
  }
}

export const getRounds = async () => {
  try {
    const data = await loadSheets('rounds')
    if (data && data.length) {
      const keys = data[0]
      const rounds = data
        .slice(1)
        .map((event: string[]) =>
          keys.reduce(
            (prev, key, index) => ({ ...prev, [key]: event[index] }),
            {}
          )
        )
      return rounds
    }
  } catch (err) {
    throw new Error()
  }
}

export const getTeamStatus = async () => {
  try {
    const data = await loadSheets('team_status')
    if (data && data.length) {
      const keys = data[0]
      const team_status = data
        .slice(1)
        .map((event: string[]) =>
          keys.reduce(
            (prev, key, index) => ({ ...prev, [key]: event[index] }),
            {}
          )
        )
      return team_status
    }
  } catch (err) {
    throw new Error()
  }
}
