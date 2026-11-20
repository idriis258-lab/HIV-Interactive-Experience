let cachedSupport: boolean | null = null

export function detectWebGLSupport(): boolean {
  if (cachedSupport !== null) return cachedSupport
  if (typeof window === 'undefined') return false

  try {
    const canvas = document.createElement('canvas')
    const context =
      canvas.getContext('webgl2') ??
      canvas.getContext('webgl') ??
      canvas.getContext('experimental-webgl')

    if (!context) {
      cachedSupport = false
      return false
    }

    const loseContext = (context as WebGLRenderingContext).getExtension(
      'WEBGL_lose_context',
    )
    loseContext?.loseContext()

    cachedSupport = true
    return true
  } catch {
    cachedSupport = false
    return false
  }
}

export function useWebGLSupport(): boolean {
  return detectWebGLSupport()
}
