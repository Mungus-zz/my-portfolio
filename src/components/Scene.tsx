import { useFrame } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';
import Html from './html';
import { Scroll, ScrollControls } from '@react-three/drei';
import Particles from './Particles';
import Objects from './Objects';
import ModelScene from '../cameraview/ModelScene';

const Scene: React.FC = () => {
  useFrame(({ mouse, camera }) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 1, 0.03);
    // Adjust the camera's y position to be lower
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -5, 0.01);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, Math.max(5, Math.abs(mouse.x * mouse.y * 8)), 0.01);
    // Rotate the camera to point upwards
    camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, Math.PI / 6, 0.001);
    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, mouse.x * -Math.PI * 0.025, 0.001);
  });

  return (
    <ScrollControls pages={3}>
      <Scroll>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <Particles />
        <Objects />
        <ModelScene /> {/* This is the component that renders the 3D model */}
      </Scroll>
      <Scroll html>
        <Html />
      </Scroll>
    </ScrollControls>
  )
}

export default Scene;
