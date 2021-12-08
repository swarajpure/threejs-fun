import './style.css'
import * as THREE from 'three';

const scene = new THREE.Scene();

const ballGeometry = new THREE.SphereGeometry(5,50,50);
const ballTexture = new THREE.TextureLoader().load('chess-texture.png');
const ballMaterial = new THREE.MeshBasicMaterial({ map: ballTexture });
const ball = new THREE.Mesh(ballGeometry, ballMaterial);

scene.add(ball);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#playground')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(25);
camera.position.setY(20)
camera.lookAt(0,0,0)

const groundGeometry = new THREE.PlaneGeometry( window.innerWidth, window.innerHeight );
const groundTexture = new THREE.TextureLoader().load('grass-texture.jpg');
const groundMaterial = new THREE.MeshBasicMaterial( {color: 0xaaaaa, map: groundTexture } );
const ground = new THREE.Mesh( groundGeometry, groundMaterial );
ground.rotateX(- Math.PI / 2)
ground.position.setY(-20)
scene.add( ground );

document.addEventListener('keydown', (e) => {
  const defaultMovement = 1;
  const defaultRotation = 0.5;
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
