import { Share2 } from 'lucide-react'
import type { SceneDefinition } from '@/config/scenes'

export const transmissionScene = {
  id: 'transmission',
  number: 8,
  kind: 'chapter',
  status: 'planned',
  phase: 3,
  accent: 'electric',
  icon: Share2,
  titleKey: 'chapter.transmission.title',
  scopeKey: 'chapter.transmission.scope',
} satisfies SceneDefinition
