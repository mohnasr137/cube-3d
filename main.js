import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { setupControls } from "./components/controls.js";
import { setupLights } from "./components/lights.js";
import { createMesh } from "./components/mesh.js";
import "./style.css";

// Check WebGL2 compatibility
if (WebGL.isWebGL2Available()) {
  initApp();
} else {
  showWebGLError();
}

/**
 * Initializes the Three.js 3D application.
 */
function initApp() {
  const container = document.getElementById("app") || document.body;

  // Scene setup
  const scene = new THREE.Scene();

  // Camera setup
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.z = 3;

  // WebGL Renderer setup
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Orbit controls with smooth damping
  const controls = setupControls(camera, renderer.domElement);

  // Scene lighting
  setupLights(scene);

  // Primary 3D geometry
  const mesh = createMesh();
  scene.add(mesh);

  // Handle responsive window resizing
  function onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
  window.addEventListener("resize", onWindowResize);

  // Animation loop with frame-rate independent rotation
  const clock = new THREE.Clock();

  function animate() {
    const delta = clock.getDelta();

    // Smooth continuous auto-rotation
    mesh.rotation.y += 0.5 * delta;
    mesh.rotation.x += 0.2 * delta;

    controls.update();
    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);
}

/**
 * Displays user-friendly error message if WebGL2 is not supported.
 */
function showWebGLError() {
  const container = document.getElementById("app") || document.body;
  const warning = WebGL.getWebGL2ErrorMessage();
  const wrapper = document.createElement("div");
  wrapper.className = "webgl-error";
  wrapper.appendChild(warning);
  container.appendChild(wrapper);
}
