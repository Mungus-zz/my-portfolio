import { Canvas } from "@react-three/fiber";
import Box from "./Box";

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
};

export default Scene;
