import { format, formatDistanceToNow, parseISO } from 'date-fns'
import { enUS, es, pt } from 'date-fns/locale'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'

const getLocale = (lang: string) => {
  let locale: Locale

  switch (lang) {
    case 'es':
      locale = es
      break
    case 'pt':
      locale = pt
      break
    default:
      locale = enUS
      break
  }

  return locale
}

const useFormatDate = (date: string, pattern: string) => {
  const { lang } = useTranslation()
  const [newDate, setNewDate] = useState('')
  const locale = getLocale(lang)

  useEffect(() => {
    setNewDate(format(parseISO(date), pattern, { locale }))
  }, [date, locale, pattern])

  return newDate
}

const useFormatDistance = (date: string) => {
  const { lang } = useTranslation()
  const [newDate, setNewDate] = useState('')
  const locale = getLocale(lang)

  useEffect(() => {
    setNewDate(formatDistanceToNow(parseISO(date), { addSuffix: true, locale }))
  }, [date, locale])

  return newDate
}

const useFormatRange = (start: string, end: string) => {
  const { lang } = useTranslation()
  const [newDate, setNewDate] = useState('')
  const locale = getLocale(lang)

  const startDate = parseISO(start)
  const endDate = parseISO(end)

  useEffect(() => {
    if (startDate.getFullYear() === endDate.getFullYear()) {
      setNewDate(
        `${format(startDate, 'LLL d', { locale })} - 
        ${format(endDate, 'LLL d, yyyy', { locale })}`
      )
    } else {
      if (end) {
        setNewDate(
          `${format(startDate, 'LLL d, yy', { locale })} - 
          ${format(endDate, 'LLL d, yy', { locale })}`
        )
      } else {
        setNewDate(`${format(startDate, 'LLL d, yy', { locale })} - `)
      }
    }
  }, [endDate, locale, startDate])

  return newDate
}

export { useFormatDate, useFormatDistance, useFormatRange }
