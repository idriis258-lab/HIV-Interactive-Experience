import { Sparkles } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useCameraDrift } from '@/three/animations/useCameraDrift'
import { createParticleTexture } from '@/three/materials/createParticleTexture'

interface AbstractMolecularFieldProps {
  animate?: boolean
}

interface PointField {
  positions: Float32Array
  colors: Float32Array
}

const CRIMSON = new THREE.Color('#d21f3c')
const CRIMSON_DEEP = new THREE.Color('#8e0e22')
const CYAN = new THREE.Color('#5fe3e0')
const BONE = new THREE.Color('#f4f1ec')
const MIST = new THREE.Color('#a09d99')

function createSphereField(count: number, radius: number): PointField {
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const goldenAngle = Math.PI * (3 - Math.sqrt(5))

  for (let index = 0; index < count; index += 1) {
    const y = 1 - (index / (count - 1)) * 2
    const ringRadius = Math.sqrt(1 - y * y)
    const theta = goldenAngle * index
    const jitter = 0.84 + Math.random() * 0.3

    const x = Math.cos(theta) * ringRadius * radius * jitter
    const nextY = y * radius * jitter
    const z = Math.sin(theta) * ringRadius * radius * jitter

    positions[index * 3] = x
    positions[index * 3 + 1] = nextY
    positions[index * 3 + 2] = z

    const random = Math.random()
    const color =
      random < 0.045 ? CYAN : random < 0.11 ? BONE : random < 0.56 ? CRIMSON : CRIMSON_DEEP
    const shade = 0.48 + Math.random() * 0.52

    colors[index * 3] = color.r * shade
    colors[index * 3 + 1] = color.g * shade
    colors[index * 3 + 2] = color.b * shade
  }

  return { positions, colors }
}

function createDustField(count: number): PointField {
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  for (let index = 0; index < count; index += 1) {
    positions[index * 3] = (Math.random() - 0.5) * 15
    positions[index * 3 + 1] = (Math.random() - 0.5) * 9
    positions[index * 3 + 2] = (Math.random() - 0.5) * 10 - 1

    const color = Math.random() < 0.12 ? CYAN : Math.random() < 0.5 ? BONE : MIST
    const shade = 0.35 + Math.random() * 0.45

    colors[index * 3] = color.r * shade
    colors[index * 3 + 1] = color.g * shade
    colors[index * 3 + 2] = color.b * shade
  }

  return { positions, colors }
}

const RINGS = [
  { radius: 2.55, rotation: [1.16, 0.18, 0.08] as const, color: '#d21f3c', opacity: 0.24 },
  { radius: 2.94, rotation: [1.42, -0.34, 0.42] as const, color: '#5fe3e0', opacity: 0.13 },
  { radius: 3.34, rotation: [0.98, 0.52, -0.24] as const, color: '#f4f1ec', opacity: 0.08 },
]

export function AbstractMolecularField({ animate = true }: AbstractMolecularFieldProps) {
  const groupRef = useRef<THREE.Group>(null)
  const dustRef = useRef<THREE.Points>(null)
  const texture = useMemo(() => createParticleTexture(), [])
  const sphere = useMemo(() => createSphereField(1900, 2.08), [])
  const dust = useMemo(() => createDustField(420), [])

  useCameraDrift(animate)

  useFrame((state, delta) => {
    if (!animate) return

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.026
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.075) * 0.055
    }

    if (dustRef.current) {
      dustRef.current.rotation.y -= delta * 0.006
    }
  })

  return (
    <>
      <fog attach="fog" args={['#050506', 7.5, 19]} />

      <group ref={groupRef}>
        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[sphere.positions, 3]} />
            <bufferAttribute attach="attributes-color" args={[sphere.colors, 3]} />
          </bufferGeometry>
          <pointsMaterial
            map={texture}
            size={0.058}
            sizeAttenuation
            vertexColors
            transparent
            opacity={0.92}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            alphaTest={0.01}
          />
        </points>

        {RINGS.map((ring) => (
          <mesh key={ring.radius} rotation={ring.rotation}>
            <ringGeometry args={[ring.radius - 0.0035, ring.radius + 0.0035, 192]} />
            <meshBasicMaterial
              color={ring.color}
              transparent
              opacity={ring.opacity}
              side={THREE.DoubleSide}
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        ))}
      </group>

      <points ref={dustRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dust.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[dust.colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          map={texture}
          size={0.03}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.38}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <sprite scale={[9, 9, 1]} position={[0, 0, -2.8]}>
        <spriteMaterial
          map={texture}
          color="#d21f3c"
          transparent
          opacity={0.22}
          depthWrite={false}
          depthTest={false}
          blending={THREE.AdditiveBlending}
        />
      </sprite>

      <sprite scale={[4.6, 4.6, 1]} position={[1.8, -1.2, -1.4]}>
        <spriteMaterial
          map={texture}
          color="#5fe3e0"
          transparent
          opacity={0.09}
          depthWrite={false}
          depthTest={false}
          blending={THREE.AdditiveBlending}
        />
      </sprite>

      <Sparkles
        count={90}
        scale={[12, 7, 9]}
        size={1.3}
        speed={animate ? 0.16 : 0}
        opacity={0.32}
        color="#f4f1ec"
        noise={0.8}
      />
    </>
  )
}
