import { Environment, OrbitControls, PerspectiveCamera, Plane, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MathUtils } from "three";
import D20 from "./d20";

const Scene = () => {
  const orbitControlsRef = useRef(null);

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x } = state.pointer;
      orbitControlsRef.current.setPolarAngle(MathUtils.degToRad(75));
      orbitControlsRef.current.setAzimuthalAngle(x * 0.25);
      orbitControlsRef.current.update();
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls ref={orbitControlsRef} />

      <Sphere args={[0.5, 32, 32]} position={[0, 0.5, 0]} castShadow>
        <meshStandardMaterial color={"#FFD100"} metalness={0.6} roughness={0.2}/>
      </Sphere>

      <Plane args={[20, 10]} rotation={[-MathUtils.degToRad(90), 0, 0]} receiveShadow>
        <meshStandardMaterial color={"#00a6fb"} />
      </Plane>

      <D20></D20>

      <ambientLight args={["#ffffff", 0.25]} />

      <directionalLight castShadow args={["#ffffff", 1,  MathUtils.degToRad(45), 0.4]} position={[-3, 1, 0]} />

      <Environment background>
        <color attach="background" args={["#87CEEB"]} />
      </Environment>
    </>
  );
};

export default Scene;
