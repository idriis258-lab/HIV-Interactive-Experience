import { useEffect } from 'react'
import { SITE } from '@/config/site'

export function useDocumentTitle(title: string): void {
  useEffect(() => {
    document.title = title || SITE.name
  }, [title])
}
