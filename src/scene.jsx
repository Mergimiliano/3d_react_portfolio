/* eslint-disable react/no-unknown-property */
import { Sphere } from "@react-three/drei";

const Scene = () => {
  return (
    <>
    
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial color={"#070600"} />
      </Sphere>

      <ambientLight args={["#ffffff", 1]} />
    </>
  );
};

export default Scene;
