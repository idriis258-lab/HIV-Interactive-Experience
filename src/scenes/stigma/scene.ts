import { Users } from 'lucide-react'
import type { SceneDefinition } from '@/config/scenes'

export const stigmaScene = {
  id: 'stigma',
  number: 12,
  kind: 'chapter',
  status: 'planned',
  phase: 3,
  accent: 'crimson',
  icon: Users,
  titleKey: 'chapter.stigma.title',
  scopeKey: 'chapter.stigma.scope',
} satisfies SceneDefinition
