import { NotFoundView } from '@/components/presentation/NotFoundView'
import { PlannedChapterView } from '@/components/presentation/PlannedChapterView'
import { ProgramView } from '@/components/presentation/ProgramView'
import { getScene } from '@/config/scenes'
import type { Route } from '@/hooks/useHashRoute'
import { IntroScene } from '@/scenes/intro/IntroScene'

interface RouteViewProps {
  route: Route
  onOpenAbout: () => void
}

export function RouteView({ route, onOpenAbout }: RouteViewProps) {
  switch (route.name) {
    case 'home':
      return <IntroScene onOpenAbout={onOpenAbout} />

    case 'program':
      return <ProgramView onOpenAbout={onOpenAbout} />

    case 'chapter': {
      const scene = getScene(route.sceneId)
      if (scene.id === 'intro') {
        return <IntroScene onOpenAbout={onOpenAbout} />
      }
      // Additional ready scenes will be mounted here as they enter production.
      return <PlannedChapterView scene={scene} />
    }

    case 'credits':
      return <PlannedChapterView scene={getScene('credits')} />

    case 'not-found':
      return <NotFoundView />
  }
}
