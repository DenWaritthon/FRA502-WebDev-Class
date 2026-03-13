import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Text } from '@react-three/drei';

export default function Ctransformed() {
  const meshRef = useRef();


  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x += delta * 0.5;
    }
  });

  const { scene } = useGLTF('/c-transformed.glb');

  return (
    <>
      <primitive
        ref={meshRef}
        object={scene}
        position={[-6, 6, -6]}
        scale={[2.5, 2.5, 2.5]}
        castShadow />
      <Text
        font="./BitcountPropDouble-Regular.woff"
        fontSize={1.5}
        color='#ffffff'
        position={[-6, 12, -6]}
        maxWidth={2}
        textAlign='center'
      >
        CTransformed
      </Text>
    </>
  );
}