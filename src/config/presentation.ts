export const PRESENTATION = {
  design: {
    width: 1920,
    height: 1080,
    aspect: '16 / 9',
  },
  safeArea: {
    x: 'clamp(2rem, 6vw, 7.5rem)',
    y: 'clamp(1.5rem, 4vh, 3.5rem)',
  },
  typeScale: {
    standard: 1,
    presentation: 1.12,
  },
  shortcuts: {
    home: 'H',
    program: 'G',
    presentation: 'P',
    about: '?',
    close: 'Esc',
  },
  presentationQueryParam: 'presentation',
} as const

export const PRESENTATION_QUERY_VALUE = '1'
