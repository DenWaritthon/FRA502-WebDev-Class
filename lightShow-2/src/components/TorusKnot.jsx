import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export default function TorusKnot() {
  const fontUrl = `${import.meta.env.BASE_URL}BitcountPropDouble-Regular.woff`;
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.35;
      meshRef.current.rotation.x += delta * 0.25;
    }
  });

  return (
    <>
      <mesh ref={meshRef} position={[0, 6, 6]} castShadow>
        <torusKnotGeometry args={[1.5, 0.5, 200, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={0} metalness={0} />
      </mesh>
      <Text
        font={fontUrl}
        fontSize={1.5}
        color='#ffffff'
        position={[0, 12, 6]}
        maxWidth={2}
        textAlign='center'
      >
        TorusKnot
      </Text>
    </>

  );
}