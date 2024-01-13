import React, { useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import skyScene from "../assets/3d/sky.glb";
import { useFrame } from "@react-three/fiber";

const Sky = ({ isRotating }) => {
  const skyRef = useRef();
  const { scene, animations } = useGLTF(skyScene);

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta;
    }
  });
  return (
    <mesh ref={skyRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Sky;
