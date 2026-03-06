import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ fov: 45, position: [0, 10, 30] }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}