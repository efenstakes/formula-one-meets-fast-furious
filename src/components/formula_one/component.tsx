"use client"
import { Canvas, } from '@react-three/fiber'
import { OrbitControls, Text, } from '@react-three/drei'
import * as THREE from 'three'
import { useWindowWidth } from '@react-hook/window-size'

// components
import { F1DriverModel } from '@/components/fone_driver/component'
import CanvasBackground from '../canvas_background/component'
import { BlueCarModel } from '../blue_car/component'
import CanvasLoader from '../canvas_loader/component'


const FormulaOne = () => {
    const width = useWindowWidth()
    const isMobile = width < 800

    return (
        <Canvas shadows style={{ width: '100%', height: '100%', }}>
            <CanvasLoader />

            <OrbitControls />

            {/* lights */}
            <ambientLight />

            <spotLight
            angle={.5}
            color={'skyblue'}
            intensity={1.2}
            position={[ -1, 5, 8 ]}
            castShadow
            />


            {/* background */}
            <CanvasBackground />

            {/* models */}
            <group
                position={isMobile ? [ 0, -5.5, -20 ] : [ -1.5, -2.3, -1.5 ]}
                rotation={isMobile ? [ -.15, .9, 0 ] : [ -.15, .9, 0 ]}
                scale={isMobile ? 6 : 3.2}
            >
                <BlueCarModel />
            </group>
            <group
                position={isMobile ? [ 0, -2, -1 ] : [  2, -1.8, -2 ]}
                //rotation-y={Math.PI/1.1}
                // rotation-z={.1}
                scale={2.8}
            >
                <F1DriverModel />
            </group>

            {/* text */}
            <group position={[ 0, 0, 0 ]} scale={5}>
                <Text
                    font="/fonts/Orbitron_Regular.json"
                    scale={ isMobile ? .72 : 1.4 }
                    position={ isMobile ? [ 0, 2.5, -4 ] : [ 0, .5, -4 ] }
                    strokeColor={"white"}
                    strokeWidth={.02}
                    strokeOpacity={.3}
                    fillOpacity={0}
                >
                    Formula 1
                </Text>
            </group>
            
            {/* floor */}
            <mesh
                scale={2000}
                receiveShadow
                rotation-x={-Math.PI/1.8}
                position-y={-2}
            >
                <planeGeometry />
                {/* <meshStandardMaterial color={'lightblue'} /> */}
                <meshStandardMaterial color={'#4c6a6b'} />
            </mesh>


        </Canvas>
    )
}

export default FormulaOne
