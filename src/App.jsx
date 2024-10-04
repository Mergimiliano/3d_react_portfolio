import { Canvas } from "@react-three/fiber";
import Scene from "./scene";
import "./App.css";
import { Suspense, useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import axios from "axios";


const App = () => {
  const [catFact, setCatFact] = useState("");
  
  useEffect(() => {
    async function fetchCatFact() {
      try {
        const response = await axios.get("https://cat-fact.herokuapp.com/facts/random");
        console.log(response)
        setCatFact(response.data.text);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCatFact();
  }, []);

  return (
    <Canvas id="canvas-container" shadows>

      <Suspense fallback={null}> 
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default App;
