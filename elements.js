import * as THREE from 'https://cdn.skypack.dev/three@0.135.0';

const createBall = () => {
  const ballGeometry = new THREE.SphereGeometry(5,32,32);
  const ballTexture = new THREE.TextureLoader().load('textures/red-2.webp');
  const ballMaterial = new THREE.MeshBasicMaterial({ map: ballTexture });
  const ball = new THREE.Mesh(ballGeometry, ballMaterial);
  return ball;
}

const createGround = () => {
  const groundGeometry = new THREE.PlaneGeometry( window.innerWidth, window.innerHeight );
  const groundTexture = new THREE.TextureLoader().load('textures/green.jpg');
  const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, map: groundTexture });
  const ground = new THREE.Mesh( groundGeometry, groundMaterial );
  return ground;
}
export { createBall, createGround };