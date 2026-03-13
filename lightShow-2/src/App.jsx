import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';

export default function App() {
  return (
    <>
      <Canvas 
        camera={{ fov: 90, position: [0, 10, 18] }}
        gl={{ antialias: true }}>

        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        
      </Canvas>
    </>
  );
}