import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = ({ url }: { url: string }) => {
  const gltf = useGLTF(url);
  return <primitive object={gltf.scene} scale={1} />;
};

const ModelViewer = ({ url }: { url: string }) => {
  return (
    <div className="w-full h-[70vh] bg-black rounded-xl overflow-hidden">
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Model url={url} />
        <OrbitControls enableDamping />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
