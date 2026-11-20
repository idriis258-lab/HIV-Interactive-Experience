import type { SceneId } from '@/config/scenes'

export type ReviewStatus = 'pending' | 'in-review' | 'approved'

export interface ChapterReview {
  sceneId: SceneId
  status: ReviewStatus
  publishedClaims: number
  referenceCount: number
}

/**
 * The editorial gate is deliberately conservative: no clinical statement is
 * published until it has been drafted, reviewed and cited.
 */
export const MEDICAL_POLICY = {
  reviewStatus: 'pending' as ReviewStatus,
  publishedClaims: 0,
  publishedReferences: 0,
  reviewer: null,
  reviewedAt: null,
  nextReviewPhase: 2,
  disclaimerKey: 'common.noMedicalAdvice',
  integrityKey: 'program.note.scienceBody',
  referencesKey: 'planned.referencesBody',
} as const

export const EDITORIAL_GATE = [
  { id: 'draft', label: 'Editorial draft', status: 'complete' },
  { id: 'medical-review', label: 'Medical review', status: 'pending' },
  { id: 'citation-check', label: 'Citation check', status: 'pending' },
  { id: 'publication', label: 'Publication', status: 'pending' },
] as const

const pending = (sceneId: SceneId): ChapterReview => ({
  sceneId,
  status: 'pending',
  publishedClaims: 0,
  referenceCount: 0,
})

export const CHAPTER_REVIEW: Record<SceneId, ChapterReview> = {
  intro: pending('intro'),
  virus: pending('virus'),
  cd4: pending('cd4'),
  infection: pending('infection'),
  lifecycle: pending('lifecycle'),
  immunity: pending('immunity'),
  'hiv-aids': pending('hiv-aids'),
  transmission: pending('transmission'),
  prevention: pending('prevention'),
  diagnosis: pending('diagnosis'),
  treatment: pending('treatment'),
  stigma: pending('stigma'),
  quiz: pending('quiz'),
  credits: pending('credits'),
}
