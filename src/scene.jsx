import { OrbitControls, PerspectiveCamera, Plane, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MathUtils } from "three";

const Scene = () => {
  
  const orbitControlsRef = useRef(null);
  const azimuthalTarget = useRef(0);
  const polarTarget = useRef(MathUtils.degToRad(70));

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.pointer;

      azimuthalTarget.current = -MathUtils.degToRad(x * 5);
      polarTarget.current = MathUtils.mapLinear(y * 0.25, -1, 1, MathUtils.degToRad(80), MathUtils.degToRad(60));

      const currentAzimuthal = orbitControlsRef.current.getAzimuthalAngle();
      const currentPolar = orbitControlsRef.current.getPolarAngle();

      orbitControlsRef.current.setAzimuthalAngle(MathUtils.lerp(currentAzimuthal, azimuthalTarget.current, 0.1));
      orbitControlsRef.current.setPolarAngle(MathUtils.lerp(currentPolar, polarTarget.current, 0.1));
      
      orbitControlsRef.current.update();
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls ref={orbitControlsRef} minPolarAngle={MathUtils.degToRad(60)} maxPolarAngle={MathUtils.degToRad(80)} />

      <Sphere args={[0.5, 32, 32]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color={"#FFD100"} />
      </Sphere>

      <Plane args={[7, 7]} rotation={[-MathUtils.degToRad(90), 0, 0]}>
        <meshStandardMaterial color={"#202020"} />
      </Plane>

      <ambientLight args={["#ffffff", 1]} />
    </>
  );
};

export default Scene;
