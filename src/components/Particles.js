import React, { useRef } from 'react'
import * as THREE from 'three';

export default function Particles() {

    const body = useRef();


    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    return (
        <div ref={body}>
            {/* particles */}
        </div>
    )
}
