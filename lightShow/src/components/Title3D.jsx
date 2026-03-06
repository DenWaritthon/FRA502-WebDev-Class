import React, { useRef } from 'react';
import { Center, Text3D } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

export default function Title3D() {
  const groupRef = useRef();

  const font = useLoader(
    FontLoader,
    'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json'
  );

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = 2.2 + Math.sin(state.clock.elapsedTime * 1.2) * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, 2.2, 0]}>
      <Center>
        <Text3D
          font={font.data}
          size={0.85}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.015}
          bevelSegments={4}
        >
          Light Show Case
          <meshStandardMaterial color="#ffffff" roughness={0.05} metalness={0} />
        </Text3D>
      </Center>
    </group>
  );
}