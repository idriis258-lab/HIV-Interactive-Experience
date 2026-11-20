import { Pill } from 'lucide-react'
import type { SceneDefinition } from '@/config/scenes'

export const treatmentScene = {
  id: 'treatment',
  number: 11,
  kind: 'chapter',
  status: 'planned',
  phase: 3,
  accent: 'cyan',
  icon: Pill,
  titleKey: 'chapter.treatment.title',
  scopeKey: 'chapter.treatment.scope',
} satisfies SceneDefinition
