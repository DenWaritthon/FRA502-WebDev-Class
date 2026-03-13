import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Html } from '@react-three/drei';

export default function Computer() {

  const computer = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf')
  return (
    <>
      <primitive
        object={computer.scene}
        position={[-6, 0.5, 10]}
        scale={[1.5, 1.5, 1.5]}
        rotation-y={0.5}
        castShadow
      >
        <Html
          transform
          distanceFactor={1.17}
          position={[0, 1.56, -1.4]}   // adjust to match screen
          rotation-x={-0.256}
        >
          <iframe
            src="https://youtube.com/embed/LlN8MPS7KQs?si=qJe9HfHeDtCT86H2"
            style={{
              width: "1024px",
              height: "670px",
              border: "none",
              borderRadius: "20px",
              background: "black"
            }}
          />
        </Html>
      </primitive>
    </>
  );
}