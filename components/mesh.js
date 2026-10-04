import * as THREE from "three";

/**
 * Creates the primary 3D geometric mesh with an outer wireframe shell.
 * Uses an Icosahedron with flat shading and a wireframe overlay.
 *
 * @returns {THREE.Mesh} The composite mesh object
 */
export function createMesh() {
  // Geometry: Icosahedron with detail level 2
  const geometry = new THREE.IcosahedronGeometry(1, 2);

  // Solid flat-shaded inner mesh
  const solidMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true,
    roughness: 0.35,
    metalness: 0.1,
  });
  const mesh = new THREE.Mesh(geometry, solidMaterial);

  // Wireframe outer shell slightly scaled to prevent z-fighting
  const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
    transparent: true,
    opacity: 0.25,
  });
  const wireframe = new THREE.Mesh(geometry, wireframeMaterial);
  wireframe.scale.setScalar(1.002);
  mesh.add(wireframe);

  return mesh;
}
