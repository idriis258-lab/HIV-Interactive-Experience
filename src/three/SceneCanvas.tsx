import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'
import { useTranslation } from '@/app/providers/I18nProvider'
import { CanvasLoading } from '@/components/ui/CanvasLoading'
import { ErrorBoundary } from '@/components/ui/ErrorBoundary'
import { WebGLFallback } from '@/components/ui/WebGLFallback'
import { useWebGLSupport } from '@/hooks/useWebGLSupport'
import { AbstractMolecularField } from '@/three/models/AbstractMolecularField'

interface SceneCanvasProps {
  animate?: boolean
}

export default function SceneCanvas({ animate = true }: SceneCanvasProps) {
  const t = useTranslation()
  const webglSupported = useWebGLSupport()
  const [ready, setReady] = useState(false)
  const [contextLost, setContextLost] = useState(false)
  const removeContextListenerRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    return () => {
      removeContextListenerRef.current?.()
    }
  }, [])

  if (!webglSupported) {
    return <WebGLFallback />
  }

  if (contextLost) {
    return <WebGLFallback reason="context-lost" />
  }

  return (
    <ErrorBoundary fallback={<WebGLFallback />}>
      <div className="absolute inset-0" aria-hidden="true">
        <Canvas
          flat
          dpr={[1, 1.5]}
          frameloop={animate ? 'always' : 'demand'}
          camera={{ position: [0, 0, 7], fov: 42, near: 0.1, far: 100 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          style={{ background: 'transparent' }}
          onCreated={({ gl }) => {
            const handleContextLost = (event: Event) => {
              event.preventDefault()
              setContextLost(true)
            }

            gl.domElement.addEventListener('webglcontextlost', handleContextLost, {
              once: true,
            })
            removeContextListenerRef.current = () => {
              gl.domElement.removeEventListener('webglcontextlost', handleContextLost)
            }

            setReady(true)
          }}
        >
          <Suspense fallback={null}>
            <AbstractMolecularField animate={animate} />
          </Suspense>
        </Canvas>
      </div>

      {!ready && <CanvasLoading />}
      <p className="sr-only">{t('a11y.canvasDescription')}</p>
    </ErrorBoundary>
  )
}
