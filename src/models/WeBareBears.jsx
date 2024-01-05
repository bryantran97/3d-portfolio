import { a } from "@react-spring/three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import bearScene from "../assets/3d/we_bare_bears.glb";

const Bears = ({ ...props }) => {
  const bearRef = useRef();
  const { nodes, materials } = useGLTF(bearScene);

  useFrame(() => {
    bearRef.current.rotation.y -= 0.01;
  });

  return (
    <a.group {...props} dispose={null} ref={bearRef}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.obj_0_color_2829873_0.geometry}
            material={materials.color_2829873}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.obj_0_color_5067095_0.geometry}
            material={materials.color_5067095}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.obj_0_color_5335170_0.geometry}
            material={materials.color_5335170}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.obj_0_color_9053740_0.geometry}
            material={materials.color_9053740}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.obj_0_color_9987140_0.geometry}
            material={materials.color_9987140}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.obj_0_color_10988977_0.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.obj_0_color_14855061_0.geometry}
            material={materials.color_14855061}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.obj_0_color_15708605_0.geometry}
            material={materials.color_15708605}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.obj_0_color_15708616_0.geometry}
            material={materials.color_15708616}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.obj_0_color_16448250_0.geometry}
            material={materials.color_16448250}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.obj_0_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.obj_0_Material001_0_1.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.obj_0_Material001_0_2.geometry}
            material={materials["Material.001"]}
          />
        </group>
      </group>
    </a.group>
  );
};

export default Bears;
