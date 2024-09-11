import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Scene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight);  // Set size to 50% of the width
    renderer.shadowMap.enabled = true; // Enable shadows
    mountRef.current.appendChild(renderer.domElement);

    // Add lighting with shadows
    const ambientLight = new THREE.AmbientLight(0x888888); // Soft light
    scene.add(ambientLight);

    const sunlight = new THREE.DirectionalLight(0xffffff, 1);
    sunlight.position.set(50, 100, 50);
    sunlight.castShadow = true;
    sunlight.shadow.mapSize.width = 1024;
    sunlight.shadow.mapSize.height = 1024;
    scene.add(sunlight);

    // Create mountain-like terrain using PlaneGeometry
    const terrainGeometry = new THREE.PlaneGeometry(200, 200, 64, 64);
    const terrainMaterial = new THREE.MeshStandardMaterial({ color: 0x8B8C7A, flatShading: true });
    const terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
    terrain.rotation.x = -Math.PI / 2;
    terrain.receiveShadow = true;
    scene.add(terrain);

    // Adjust vertices to simulate mountains
    for (let i = 0; i < terrainGeometry.attributes.position.count; i++) {
      const x = terrainGeometry.attributes.position.getX(i);
      const y = terrainGeometry.attributes.position.getY(i);
      const height = Math.sin(x * 0.05) * Math.cos(y * 0.05) * 10;
      terrainGeometry.attributes.position.setZ(i, height);
    }
    terrainGeometry.computeVertexNormals();

    // Create a simple drone model using BoxGeometry and CylinderGeometry
    const droneBodyGeometry = new THREE.BoxGeometry(1, 0.5, 1);
    const droneBodyMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const drone = new THREE.Mesh(droneBodyGeometry, droneBodyMaterial);
    drone.position.set(0, 5, 0);
    drone.castShadow = true;
    scene.add(drone);

    // Add rotors to the drone
    const rotorGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 32);
    const rotorMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const rotorPositions = [
      [0.6, 0.25, 0.6],
      [-0.6, 0.25, 0.6],
      [0.6, 0.25, -0.6],
      [-0.6, 0.25, -0.6]
    ];

    rotorPositions.forEach(([x, y, z]) => {
      const rotor = new THREE.Mesh(rotorGeometry, rotorMaterial);
      rotor.position.set(x, y, z);
      rotor.rotation.x = Math.PI / 2;
      drone.add(rotor);
    });

    // Add skybox with a gradient color
    const skyColor = new THREE.Color(0x87CEEB);  // Light blue sky
    scene.background = skyColor;

    // Position the camera
    camera.position.set(0, 10, 30);

    // Animation loop to make the drone hover up and down
    let step = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      // Make the drone hover up and down
      step += 0.05;
      drone.position.y = 5 + Math.sin(step) * 0.5;

      // Optional: Rotate the rotors
      drone.children.forEach((rotor) => {
        rotor.rotation.z += 0.1;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth / 2;  // Recalculate size based on 50% of screen width
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Clean up on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '50vw', height: '100vh', float: 'right' }} />;
};

export default Scene;
