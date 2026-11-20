import * as THREE from 'three'

let cachedTexture: THREE.CanvasTexture | null = null

/**
 * A soft radial sprite used by the particle field. Generated locally so the
 * title sequence has no external texture dependency.
 */
export function createParticleTexture(): THREE.CanvasTexture {
  if (cachedTexture) return cachedTexture

  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size

  const context = canvas.getContext('2d')
  if (!context) {
    throw new Error('Unable to create the particle texture: 2D canvas unavailable.')
  }

  const gradient = context.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2,
  )
  gradient.addColorStop(0, 'rgba(255,255,255,1)')
  gradient.addColorStop(0.32, 'rgba(255,255,255,0.82)')
  gradient.addColorStop(0.72, 'rgba(255,255,255,0.16)')
  gradient.addColorStop(1, 'rgba(255,255,255,0)')

  context.fillStyle = gradient
  context.fillRect(0, 0, size, size)

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.needsUpdate = true

  cachedTexture = texture
  return texture
}
