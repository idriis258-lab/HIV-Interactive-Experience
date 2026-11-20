import { Target } from 'lucide-react'
import type { SceneDefinition } from '@/config/scenes'

export const cd4Scene = {
  id: 'cd4',
  number: 3,
  kind: 'chapter',
  status: 'planned',
  phase: 2,
  accent: 'cyan',
  icon: Target,
  titleKey: 'chapter.cd4.title',
  scopeKey: 'chapter.cd4.scope',
} satisfies SceneDefinition
