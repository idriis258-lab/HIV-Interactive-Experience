import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { MathUtils } from 'three'

/**
 * A very slow camera drift with a restrained pointer parallax. The camera is
 * stationary when motion is reduced.
 */
export function useCameraDrift(animate: boolean): void {
  const { camera } = useThree()
  const basePosition = useRef(camera.position.clone())

  useFrame((state, delta) => {
    if (!animate) return

    const elapsed = state.clock.elapsedTime
    const targetX =
      basePosition.current.x +
      state.pointer.x * 0.32 +
      Math.sin(elapsed * 0.12) * 0.08
    const targetY =
      basePosition.current.y +
      state.pointer.y * 0.18 +
      Math.cos(elapsed * 0.1) * 0.06

    camera.position.x = MathUtils.damp(camera.position.x, targetX, 2.1, delta)
    camera.position.y = MathUtils.damp(camera.position.y, targetY, 2.1, delta)
    camera.lookAt(0, 0, 0)
  })
}
