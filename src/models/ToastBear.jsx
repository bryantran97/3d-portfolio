import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import scene from "../assets/3d/toast_bear.glb";

const ToastBear = (props) => {
  const group = useRef();

  const { nodes, materials } = useGLTF(scene);
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.693, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bearOutline__0.geometry}
            material={materials.bearOutline__0}
            position={[-0.197, 0.07, 0.369]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bearToast_Material_#6_0"].geometry}
          material={materials.Material_6}
          position={[-0.197, 0.07, 0.369]}
        />
      </group>
    </group>
  );
};

export default ToastBear;
