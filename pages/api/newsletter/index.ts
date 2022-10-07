import { NextApiRequest, NextApiResponse } from 'next'

type BodyProps = {
  name: string
  email: string
  country: string
  lang: string
}

const apiURL = 'https://api.mailjet.com/v3/REST'

const headers: HeadersInit = {
  'Access-Control-Allow-Origin': '*',
  'content-type': 'application/json',
  Authorization:
    'Basic ' +
    Buffer.from(
      `${process.env.MAILJET_API_KEY}:${process.env.MAILJET_SECRET_KEY}`,
      'binary'
    ).toString('base64')
}

const newsletter = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  const body: BodyProps = JSON.parse(req.body)
  let listID = ''

  switch (body.lang) {
    case 'es':
      listID = process.env.MAILJET_LIST_ES || '2472195'
      break
    case 'pt':
      listID = process.env.MAILJET_LIST_PT || '2472196'
      break
    default:
      listID = process.env.MAILJET_LIST_EN || '2472194'
  }

  const response = await fetch(
    `${apiURL}/contactslist/${listID}/managecontact`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({
        Name: body.name,
        Email: body.email,
        Action: 'addnoforce',
        Properties: {
          name: body.name,
          country: body.country
        }
      })
    }
  )

  res.json({
    created: response.status === 201 ? true : false
  })
}

export default newsletter
