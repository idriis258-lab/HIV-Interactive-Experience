import { CircleQuestionMark } from 'lucide-react'
import type { SceneDefinition } from '@/config/scenes'

export const quizScene = {
  id: 'quiz',
  number: 13,
  kind: 'chapter',
  status: 'planned',
  phase: 4,
  accent: 'bone',
  icon: CircleQuestionMark,
  titleKey: 'chapter.quiz.title',
  scopeKey: 'chapter.quiz.scope',
} satisfies SceneDefinition
