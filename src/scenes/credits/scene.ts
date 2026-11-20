import { ScrollText } from 'lucide-react'
import type { SceneDefinition } from '@/config/scenes'

export const creditsScene = {
  id: 'credits',
  number: null,
  kind: 'coda',
  status: 'planned',
  phase: 4,
  accent: 'bone',
  icon: ScrollText,
  titleKey: 'chapter.credits.title',
  scopeKey: 'chapter.credits.scope',
} satisfies SceneDefinition
