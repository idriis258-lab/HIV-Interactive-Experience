import type { SceneId } from '@/config/scenes'

export interface Reference {
  id: string
  sceneId: SceneId
  authors: string
  title: string
  source: string
  year: number
  doi?: string
  url?: string
}

/**
 * Intentionally empty in Phase 0. References are added only after a source has
 * been verified against the chapter text. No citation is fabricated here.
 */
export const REFERENCES: readonly Reference[] = []

export const REFERENCE_POLICY = {
  publishedCount: REFERENCES.length,
  reviewRequired: true,
  noteKey: 'planned.referencesBody',
} as const
