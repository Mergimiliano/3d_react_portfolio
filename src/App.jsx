import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const FirstGeometry = () => {
  return (
    <mesh>
      <boxGeometry  args={[3,2,2]}/>
      <meshStandardMaterial />
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas style = {{ height: "100vh", width: "100vw", display:"flex", justifyContent:"center", alignItems:"center" }}>
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight position={[3,2,1]} intensity={10} color={0x9CDBA6} />
      <color attach="background" args={["#F0F0F0"]} />

      <FirstGeometry />
    </Canvas>
  )
}

export default App;