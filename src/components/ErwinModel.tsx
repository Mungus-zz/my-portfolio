import * as THREE from 'three'
import { useRef, useEffect } from 'react'
import { useGLTF, useFBX, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { OrbitControls } from '@react-three/drei'


useGLTF.preload('models/ErwinModel.glb')

type GLTFResult = GLTF & {
  nodes: {
    Wolf3D_Avatar: THREE.SkinnedMesh
    Hips: THREE.Bone
  }
  materials: {
    Wolf3D_Avatar: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(new THREE.Group())
  const { nodes, materials } = useGLTF('models/ErwinModel.glb') as GLTFResult

  const fbx = useFBX('/animations/BreakdanceFreeze.fbx')

  const { animations } = fbx as any

  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['mixamo.com']?.play()

    group.current.traverse((object) => {
      console.log(object.name);
    });
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh name="Wolf3D_Avatar" geometry={nodes.Wolf3D_Avatar.geometry} material={materials.Wolf3D_Avatar} skeleton={nodes.Wolf3D_Avatar.skeleton} morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </group>
  )
}
