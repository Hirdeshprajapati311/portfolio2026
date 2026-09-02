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
import { useRef } from "react";
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

  useEffect(() => {
    setIsClientMounted(true);
  }, []);

  if (!isClientMounted) {
    return <div className="absolute inset-0" aria-hidden="true" />;
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
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          const canvas = gl.domElement;

          canvas.addEventListener("webglcontextlost", (event) => {
            event.preventDefault();
          });

          gl.setClearColor("#000000", 0);
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFShadowMap;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.05;
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
