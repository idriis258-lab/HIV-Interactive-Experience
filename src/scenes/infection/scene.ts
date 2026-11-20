import { Zap } from 'lucide-react'
import type { SceneDefinition } from '@/config/scenes'

export const infectionScene = {
  id: 'infection',
  number: 4,
  kind: 'chapter',
  status: 'planned',
  phase: 2,
  accent: 'crimson',
  icon: Zap,
  titleKey: 'chapter.infection.title',
  scopeKey: 'chapter.infection.scope',
} satisfies SceneDefinition
