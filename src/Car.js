import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useRef, useEffect, useState } from 'react';
import './Car.js';
function Model(props) {
  const { scene } = useGLTF('/mustang10.glb');
  return <primitive object={scene} {...props} />;
}
function PointOfInterest({ position, name }) {
  const [selected, setSelected] = useState(false);

  const handlePointClick = () => {
    setSelected(!selected);
  };

  return (
    <mesh position={position} onClick={handlePointClick} cursor="pointer">
      <sphereGeometry args={[0.0003, 16, 16]} />
      <meshStandardMaterial color={selected ? 'green' : 'white'} />
      {/* <Text position={[0, 0.2, 0]} fontSize={0.1} color="white">
        {name}
      </Text> */}
    </mesh>
  );
}
function Car() {
  const points = [
    {
      name: 'hood',
      coords: [-0.002, 0.0055, 0.005],
    },
    {
      name: 'driver',
      coords: [0.0039, 0.004, -0.001],
    },
    {
      name: 'trunk',
      coords: [0.0, 0.0053, -0.009],
    },
  ];

  const cameraRef = useRef();
  console.log(Model);
  return (
    <Canvas
      className="canvas"
      dpr={[1, 2]}
      camera={{ fov: 45 }}
      style={{ position: 'absolute' }}
      touchaction="none"
    >
      <color attach="background" args={['gray']} touchaction="none" />
      <PresentationControls
        speed={1}
        global
        polar={[-0.1, Math.PI / 4]}
        touchaction="none"
      >
        <Stage environment={'forest'} touchaction="none" intensity={0}>
          <group position={[0, 0, 0]}>
            <Model
              scale={0.01}
              touchaction="none"
              position={[0, 0, 0]}
              onClick={() => console.log('car')}
            />
          </group>
          {points.map((point, index) => (
            <PointOfInterest
              key={index}
              position={point.coords}
              name={point.name}
              onClick={console.log(point.name)}
            />
          ))}
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

export default Car;
