{/* import * as THREE from 'three'
import { useRef, useEffect } from 'react'
import { useGLTF, useFBX, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

useGLTF.preload('/models/ErwinModelBlender.gltf')

type GLTFResult = GLTF & {
  nodes: {
    Wolf3D_Avatar: THREE.Mesh
  }
  materials: {
    Wolf3D_Avatar: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(new THREE.Group())
  const { nodes, materials } = useGLTF('/models/ErwinModelBlender.gltf') as GLTFResult

  const fbx = useFBX('/animations/FallingWithSkin.fbx')
  console.log('FBX:', fbx)  // Let's log the FBX object to see its contents

  const { animations } = fbx as any
  console.log('Animations:', animations)  // Let's log the animations to see their contents

  const { actions } = useAnimations(animations, group)
  console.log('Actions:', actions)  // Let's log the actions to see their contents

  useEffect(() => {
    console.log('Playing action:', actions['mixamo.com'])  // Let's log the action we are trying to play
    actions['mixamo.com']?.play()

    group.current.traverse((object) => {
      console.log(object.name);
    });
}, [])


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Wolf3D_Avatar" geometry={nodes.Wolf3D_Avatar.geometry} material={materials.Wolf3D_Avatar} morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences} />
      </group>
    </group>
  )
} */}
