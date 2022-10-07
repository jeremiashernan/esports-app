import { IncomingMessage } from 'http'

function absoluteUrl(
  req?: IncomingMessage,
  localhostAddress = 'localhost:3000'
) {
  const host =
    (req?.headers ? req.headers.host : window.location.host) || localhostAddress
  let protocol = /^localhost(:\d+)?$/.test(host) ? 'http:' : 'https:'

  if (
    req &&
    req.headers['x-forwarded-proto'] &&
    typeof req.headers['x-forwarded-proto'] === 'string'
  ) {
    protocol = `${req.headers['x-forwarded-proto']}:`
  }

  if (
    req &&
    req.headers['cloudfront-forwarded-proto'] &&
    typeof req.headers['cloudfront-forwarded-proto'] === 'string'
  ) {
    protocol = `${req.headers['cloudfront-forwarded-proto']}:`
  }

  return {
    protocol,
    host,
    origin: protocol + '//' + host
  }
}

export default absoluteUrl
