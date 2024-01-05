// Imports
import React, { useRef, useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

// Components
import HomeInfo from "../components/HomeInfo";
import Loader from "../components/Loader";

// Models
import Bears from "../models/WeBareBears";

// Sounds
import bubbleTea from "../assets/bubble_tea.mp3";
// import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  // Setting up sounds
  const audioRef = useRef(new Audio(bubbleTea));
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  audioRef.current.volume = 0.2;
  audioRef.current.loop = true;

  // Play music on load and pause on unmount
  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  // Function to adjust the bears for the appropriate screen size
  const adjustBearsForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -25, -60];
    let rotation = [0, 0, 0];

    // Adjust scale for 3D model for screen size
    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
    } else {
      screenScale = [0.5, 0.5, 0.5];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [scale, position, rotation] = adjustBearsForScreenSize();

  /**
   *    EXTRA NOTES:
   *
   *    Suspense -> allows us to postpone rendering until data is available
   *             -> fallBack lets us use a loader in place
   *    Canvas -> Anything in the Canvas needs to be a mesh
   *
   *    LIGHTING ================================
   *    directionalLight = light coming from a certain direction, uses position and intensity
   *    ambientLight = light in all areas that dont cause shadows, only uses intensity
   *    pointLight = emits light from all direction in a single point
   *    spotLight = emits light from one direction in the shape of a cone
   *    hemisphereLight = illuminates the scene with a gradient
   **/

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex item-center justify-center">
        {<HomeInfo />}
      </div>
      <Canvas
        className="w-full h-screen bg-gradient-to-r from-orange-300 from-50% to-orange-200 to-100%"
        // Things near 0.1 of the camera won't be rendered, and far 1000 won't be rendered as well
        camera={{ near: 0.2, far: 1000 }}
      >
        {/* <color attach="background" args={["#d49a5d"]} /> */}
        <Suspense fallback={<Loader />}>
          <Bears position={position} rotation={rotation} scale={scale} />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-16 left-10">
        <div
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        >
          <h1 className="head-text">{!isPlayingMusic ? "🔇" : "🔈"}</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
