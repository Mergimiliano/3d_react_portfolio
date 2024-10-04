import { OrbitControls, PerspectiveCamera, Plane, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MathUtils } from "three";

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
        <meshStandardMaterial color={"#FFD100"} />
      </Sphere>

      <Plane args={[10, 7]} rotation={[-MathUtils.degToRad(90), 0, 0]} receiveShadow>
        <meshStandardMaterial color={"#00a6fb"} />
      </Plane>

      <ambientLight args={["#ffffff", 0.25]} />

      <spotLight castShadow args={["#ffffff", 10, 20, MathUtils.degToRad(45), 0.4]} position={[-3, 3, 0]} />
    </>
  );
};

export default Scene;
