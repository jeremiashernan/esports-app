import useTranslation from 'next-translate/useTranslation'

const useFormatCurrency = (value: number, currency = 'USD') => {
  const { lang } = useTranslation()

  let locale = ''

  switch (lang) {
    case 'es':
      locale = 'es-ES'
      break
    case 'pt':
      locale = 'pt-BR'
      break
    default:
      locale = 'en-US'
      break
  }

  return value
    ? Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(value)
    : '-'
}

export { useFormatCurrency }
