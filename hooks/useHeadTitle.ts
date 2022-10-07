import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'

const useHeadTitle = (title?: string) => {
  const { t } = useTranslation()
  const [newTitle, setNewTitle] = useState('')

  useEffect(() => {
    setNewTitle(
      title ? `${title} - ${t('common:seo.title')}` : t('common:seo.title')
    )
  }, [t, title])

  return newTitle
}

export default useHeadTitle
