"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { ForgeX3DObject } from "./ForgeX3DObject";

type ForgeX3DSceneProps = {
  autoRotate: boolean;
  onInteraction: () => void;
  resetKey: number;
  controlsRef: React.RefObject<OrbitControlsImpl | null>;
};

export function ForgeX3DScene({
  autoRotate,
  onInteraction,
  resetKey,
  controlsRef,
}: ForgeX3DSceneProps) {
  const [isClientMounted, setIsClientMounted] = useState(false);
  const [contextLost, setContextLost] = useState(false);

  useEffect(() => {
    setIsClientMounted(true);
  }, []);

  if (!isClientMounted || contextLost) {
    return (
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.12),transparent_42%)]"
        aria-label="3D scene loading"
      />
    );
  }

  return (
    <div className="absolute inset-0">
      <Canvas
        shadows="percentage"
        camera={{
          position: [0, 0.8, 6.8],
          fov: 28,
        }}
        dpr={[1, 1.25]}
        frameloop="always"
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          const canvas = gl.domElement;

          const handleContextLost = (event: Event) => {
            event.preventDefault();
            setContextLost(true);
          };

          const handleContextRestored = () => {
            setContextLost(false);
          };

          canvas.addEventListener("webglcontextlost", handleContextLost);
          canvas.addEventListener("webglcontextrestored", handleContextRestored);

          gl.setClearColor("#000000", 0);
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFShadowMap;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.05;

          return () => {
            canvas.removeEventListener("webglcontextlost", handleContextLost);
            canvas.removeEventListener("webglcontextrestored", handleContextRestored);
          };
        }}
      >
        <ambientLight intensity={0.8} />

        <directionalLight
          castShadow
          position={[4, 5, 4]}
          intensity={2.2}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0005}
        />

        <directionalLight
          position={[-5, 2, -4]}
          intensity={1.5}
          color="#a7c8ff"
        />

        <directionalLight
          position={[0, -2, 5]}
          intensity={0.8}
          color="#f4f7ff"
        />

        <Environment preset="studio" />

        <group position={[0, -0.2, 0]}>
          <ForgeX3DObject autoRotate={autoRotate} resetKey={resetKey} />
        </group>

        <ContactShadows
          position={[0, -2.2, 0]}
          opacity={0.52}
          scale={6.4}
          blur={2.2}
          far={5}
          resolution={512}
          color="#050505"
        />

        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          enablePan={false}
          autoRotate={autoRotate}
          autoRotateSpeed={0.65}
          enableDamping
          dampingFactor={0.08}
          onStart={onInteraction}
          minPolarAngle={Math.PI / 2.3}
          maxPolarAngle={Math.PI / 1.7}
        />
      </Canvas>
    </div>
  );
}
