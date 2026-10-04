import * as THREE from "three";

/**
 * Sets up lighting for the scene.
 * Uses a dual-tone hemisphere light paired with a directional key light
 * for dynamic geometric face highlighting.
 *
 * @param {THREE.Scene} scene
 * @returns {{ hemisphereLight: THREE.HemisphereLight, directionalLight: THREE.DirectionalLight }}
 */
export function setupLights(scene) {
  // Vibrant dual-tone hemisphere light (sky red / ground blue)
  const hemisphereLight = new THREE.HemisphereLight(0xff2a5f, 0x1f51ff, 1.4);
  scene.add(hemisphereLight);

  // Directional key light to add depth and specular contrast to the geometric facets
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 8, 5);
  scene.add(directionalLight);

  return { hemisphereLight, directionalLight };
}
