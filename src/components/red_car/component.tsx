import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        Mesh_body014: THREE.Mesh;
        Mesh_body014_1: THREE.Mesh;
        Mesh_body014_2: THREE.Mesh;
        Mesh_body014_3: THREE.Mesh;
        Mesh_wheel_frontLeft028: THREE.Mesh;
        Mesh_wheel_frontLeft028_1: THREE.Mesh;
        Mesh_wheel_frontLeft028_2: THREE.Mesh;
        Mesh_wheel_frontLeft029: THREE.Mesh;
        Mesh_wheel_frontLeft029_1: THREE.Mesh;
        Mesh_wheel_frontLeft029_2: THREE.Mesh;
        Mesh_wheel_frontLeft030: THREE.Mesh;
        Mesh_wheel_frontLeft030_1: THREE.Mesh;
        Mesh_wheel_frontLeft030_2: THREE.Mesh;
        Mesh_wheel_frontLeft011: THREE.Mesh;
        Mesh_wheel_frontLeft011_1: THREE.Mesh;
        Mesh_wheel_frontLeft011_2: THREE.Mesh;
    };
    materials: {
        paintRed: THREE.MeshStandardMaterial;
        plastic: THREE.MeshStandardMaterial;
        window: THREE.MeshStandardMaterial;
        _defaultMat: THREE.MeshStandardMaterial;
        ["carTire.014"]: THREE.MeshStandardMaterial;
        ["plastic.015"]: THREE.MeshStandardMaterial;
        paintYellow: THREE.MeshStandardMaterial;
    };
};

export function RedCarModel(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF("/models/race-car-red.gltf") as GLTFResult;
    
    return (
        <group {...props} dispose={null}>
        <group name="Scene">
            <group name="tmpParent018">
            <group name="race">
                <group name="body005">
                <mesh
                    name="Mesh_body014"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_body014.geometry}
                    material={materials.paintRed}
                />
                <mesh
                    name="Mesh_body014_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_body014_1.geometry}
                    material={materials.plastic}
                />
                <mesh
                    name="Mesh_body014_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_body014_2.geometry}
                    material={materials.window}
                />
                <mesh
                    name="Mesh_body014_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_body014_3.geometry}
                    material={materials._defaultMat}
                />
                </group>
                <group name="wheel_backLeft005">
                <mesh
                    name="Mesh_wheel_frontLeft028"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_wheel_frontLeft028.geometry}
                    material={materials["carTire.014"]}
                />
                <mesh
                    name="Mesh_wheel_frontLeft028_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_wheel_frontLeft028_1.geometry}
                    material={materials["plastic.015"]}
                />
                <mesh
                    name="Mesh_wheel_frontLeft028_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_wheel_frontLeft028_2.geometry}
                    material={materials.paintYellow}
                />
                </group>
                <group name="wheel_backRight005">
                <mesh
                    name="Mesh_wheel_frontLeft029"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_wheel_frontLeft029.geometry}
                    material={materials["carTire.014"]}
                />
                <mesh
                    name="Mesh_wheel_frontLeft029_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_wheel_frontLeft029_1.geometry}
                    material={materials["plastic.015"]}
                />
                <mesh
                    name="Mesh_wheel_frontLeft029_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_wheel_frontLeft029_2.geometry}
                    material={materials.paintYellow}
                />
                </group>
                <group name="wheel_frontLeft005">
                <mesh
                    name="Mesh_wheel_frontLeft030"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_wheel_frontLeft030.geometry}
                    material={materials["carTire.014"]}
                />
                <mesh
                    name="Mesh_wheel_frontLeft030_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_wheel_frontLeft030_1.geometry}
                    material={materials["plastic.015"]}
                />
                <mesh
                    name="Mesh_wheel_frontLeft030_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_wheel_frontLeft030_2.geometry}
                    material={materials.paintYellow}
                />
                </group>
                <group name="wheel_frontRight005">
                <mesh
                    name="Mesh_wheel_frontLeft011"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_wheel_frontLeft011.geometry}
                    material={materials["carTire.014"]}
                />
                <mesh
                    name="Mesh_wheel_frontLeft011_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_wheel_frontLeft011_1.geometry}
                    material={materials["plastic.015"]}
                />
                <mesh
                    name="Mesh_wheel_frontLeft011_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_wheel_frontLeft011_2.geometry}
                    material={materials.paintYellow}
                />
                </group>
            </group>
            </group>
        </group>
        </group>
    );
}

useGLTF.preload("/models/race-car-red.gltf");
