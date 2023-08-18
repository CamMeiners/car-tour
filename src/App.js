import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';
function Model(props) {
  const { scene } = useGLTF('/mustang6.glb');
  return <primitive object={scene} {...props} />;
}

function App() {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ fov: 45 }}
      style={{ position: 'absolute' }}
      touchaction="none"
    >
      <color attach="background" args={['#101010']} touchaction="none" />
      <PresentationControls
        speed={1}
        global
        polar={[-0.1, Math.PI / 4]}
        touchaction="none"
      >
        <Stage environment={'warehouse'} touchaction="none" intensity={0}>
          <Model scale={0.01} touchaction="none" />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

export default App;
