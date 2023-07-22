import React from 'react'
import { useFrame } from '@react-three/fiber'
import { Model } from '../components/ErwinModel'

const ModelScene: React.FC = () => {
  useFrame(({ camera }) => {
    camera.lookAt(0, 0, 0)  // Camera will always look at the center of the scene
  })

  return (
    <Model scale={[2, 2, 2]} position={[0, 0, -2]} />
  )
}

export default ModelScene
