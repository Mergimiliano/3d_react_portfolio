import { Canvas } from "@react-three/fiber";
import "./App.css";
import Navbar from "./components/Navbar";
import Scene from "./components/Scene";

const App = () => {
  return (
    <>
    <div>
      <Canvas shadows>
        <Scene></Scene>
      </Canvas>

      <Navbar></Navbar>
    </div>
    </>
  );
};

export default App;
