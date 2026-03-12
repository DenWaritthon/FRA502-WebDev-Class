import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Text } from '@react-three/drei';

export default function Bunny() {
  const meshRef = useRef();


  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  const { scene } = useGLTF('/bunny-transformed.glb');

  return (
    <>
      <primitive
        ref={meshRef}
        object={scene}
        position={[6, 3, -6]}
        scale={[3, 3, 3]}
        castShadow />

      <Text
        font="./BitcountPropDouble-Regular.woff"
        fontSize={1.5}
        color= '#ffffff'
        position={[6, 12, -6]}
        maxWidth={2}
        textAlign='center'
      >
        BUNNY
      </Text>
    </>
  );
}