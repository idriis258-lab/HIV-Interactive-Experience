import { Sparkles } from 'lucide-react'
import type { SceneDefinition } from '@/config/scenes'

export const introScene = {
  id: 'intro',
  number: 1,
  kind: 'chapter',
  status: 'ready',
  phase: 0,
  accent: 'crimson',
  icon: Sparkles,
  titleKey: 'chapter.intro.title',
  scopeKey: 'chapter.intro.scope',
} satisfies SceneDefinition
