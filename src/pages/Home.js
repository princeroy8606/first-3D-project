import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import Sky from "../models/Sky";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [isRotating, setIsRotating] = useState(true);
  const [currentStage, setCurrentStage] = useState(null);

  const adjustIslandForScreen = () => {
    let screenSclae = null;
    let screenPoistion = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenSclae = [0.9, 0.9, 0.9];
    } else {
      screenSclae = [1, 1, 1];
    }
    return [screenSclae, screenPoistion, rotation];
  };

  const adjustPlaneForScreen = () => {
    let screenSclae, screenPoistion;
    if (window.innerWidth < 768) {
      screenSclae = [1.5, 1.5, 1.5];
      screenPoistion = [0, -1.5, 0];
    } else {
      screenSclae = [3, 3, 3];
      screenPoistion = [0, -4, -4];
    }
    return [screenSclae, screenPoistion];
  };
  const [islandScle, islandPosition, islandRotation] = adjustIslandForScreen();
  const [planeScle, planePosition] = adjustPlaneForScreen();

  return (
    <section className=" w-full h-screen bg-black-500 relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1.5} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor={"#b1eff"}
            groundColor={"#00000"}
            intensity={0.5}
          />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScle}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            scale={planeScle}
            position={planePosition}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
