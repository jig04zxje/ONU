import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';


const Card = ({ position, rotation, color, delay }: { position: [number, number, number], rotation: [number, number, number], color: string, delay: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime() + delay;
    meshRef.current.rotation.x = rotation[0] + Math.sin(time * 0.5) * 0.1;
    meshRef.current.rotation.y = rotation[1] + Math.cos(time * 0.3) * 0.1;
    meshRef.current.position.y = position[1] + Math.sin(time * 0.4) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <boxGeometry args={[2.5, 3.5, 0.05]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.8} 
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.2}
      />
      {/* Gold border simulation */}
      <mesh position={[0, 0, 0.03]}>
        <boxGeometry args={[2.6, 3.6, 0.01]} />
        <meshStandardMaterial color="#C6A75E" metalness={1} roughness={0.1} />
      </mesh>
    </mesh>
  );
};

const Scene = () => {
  const cards = useMemo(() => [
    { position: [-4, 1, -2] as [number, number, number], rotation: [0.2, 0.4, 0.1] as [number, number, number], color: '#4B0F1A', delay: 0 },
    { position: [4, -1, -3] as [number, number, number], rotation: [-0.1, -0.3, -0.2] as [number, number, number], color: '#2C0E3A', delay: 2 },
    { position: [-2, -2, -1] as [number, number, number], rotation: [0.1, -0.2, 0.3] as [number, number, number], color: '#0B0B0F', delay: 4 },
    { position: [3, 2, -4] as [number, number, number], rotation: [0.3, 0.1, -0.1] as [number, number, number], color: '#C6A75E', delay: 6 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#C6A75E" />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#C6A75E" />
      
      {cards.map((card, idx) => (
        <Float key={idx} speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <Card {...card} />
        </Float>
      ))}

      <mesh position={[0, 0, -10]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#0B0B0F" transparent opacity={0.5} />
      </mesh>
    </>
  );
};

const FloatingCards = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <Scene />
      </Canvas>
    </div>
  );
};

export default FloatingCards;
