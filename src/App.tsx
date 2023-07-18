import './styles.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Scene from './components/Scene';

const App = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <Canvas style={{ width: '100%', height: '100%' }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
