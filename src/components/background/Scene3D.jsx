import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  useGLTF, 
  Points, 
  PointMaterial, 
  Environment, 
  ContactShadows,
  Float,
  Text,
  MeshDistortMaterial,
  PerspectiveCamera
} from '@react-three/drei';
import * as THREE from 'three';

// Component to handle scroll-synced animations
const SceneContent = ({ scrollYProgress }) => {
  const desk = useGLTF('/models/desk.glb');
  const laptop = useGLTF('/models/laptop.glb');
  
  const groupRef = useRef();
  const deskRef = useRef();
  const laptopRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scroll = scrollYProgress ? scrollYProgress.get() : 0;
    
    if (groupRef.current) {
      // Rotation based on scroll
      groupRef.current.rotation.y = THREE.MathUtils.lerp(0.2, -Math.PI * 0.5, scroll);
      
      // Move slightly to the center as we scroll down
      groupRef.current.position.x = THREE.MathUtils.lerp(1.2, 0, scroll);
      groupRef.current.position.z = THREE.MathUtils.lerp(0, 1.5, scroll);
    }

    // Individual floating logic
    if (deskRef.current) {
      deskRef.current.position.y = Math.sin(t / 2) * 0.05;
    }
    
    if (laptopRef.current) {
      laptopRef.current.position.y = 0.45 + Math.sin(t / 1.5) * 0.03;
      // Laptop lid or screen could potentially react here if rigged
    }
  });

  return (
    <group ref={groupRef} position={[1.2, -0.6, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Developer Desk */}
        <primitive 
          ref={deskRef}
          object={desk.scene} 
          scale={0.85}
          position={[0, 0, 0]}
        />
        
        {/* Gaming Laptop */}
        <primitive 
          ref={laptopRef}
          object={laptop.scene} 
          scale={0.38}
          position={[0, 0.45, 0.1]}
        />
      </Float>

      {/* Adding some "Floating Tech Cubes" for that high-class look */}
      <TechNodes scrollYProgress={scrollYProgress} />
    </group>
  );
};

const TechNodes = ({ scrollYProgress }) => {
  const nodes = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 6; i++) {
      arr.push({
        position: [
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4 + 0.5,
          (Math.random() - 0.5) * 4
        ],
        size: Math.random() * 0.2 + 0.1,
        speed: Math.random() * 2 + 1
      });
    }
    return arr;
  }, []);

  const ref = useRef();
  useFrame((state) => {
    const scroll = scrollYProgress ? scrollYProgress.get() : 0;
    if (ref.current) {
      ref.current.rotation.x = scroll * Math.PI;
      ref.current.rotation.y = scroll * Math.PI * 0.5;
    }
  });

  return (
    <group ref={ref}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <boxGeometry args={[node.size, node.size, node.size]} />
          <MeshDistortMaterial 
            color={i % 2 === 0 ? "#6366f1" : "#06b6d4"} 
            speed={node.speed} 
            distort={0.4} 
            transparent 
            opacity={0.6} 
          />
        </mesh>
      ))}
    </group>
  );
};

function Particles({ count = 1000 }) {
  const points = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (points.current) {
      points.current.rotation.y = time * 0.03;
    }
  });

  return (
    <Points ref={points}>
      <PointMaterial
        transparent
        color="#6366f1"
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.2}
      />
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
    </Points>
  );
}

const Scene3D = ({ scrollYProgress }) => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} />
        <Suspense fallback={null}>
          <SceneContent scrollYProgress={scrollYProgress} />
          <Particles count={1500} />
          
          <ambientLight intensity={1.5} />
          <Environment preset="city" /> 
          
          <pointLight position={[5, 5, 5]} intensity={30} color="#6366f1" />
          <pointLight position={[-5, -5, 5]} intensity={20} color="#06b6d4" />
          
          <ContactShadows 
            position={[0, -1, 0]}
            opacity={0.15} 
            scale={15} 
            blur={2.5} 
            far={4.5} 
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
