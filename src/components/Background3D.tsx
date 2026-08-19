"use client";

import React, { useRef, useEffect, useState, Component, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

class CanvasErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.warn("Background3D WebGL render skipped:", error);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

function LiquidBlob() {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={2}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#1a1a1a"
          roughness={0.2}
          metalness={0.9}
          distort={0.3}
          speed={1.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
}

export default function Background3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.6,
        overflow: "hidden"
      }}
    >
      <CanvasErrorBoundary>
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={1} color="#8F00FF" />
          <Environment>
            <mesh scale={50}>
              <sphereGeometry />
              <meshBasicMaterial color="#111111" side={THREE.BackSide} />
            </mesh>
          </Environment>
          <LiquidBlob />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
