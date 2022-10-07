import { useEffect, useState } from 'react'

const useActiveId = (itemIds: string[]) => {
  const [activeId, setActiveId] = useState(``)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )

    itemIds.forEach((id) => {
      observer.observe(<Element>document.getElementById(id))
    })

    return () => {
      itemIds.forEach((id) => {
        document.getElementById(id) &&
          observer.unobserve(<Element>document.getElementById(id))
      })
    }
  }, [itemIds])

  return activeId
}

export default useActiveId
