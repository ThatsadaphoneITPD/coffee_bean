"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const LoadingEmpty: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        // Smaller camera aspect for table use
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(120, 120); // Scaled down for table rows
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.IcosahedronGeometry(1, 1);
        const material = new THREE.MeshPhongMaterial({
            color: 0x2445ec,      // Your specific Blue
            wireframe: true,
            transparent: true,
            opacity: 0.93,       // Matching the 'ed' alpha channel
            emissive: 0x1a33b5,  // A slightly darker version for the glow effect
            shininess: 100
        });
        const crystal = new THREE.Mesh(geometry, material);
        scene.add(crystal);

        const light = new THREE.PointLight(0xffffff, 10, 100);
        light.position.set(5, 5, 5);
        scene.add(light);
        camera.position.z = 2.5;

        const animate = () => {
            const frame = requestAnimationFrame(animate);
            crystal.rotation.y += 0.02;
            crystal.rotation.x += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            renderer.dispose();
            if (mountRef.current) mountRef.current.innerHTML = "";
        };
    }, []);

    return (
        <div className="relative flex align-items-center justify-content-center">
            {/* Dynamic Glow using your exact color */}
            <div
                className="absolute border-circle blur-3xl opacity-20"
                style={{
                    backgroundColor: '#acc3fbc9',
                    width: '5.5rem',
                    height: '5.5rem'
                }}
            ></div>

            {/* The 3D Canvas Mount */}
            <div
                ref={mountRef}
                className="z-1 transition-all duration-500"
                style={{ filter: 'drop-shadow(0 0 10px rgba(36, 69, 236, 0.3))' }}
            />
        </div>
    );
};

export default LoadingEmpty;