/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: InternetHumor (https://sketchfab.com/InternetHumor)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/starter-d20-fc8a52a6d41e47128554e215c93327f8
Title: Starter D20
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function D20(props) {
  const { nodes, materials } = useGLTF('models/D20/D20.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1_lambert1_0.geometry}
        material={materials.lambert1}
        scale={0.5}
      />
    </group>
  )
}

useGLTF.preload('models/D20/D20.gltf')


