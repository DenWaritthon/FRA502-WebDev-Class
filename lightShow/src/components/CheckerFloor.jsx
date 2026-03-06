import React, { useMemo } from 'react';
import * as THREE from 'three';

export default function CheckerFloor() {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 2;
    canvas.height = 2;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 2, 2);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, 1, 1);
    ctx.fillRect(1, 1, 1, 1);

    const texture = new THREE.CanvasTexture(canvas);
    texture.repeat.set(200, 200);
    texture.magFilter = THREE.NearestFilter;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.colorSpace = THREE.SRGBColorSpace;

    return texture;
  }, []);

  return (
    <mesh receiveShadow position={[0, 0, 0]}>
      <boxGeometry args={[2000, 0.1, 2000]} />
      <meshStandardMaterial map={texture} color="#444444" />
    </mesh>
  );
}