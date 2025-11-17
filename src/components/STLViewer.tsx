import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

interface Props {
  url: string;
}

function Model({ url }: Props) {
  const geometry = useLoader(STLLoader, url);

  return (
    <mesh geometry={geometry} rotation={[ -Math.PI / 2, 0, 0 ]}>
      <meshStandardMaterial color="#888" metalness={0.3} roughness={0.6} />
    </mesh>
  );
}

const STLViewer = ({ url }: Props) => {
  return (
    <div className="w-full h-[500px] bg-white">
      <Canvas camera={{ position: [3, 3, 3], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Model url={url} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default STLViewer;
