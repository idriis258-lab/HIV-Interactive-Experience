import { useEffect, useState } from 'react'
import { useI18n } from '@/app/providers/I18nProvider'
import { usePresentation } from '@/app/providers/PresentationProvider'
import { AmbientBackground } from '@/components/presentation/AmbientBackground'
import { AboutDialog } from '@/components/presentation/AboutDialog'
import { RouteAnnouncer } from '@/components/presentation/RouteAnnouncer'
import { ExperienceFooter } from '@/components/navigation/ExperienceFooter'
import { ExperienceHeader } from '@/components/navigation/ExperienceHeader'
import { SceneTransition } from '@/components/transitions/SceneTransition'
import { SkipLink } from '@/components/ui/SkipLink'
import { getScene } from '@/config/scenes'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { useHashRoute, type Route } from '@/hooks/useHashRoute'
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts'
import { RouteView } from './RouteView'

function routeKey(route: Route): string {
  if (route.name === 'chapter') return `chapter:${route.sceneId}`
  if (route.name === 'not-found') return `not-found:${route.path}`
  return route.name
}

function sectionTitle(route: Route, t: ReturnType<typeof useI18n>['t']): string {
  switch (route.name) {
    case 'home':
      return t('nav.home')
    case 'program':
      return t('nav.program')
    case 'chapter':
      return t(getScene(route.sceneId).titleKey)
    case 'credits':
      return t('chapter.credits.title')
    case 'not-found':
      return t('error.notFoundTitle')
  }
}

export function Experience() {
  const { t } = useI18n()
  const { togglePresentation } = usePresentation()
  const { route, navigate } = useHashRoute()
  const [aboutOpen, setAboutOpen] = useState(false)

  const currentSection = sectionTitle(route, t)
  const documentTitle =
    route.name === 'home' ? t('meta.title') : `${currentSection} · ${t('meta.title')}`
  const currentRouteKey = routeKey(route)

  useDocumentTitle(documentTitle)

  useKeyboardShortcuts({
    onHome: () => navigate('#/'),
    onProgram: () => navigate('#/program'),
    onPresentation: togglePresentation,
    onAbout: () => setAboutOpen(true),
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentRouteKey])

  return (
    <div className="relative flex min-h-svh flex-col">
      <SkipLink label={t('a11y.skip')} />
      <AmbientBackground />

      <ExperienceHeader route={route} onOpenAbout={() => setAboutOpen(true)} />

      <main
        id="main"
        tabIndex={-1}
        className="relative z-10 flex flex-1 flex-col"
      >
        <SceneTransition routeKey={currentRouteKey}>
          <RouteView route={route} onOpenAbout={() => setAboutOpen(true)} />
        </SceneTransition>
      </main>

      <ExperienceFooter route={route} />

      <AboutDialog open={aboutOpen} onClose={() => setAboutOpen(false)} />
      <RouteAnnouncer
        message={t('a11y.routeAnnouncement', { title: currentSection })}
      />
    </div>
  )
}
