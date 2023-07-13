import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const Box = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>(null);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });
  

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

export default Box;
