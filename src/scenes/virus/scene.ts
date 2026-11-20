import { Atom } from 'lucide-react'
import type { SceneDefinition } from '@/config/scenes'

export const virusScene = {
  id: 'virus',
  number: 2,
  kind: 'chapter',
  status: 'planned',
  phase: 2,
  accent: 'crimson',
  icon: Atom,
  titleKey: 'chapter.virus.title',
  scopeKey: 'chapter.virus.scope',
} satisfies SceneDefinition
