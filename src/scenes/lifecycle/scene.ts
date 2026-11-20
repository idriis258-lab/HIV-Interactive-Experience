import { RefreshCw } from 'lucide-react'
import type { SceneDefinition } from '@/config/scenes'

export const lifecycleScene = {
  id: 'lifecycle',
  number: 5,
  kind: 'chapter',
  status: 'planned',
  phase: 2,
  accent: 'electric',
  icon: RefreshCw,
  titleKey: 'chapter.lifecycle.title',
  scopeKey: 'chapter.lifecycle.scope',
} satisfies SceneDefinition
