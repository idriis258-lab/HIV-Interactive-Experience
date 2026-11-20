import { Shield } from 'lucide-react'
import type { SceneDefinition } from '@/config/scenes'

export const immunityScene = {
  id: 'immunity',
  number: 6,
  kind: 'chapter',
  status: 'planned',
  phase: 2,
  accent: 'cyan',
  icon: Shield,
  titleKey: 'chapter.immunity.title',
  scopeKey: 'chapter.immunity.scope',
} satisfies SceneDefinition
