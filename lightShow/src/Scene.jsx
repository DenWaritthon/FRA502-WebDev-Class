import React, { useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import Floor from './components/Floor';
import TorusKnot from './components/TorusKnot';
import Text from './components/Text';
import LightEffect from './components/LightEffect';

export default function Scene() {
  useEffect(() => {
    RectAreaLightUniformsLib.init();
  }, []);

  return (
    <>
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.02} />

      <LightEffect />
      <Floor />
      <TorusKnot />
      <Text />

      <OrbitControls enableDamping target={[0, 6, 0]} />
    </>
  );
}