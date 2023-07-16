import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    EyeLeft: THREE.SkinnedMesh;
    EyeRight: THREE.SkinnedMesh;
    Wolf3D_Head: THREE.SkinnedMesh;
    Wolf3D_Headwear: THREE.SkinnedMesh;
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh;
    Wolf3D_Outfit_Top: THREE.SkinnedMesh;
    Wolf3D_Teeth: THREE.SkinnedMesh;
    Hips: THREE.Bone;
  };
  materials: {
    ["Wolf3D_Eye.013"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Skin.013"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Headwear.002"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Outfit_Footwear.013"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Outfit_Top.013"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Teeth.013"]: THREE.MeshStandardMaterial;
  };
};

type ActionName =
  | "Armature|mixamo.com|Layer0"
  | "CatWalk"
  | "Idle"
  | "Idle Happy"
  | "Look Around"
  | "Warrior";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function F1DriverModel(props: JSX.IntrinsicElements["group"]) {
    const group = useRef<THREE.Group>();
    const { nodes, materials, animations } = useGLTF(
        "/models/f1-driver.glb"
    ) as GLTFResult;
    const { actions } = useAnimations(animations, group);

    console.log("actions ", actions)
    

    useEffect(()=> {
        actions["Idle Happy"]?.play()
    }, [])

    return (
        <group ref={group} {...props} dispose={null}>
        <group name="Scene">
            <group name="Armature">
            <skinnedMesh
                name="EyeLeft"
                geometry={nodes.EyeLeft.geometry}
                material={materials["Wolf3D_Eye.013"]}
                skeleton={nodes.EyeLeft.skeleton}
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
                name="EyeRight"
                geometry={nodes.EyeRight.geometry}
                material={materials["Wolf3D_Eye.013"]}
                skeleton={nodes.EyeRight.skeleton}
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
                castShadow
                name="Wolf3D_Head"
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials["Wolf3D_Skin.013"]}
                skeleton={nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
                castShadow
                name="Wolf3D_Headwear"
                geometry={nodes.Wolf3D_Headwear.geometry}
                material={materials["Wolf3D_Headwear.002"]}
                skeleton={nodes.Wolf3D_Headwear.skeleton}
            />
            <skinnedMesh
                castShadow
                name="Wolf3D_Outfit_Footwear"
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials["Wolf3D_Outfit_Footwear.013"]}
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
                castShadow
                name="Wolf3D_Outfit_Top"
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials["Wolf3D_Outfit_Top.013"]}
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
            <skinnedMesh
                name="Wolf3D_Teeth"
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials["Wolf3D_Teeth.013"]}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <primitive object={nodes.Hips} />
            </group>
        </group>
        </group>
    );
}

useGLTF.preload("/models/f1-driver.glb");
