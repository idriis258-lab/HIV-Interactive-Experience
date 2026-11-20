export const SITE = {
  name: 'HIV — The Ultimate Interactive Experience',
  shortName: 'HIV',
  wordmark: 'HIV',
  tagline: 'Understanding the Virus. Exploring the Science. Breaking the Stigma.',
  description:
    'A cinematic, evidence-led interactive experience about HIV — from molecular biology to treatment, prevention and the end of stigma.',
  version: '0.1.0',
  phase: 0,
  totalChapters: 13,
  totalLocales: 3,
  format: '16:9',
  repository: 'https://github.com/idriis258-lab/HIV-Interactive-Experience',
} as const

export const PROJECT_PHASES = [
  { phase: 0, label: 'Foundation', status: 'complete' },
  { phase: 1, label: 'Core experience', status: 'planned' },
  { phase: 2, label: 'Science chapters', status: 'planned' },
  { phase: 3, label: 'Clinical & human chapters', status: 'planned' },
  { phase: 4, label: 'Assessment & credits', status: 'planned' },
] as const
