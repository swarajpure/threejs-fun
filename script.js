import * as THREE from 'https://cdn.skypack.dev/three@0.135.0';
import { createBall, createGround } from './elements.js';

const windowInnerHeight = window.innerHeight;
const windowInnerWidth = window.innerWidth;

const scene = new THREE.Scene();

const ball = createBall();
scene.add(ball);

const camera = new THREE.PerspectiveCamera(
  75, 
  windowInnerWidth / windowInnerHeight, 
  0.1, 
  1000
);
camera.position.setZ(25);
camera.position.setY(30)
camera.lookAt(0,0,0)

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#playground')
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(windowInnerWidth, windowInnerHeight);


const ground = createGround();
ground.rotateX(- Math.PI / 2)
ground.position.setY(-20)
scene.add(ground);

const handleBallKinematics = ({translationAxis, rotationAxis, movementUnit, rotationUnit, multiplyingFactor = 1}) => {
  ball.position[translationAxis] += multiplyingFactor * movementUnit;
  ball.rotation[rotationAxis] += multiplyingFactor * rotationUnit;
  scene.add(ball)
}

document.addEventListener('keydown', (e) => {
  const defaultMovement = 5;
  const defaultRotation = 0.25;
  switch(e.key) {
    case 'ArrowUp':
      ball.position.z += -1 * defaultMovement;
      ball.rotation.x += -1 * defaultRotation;
      camera.position.z +=  -1  * defaultMovement;
      break;
    case 'ArrowDown':
      ball.position.z += defaultMovement;
      ball.rotation.x += defaultRotation;
      camera.position.z += defaultMovement;
      break;
    case 'ArrowLeft':
      ball.position.x += -1 * defaultMovement;
      ball.rotation.z +=  defaultRotation;
      camera.position.x +=  -1 * defaultMovement;
      break;
    case 'ArrowRight':
      ball.position.x += defaultMovement;
      ball.rotation.z += -1 * defaultRotation;
      camera.position.x +=  defaultMovement;
      break;
  }
  
})

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
