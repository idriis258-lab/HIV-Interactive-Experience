import { ShieldCheck } from 'lucide-react'
import type { SceneDefinition } from '@/config/scenes'

export const preventionScene = {
  id: 'prevention',
  number: 9,
  kind: 'chapter',
  status: 'planned',
  phase: 3,
  accent: 'cyan',
  icon: ShieldCheck,
  titleKey: 'chapter.prevention.title',
  scopeKey: 'chapter.prevention.scope',
} satisfies SceneDefinition
