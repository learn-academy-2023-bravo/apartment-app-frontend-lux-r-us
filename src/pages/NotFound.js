import { useEffect, useRef } from "react";
import * as THREE from "three";
import right from "../assets/right.png";
import left from "../assets/left.png";
import top from "../assets/top.png";
import bottom from "../assets/bottom.png";
import front from "../assets/front.png";
import back from "../assets/back.png";

const NotFound = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });

    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([right, left, top, bottom, front, back]);

    const scene = new THREE.Scene();
    scene.background = texture;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 0);

    // const geometry = new THREE.BoxGeometry();
    // const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    // const cube = new THREE.Mesh(geometry, material);
    // cube.position.set(0, 0, -5);
    // scene.add(cube);

    function animate() {
      requestAnimationFrame(animate);
      // Rotate the cube
      camera.rotation.x += 0.001;
      camera.rotation.y += 0.001;
      renderer.render(scene, camera);
    }

    renderer.setSize(window.innerWidth, window.innerHeight);

    animate();
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default NotFound;
