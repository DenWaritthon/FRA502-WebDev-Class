import React, { useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';

import LightEffect from './components/LightEffect';
import Floor from './components/Floor';

import TorusKnot from './components/TorusKnot';
import Ctransformed from './components/Ctransformed';
import Bunny from './components/Bunny';
import Computer from './components/Computer';

export default function Scene() {
  useEffect(() => {
    RectAreaLightUniformsLib.init();
  }, []);

  return (
    <>
      <ambientLight intensity={0.02} />

      <LightEffect />
      <Floor />

      <TorusKnot />
      <Ctransformed />
      <Bunny />
      <Computer />


      <OrbitControls enableDamping target={[0, 6, 0]} />
    </>
  );
}