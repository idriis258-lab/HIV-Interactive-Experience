import { ScanLine } from 'lucide-react'
import type { SceneDefinition } from '@/config/scenes'

export const diagnosisScene = {
  id: 'diagnosis',
  number: 10,
  kind: 'chapter',
  status: 'planned',
  phase: 3,
  accent: 'electric',
  icon: ScanLine,
  titleKey: 'chapter.diagnosis.title',
  scopeKey: 'chapter.diagnosis.scope',
} satisfies SceneDefinition
