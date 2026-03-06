import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function RectLightRig() {
  const rectLight1 = useRef();
  const rectLight2 = useRef();
  const rectLight3 = useRef();

  useFrame((_, delta) => {
    if (rectLight1.current) rectLight1.current.rotation.y -= delta;
    if (rectLight2.current) rectLight2.current.rotation.y += delta * 0.5;
    if (rectLight3.current) rectLight3.current.rotation.y += delta;
  });

  return (
    <>
      <rectAreaLight ref={rectLight1} args={[0xff0000, 5, 4, 10]} position={[-5, 6, 5]} />
      <rectAreaLight ref={rectLight2} args={[0x00ff00, 5, 4, 10]} position={[0, 6, 5]} />
      <rectAreaLight ref={rectLight3} args={[0x0000ff, 5, 4, 10]} position={[5, 6, 5]} />
    </>
  );
}