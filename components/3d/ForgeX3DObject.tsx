"use client";

import { RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

type ForgeX3DObjectProps = {
  autoRotate: boolean;
  resetKey: number;
};

export function ForgeX3DObject({
  autoRotate,
  resetKey,
}: ForgeX3DObjectProps) {
  const group = useRef<THREE.Group>(null);
  const ringGroup = useRef<THREE.Group>(null);
  const rotationStartTime = useRef(0);

  useEffect(() => {
    if (!group.current || !ringGroup.current) return;

    group.current.rotation.set(0, 0, 0);
    group.current.position.set(0, 0, 0);
    ringGroup.current.rotation.set(0, 0, 0);
    rotationStartTime.current = 0;
  }, [resetKey]);

  useFrame((state, delta) => {
    if (!group.current || !ringGroup.current) return;

    const elapsed = state.clock.elapsedTime;
    const pointerX = state.pointer.x;
    const pointerY = state.pointer.y;
    const rotationTime = autoRotate
      ? elapsed - rotationStartTime.current
      : 0;

    if (autoRotate && rotationStartTime.current === 0) {
      rotationStartTime.current = elapsed;
    }

    if (!autoRotate) {
      rotationStartTime.current = elapsed;
    }

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointerY * 0.65,
      0.06,
    );

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointerX * 0.9 + rotationTime * 0.55,
      0.06,
    );

    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      pointerX * 0.25,
      0.06,
    );

    group.current.position.y = autoRotate
      ? Math.sin(elapsed * 1.4) * 0.18
      : THREE.MathUtils.lerp(group.current.position.y, 0, 0.08);
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      pointerX * 0.35,
      0.08,
    );

    ringGroup.current.rotation.x = autoRotate
      ? rotationTime * 0.9 + pointerY * 0.8
      : THREE.MathUtils.lerp(ringGroup.current.rotation.x, pointerY * 0.8, 0.06);
    ringGroup.current.rotation.y = autoRotate
      ? rotationTime * 0.75 + pointerX * 0.7
      : THREE.MathUtils.lerp(ringGroup.current.rotation.y, pointerX * 0.7, 0.06);
    ringGroup.current.rotation.z = autoRotate
      ? rotationTime * 0.45
      : THREE.MathUtils.lerp(ringGroup.current.rotation.z, 0, 0.06);
  });

  return (
    <group ref={group} position={[0, 0.2, 0]} scale={1.2}>
      <group ref={ringGroup}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.4, 0.16, 32, 180]} />
          <meshPhysicalMaterial
            color="#dfeaf7"
            metalness={1}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.12}
            envMapIntensity={1.8}
          />
        </mesh>
      </group>

      <RoundedBox
        args={[2.8, 1.9, 2.2]}
        radius={0.42}
        smoothness={6}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#dde3ec"
          metalness={1}
          roughness={0.18}
          clearcoat={1}
          clearcoatRoughness={0.12}
          envMapIntensity={1.9}
          reflectivity={1}
        />
      </RoundedBox>

      <mesh position={[1.9, 1.15, 1.35]} castShadow receiveShadow>
        <sphereGeometry args={[0.42, 32, 32]} />
        <meshPhysicalMaterial
          color="#f7f9ff"
          metalness={1}
          roughness={0.12}
          clearcoat={1}
          clearcoatRoughness={0.08}
          envMapIntensity={2}
        />
      </mesh>
    </group>
  );
}
