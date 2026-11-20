import type { LucideIcon } from 'lucide-react'
import type { TranslationKey } from '@/content/translations'
import { introScene } from '@/scenes/intro/scene'
import { virusScene } from '@/scenes/virus/scene'
import { cd4Scene } from '@/scenes/cd4/scene'
import { infectionScene } from '@/scenes/infection/scene'
import { lifecycleScene } from '@/scenes/lifecycle/scene'
import { immunityScene } from '@/scenes/immunity/scene'
import { hivAidsScene } from '@/scenes/hiv-aids/scene'
import { transmissionScene } from '@/scenes/transmission/scene'
import { preventionScene } from '@/scenes/prevention/scene'
import { diagnosisScene } from '@/scenes/diagnosis/scene'
import { treatmentScene } from '@/scenes/treatment/scene'
import { stigmaScene } from '@/scenes/stigma/scene'
import { quizScene } from '@/scenes/quiz/scene'
import { creditsScene } from '@/scenes/credits/scene'

export type SceneId =
  | 'intro'
  | 'virus'
  | 'cd4'
  | 'infection'
  | 'lifecycle'
  | 'immunity'
  | 'hiv-aids'
  | 'transmission'
  | 'prevention'
  | 'diagnosis'
  | 'treatment'
  | 'stigma'
  | 'quiz'
  | 'credits'

export type SceneKind = 'chapter' | 'coda'
export type SceneStatus = 'ready' | 'planned'
export type SceneAccent = 'crimson' | 'cyan' | 'electric' | 'bone'

export interface SceneDefinition {
  id: SceneId
  number: number | null
  kind: SceneKind
  status: SceneStatus
  phase: number
  accent: SceneAccent
  icon: LucideIcon
  titleKey: TranslationKey
  scopeKey: TranslationKey
}

const REGISTERED_SCENES: readonly SceneDefinition[] = [
  introScene,
  virusScene,
  cd4Scene,
  infectionScene,
  lifecycleScene,
  immunityScene,
  hivAidsScene,
  transmissionScene,
  preventionScene,
  diagnosisScene,
  treatmentScene,
  stigmaScene,
  quizScene,
  creditsScene,
]

export const SCENES: readonly SceneDefinition[] = [...REGISTERED_SCENES].sort((a, b) => {
  if (a.kind !== b.kind) return a.kind === 'chapter' ? -1 : 1
  return (a.number ?? 99) - (b.number ?? 99)
})

export const CHAPTERS: readonly SceneDefinition[] = SCENES.filter(
  (scene) => scene.kind === 'chapter',
)

export const CODA: SceneDefinition = creditsScene

export const SCENE_MAP: Readonly<Record<SceneId, SceneDefinition>> = SCENES.reduce(
  (map, scene) => {
    map[scene.id] = scene
    return map
  },
  {} as Record<SceneId, SceneDefinition>,
)

const SCENE_IDS = new Set<string>(SCENES.map((scene) => scene.id))

export function isSceneId(value: string): value is SceneId {
  return SCENE_IDS.has(value)
}

export function getScene(id: SceneId): SceneDefinition {
  return SCENE_MAP[id]
}

export function getChapterPosition(id: SceneId): number {
  return CHAPTERS.findIndex((scene) => scene.id === id)
}

export function getAdjacentChapters(id: SceneId): {
  previous: SceneDefinition | null
  next: SceneDefinition | null
} {
  const index = getChapterPosition(id)
  if (index === -1) {
    return { previous: null, next: null }
  }
  return {
    previous: CHAPTERS[index - 1] ?? null,
    next: CHAPTERS[index + 1] ?? null,
  }
}

export function sceneHref(id: SceneId): string {
  if (id === 'intro') return '#/'
  if (id === 'credits') return '#/credits'
  return `#/chapter/${id}`
}

export function sceneNumber(id: SceneId): string {
  const scene = getScene(id)
  return scene.number === null ? '—' : String(scene.number).padStart(2, '0')
}
