import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function LightEffect() {
  const Light1 = useRef();
  const Light2 = useRef();
  const Light3 = useRef();

  useFrame((_, delta) => {
    if (Light1.current) Light1.current.rotation.y -= delta;
    if (Light2.current) Light2.current.rotation.y += delta * 0.5;
    if (Light3.current) Light3.current.rotation.y += delta;
  });

  return (
    <>
      <rectAreaLight ref={Light1} args={[0xFF0000, 5, 4, 20]} position={[-5, 12, 5]} />
      <rectAreaLight ref={Light2} args={[0x00FF00, 5, 4, 20]} position={[0, 12, 5]} />
      <rectAreaLight ref={Light3} args={[0x0073FF, 5, 4, 20]} position={[5, 12, 5]} />
    </>
  );
}