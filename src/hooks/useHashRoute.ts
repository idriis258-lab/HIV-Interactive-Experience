import { useCallback, useEffect, useState } from 'react'
import { isSceneId, type SceneId } from '@/config/scenes'

export type Route =
  | { name: 'home' }
  | { name: 'program' }
  | { name: 'chapter'; sceneId: SceneId }
  | { name: 'credits' }
  | { name: 'not-found'; path: string }

export function parseRoute(hash: string): Route {
  const path = hash.replace(/^#/, '')

  if (path === '' || path === '/') {
    return { name: 'home' }
  }

  if (path === '/program') {
    return { name: 'program' }
  }

  if (path === '/credits') {
    return { name: 'credits' }
  }

  if (path.startsWith('/chapter/')) {
    const id = decodeURIComponent(path.slice('/chapter/'.length))
    if (isSceneId(id)) {
      if (id === 'credits') return { name: 'credits' }
      return { name: 'chapter', sceneId: id }
    }
  }

  return { name: 'not-found', path }
}

function readRoute(): Route {
  if (typeof window === 'undefined') return { name: 'home' }
  return parseRoute(window.location.hash)
}

export function useHashRoute(): {
  route: Route
  navigate: (href: string) => void
} {
  const [route, setRoute] = useState<Route>(readRoute)

  useEffect(() => {
    const handleHashChange = () => setRoute(readRoute())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigate = useCallback((href: string) => {
    const target = href.startsWith('#') ? href : `#${href}`
    if (window.location.hash === target) {
      setRoute(parseRoute(target))
      return
    }
    window.location.hash = target
  }, [])

  return { route, navigate }
}
