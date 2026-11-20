import { HeartPulse } from 'lucide-react'
import type { SceneDefinition } from '@/config/scenes'

export const hivAidsScene = {
  id: 'hiv-aids',
  number: 7,
  kind: 'chapter',
  status: 'planned',
  phase: 3,
  accent: 'crimson',
  icon: HeartPulse,
  titleKey: 'chapter.hiv-aids.title',
  scopeKey: 'chapter.hiv-aids.scope',
} satisfies SceneDefinition
