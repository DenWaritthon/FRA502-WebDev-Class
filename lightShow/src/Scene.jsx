import React, { useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import CheckerFloor from './components/CheckerFloor';
import TorusKnot from './components/TorusKnot';
import Title3D from './components/Title3D';
import RectLightRig from './components/RectLightRig';

export default function Scene() {
  useEffect(() => {
    RectAreaLightUniformsLib.init();
  }, []);

  return (
    <>
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.02} />

      <RectLightRig />
      <CheckerFloor />
      <TorusKnot />
      <Title3D />

      <OrbitControls enableDamping target={[0, 6, 0]} />
    </>
  );
}