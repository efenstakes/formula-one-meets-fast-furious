import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        Mesh_body015: THREE.Mesh;
        Mesh_body015_1: THREE.Mesh;
        Mesh_body015_2: THREE.Mesh;
        Mesh_body015_3: THREE.Mesh;
        Mesh_wheel_frontLeft025: THREE.Mesh;
        Mesh_wheel_frontLeft025_1: THREE.Mesh;
        Mesh_wheel_frontLeft025_2: THREE.Mesh;
        Mesh_wheel_frontLeft026: THREE.Mesh;
        Mesh_wheel_frontLeft026_1: THREE.Mesh;
        Mesh_wheel_frontLeft026_2: THREE.Mesh;
        Mesh_wheel_frontLeft027: THREE.Mesh;
        Mesh_wheel_frontLeft027_1: THREE.Mesh;
        Mesh_wheel_frontLeft027_2: THREE.Mesh;
        Mesh_wheel_frontLeft012: THREE.Mesh;
        Mesh_wheel_frontLeft012_1: THREE.Mesh;
        Mesh_wheel_frontLeft012_2: THREE.Mesh;
    };
    materials: {
        plastic: THREE.MeshStandardMaterial;
        paintBlue: THREE.MeshStandardMaterial;
        _defaultMat: THREE.MeshStandardMaterial;
        window: THREE.MeshStandardMaterial;
        ["carTire.015"]: THREE.MeshStandardMaterial;
        ["plastic.016"]: THREE.MeshStandardMaterial;
        paintYellow: THREE.MeshStandardMaterial;
    };
};

export function BlueCarModel(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF("/models/race-car-blue.gltf") as GLTFResult;
    
    return (
        <group {...props} dispose={null}>
            <group name="Scene">
                <group name="tmpParent019">
                <group name="raceFuture">
                    <group name="body006">
                    <mesh
                        name="Mesh_body015"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_body015.geometry}
                        material={materials.plastic}
                    />
                    <mesh
                        name="Mesh_body015_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_body015_1.geometry}
                        material={materials.paintBlue}
                    />
                    <mesh
                        name="Mesh_body015_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_body015_2.geometry}
                        material={materials._defaultMat}
                    />
                    <mesh
                        name="Mesh_body015_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_body015_3.geometry}
                        material={materials.window}
                    />
                    </group>
                    <group name="wheel_backLeft006">
                    <mesh
                        name="Mesh_wheel_frontLeft025"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_wheel_frontLeft025.geometry}
                        material={materials["carTire.015"]}
                    />
                    <mesh
                        name="Mesh_wheel_frontLeft025_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_wheel_frontLeft025_1.geometry}
                        material={materials["plastic.016"]}
                    />
                    <mesh
                        name="Mesh_wheel_frontLeft025_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_wheel_frontLeft025_2.geometry}
                        material={materials.paintYellow}
                    />
                    </group>
                    <group name="wheel_backRight006">
                    <mesh
                        name="Mesh_wheel_frontLeft026"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_wheel_frontLeft026.geometry}
                        material={materials["carTire.015"]}
                    />
                    <mesh
                        name="Mesh_wheel_frontLeft026_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_wheel_frontLeft026_1.geometry}
                        material={materials["plastic.016"]}
                    />
                    <mesh
                        name="Mesh_wheel_frontLeft026_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_wheel_frontLeft026_2.geometry}
                        material={materials.paintYellow}
                    />
                    </group>
                    <group name="wheel_frontLeft006">
                    <mesh
                        name="Mesh_wheel_frontLeft027"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_wheel_frontLeft027.geometry}
                        material={materials["carTire.015"]}
                    />
                    <mesh
                        name="Mesh_wheel_frontLeft027_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_wheel_frontLeft027_1.geometry}
                        material={materials["plastic.016"]}
                    />
                    <mesh
                        name="Mesh_wheel_frontLeft027_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_wheel_frontLeft027_2.geometry}
                        material={materials.paintYellow}
                    />
                    </group>
                    <group name="wheel_frontRight006">
                    <mesh
                        name="Mesh_wheel_frontLeft012"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_wheel_frontLeft012.geometry}
                        material={materials["carTire.015"]}
                    />
                    <mesh
                        name="Mesh_wheel_frontLeft012_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_wheel_frontLeft012_1.geometry}
                        material={materials["plastic.016"]}
                    />
                    <mesh
                        
                        name="Mesh_wheel_frontLeft012_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_wheel_frontLeft012_2.geometry}
                        material={materials.paintYellow}
                    />
                    </group>
                </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/models/race-car-blue.gltf");
