import { Environment, useGLTF, ContactShadows, PresentationControls, MeshReflectorMaterial, Text, Float, Html, PivotControls, TransformControls, OrbitControls } from '@react-three/drei'
import { button, useControls } from 'leva'
import { useRef } from 'react'
import { Perf } from 'r3f-perf'
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import CustomObject from "./CustomObject.jsx"

// extend({ OrbitControls })

export default function Experience() {
  const computer = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf')
  const { perfVisible } = useControls({
    perfVisible: true
  })
  const { position, color, visible } = useControls('sphere', {
    position: {
      value: { x: -2, y: 0, z: 0 },
      step: 0.01
    },
    color: 'hsl(100deg, 100%, 50%)',
    visible: true,
    myInterval: { min: 0, max: 10, value: [4, 5] },
    clickMe: button(() => { console.log('ok') }),
    choice: { options: ['a', 'b', 'c'] }
  })
  const { scale } = useControls('cube', {
    scale: {
      value: 1.5,
      step: 0.01,
      min: 0,
      max: 5
    }
  })

  const groupRef = useRef()
  const cube = useRef()
  const sphere = useRef()

  return <>
    {perfVisible ? <Perf position='top-left' /> : null}
    <OrbitControls makeDefault />

    <directionalLight position={[1, 2, 3]} intensity={4.5} />
    <ambientLight intensity={1.5} />

    <group ref={groupRef}>
      <mesh ref={cube} position-x={2} scale={scale}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>

      <mesh ref={sphere} position={[position.x, position.y, position.z]} visible={visible}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={color} />
        <PivotControls
          anchor={[0, 0, 0]}
          depthTest={false}
          lineWidth={4}
          axisColors={['red', 'green', 'blue']}
          scale={100}
          fixed={true}
        />
        <Html
          position={[1, 1, 0]}
          wrapperClass="label"
          center
          distanceFactor={6}
          occlude={[sphere, cube]}
        >That's a sphere </Html>
      </mesh>

      <TransformControls object={cube} mode="rotate" />

      <TransformControls object={sphere} mode="translate" />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.5}
          color="greenyellow"
        />
      </mesh>
      <Float
        speed={5}
        floatIntensity={2}
      >
        <Text
          font="./BitcountPropDoubleInk-Regular.woff"
          fontSize={1}
          color="salmon"
          position-y={2}
          maxWidth={2}
          textAlign='center'
        >
          Web Programming
        </Text>
      </Float>
    </group>

    <Environment preset="city" />
    <PresentationControls
      global rotation={[0.13, 0.1, 0]} polar={[- 0.4, 0.2]} azimuth={[- 1, 0.75]}
      config={{ mass: 2, tension: 400 }} snap={{ mass: 4, tension: 400 }}
    >
      <Float rotationIntensity={0.4} >
        <primitive
          object={computer.scene}
          position-y={- 1.2}
          rotation-x={0.13}
        >
          <Html
            transform
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            position={[0, 1.56, - 1.4]}
            rotation-x={- 0.256}
          >
            <iframe src="https://fibo.kmutt.ac.th" />
          </Html>
        </primitive>
      </Float>
    </PresentationControls>
    <ContactShadows position-y={- 1.4} opacity={0.4} scale={5} blur={2.4} />
    <Text
      font="./BitcountPropDoubleInk-Regular.woff"
      fontSize={1}
      color="salmon"
      position={[2, 0.75, 0.75]}
      rotation-y={- 1.25}
      maxWidth={2}
      textAlign='center'
    >
      FIBO KMUTT
    </Text>
  </>
}