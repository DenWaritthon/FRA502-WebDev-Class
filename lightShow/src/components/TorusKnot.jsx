import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function TorusKnot() {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 6, 0]} castShadow>
      <torusKnotGeometry args={[1.5, 0.5, 200, 16]} />
      <meshStandardMaterial color="#ffffff" roughness={0} metalness={0} />
    </mesh>
  );
}