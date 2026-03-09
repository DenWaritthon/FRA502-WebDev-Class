import { createRoot } from 'react-dom/client'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import './style.css'
const root = createRoot(document.querySelector('#root'))
root.render(
  <>
    <Canvas gl = { {
      antialias: true,
      toneMapping: THREE.ACESFilmicToneMapping } }
          camera={ {
      fov: 45, near: 0.1, far: 200,
      position: [3, 2, 6]} }
    >
      <Experience/>
    </Canvas>
  </>
)