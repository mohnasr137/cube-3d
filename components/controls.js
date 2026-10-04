import { OrbitControls } from "three/addons/controls/OrbitControls.js";

/**
 * Initializes and configures OrbitControls for intuitive scene navigation.
 *
 * @param {THREE.Camera} camera
 * @param {HTMLElement} domElement
 * @returns {OrbitControls}
 */
export function setupControls(camera, domElement) {
  const controls = new OrbitControls(camera, domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 1.5;
  controls.maxDistance = 10;
  return controls;
}
