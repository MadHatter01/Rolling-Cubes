var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", function() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

var geometry = new THREE.BoxGeometry(5, 5, 5, 5);
var dicesMaterials = [
  new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load(
      "https://cdn.glitch.com/9f965adc-2efd-41ac-adc5-ad1d2ecd1279%2F1.png?v=1600034283701"
    ),
    side: THREE.DoubleSide
  }),
  new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load(
      "https://cdn.glitch.com/9f965adc-2efd-41ac-adc5-ad1d2ecd1279%2F2.png?v=1600033859675"
    ),
    side: THREE.DoubleSide
  }),
  new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load(
      "https://cdn.glitch.com/9f965adc-2efd-41ac-adc5-ad1d2ecd1279%2F3.png?v=1600033859523"
    ),
    side: THREE.DoubleSide
  }),
  new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load(
      "https://cdn.glitch.com/9f965adc-2efd-41ac-adc5-ad1d2ecd1279%2F4.png?v=1600033859876"
    ),
    side: THREE.DoubleSide
  }),
  new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load(
      "https://cdn.glitch.com/9f965adc-2efd-41ac-adc5-ad1d2ecd1279%2F5.png?v=1600033859831"
    ),
    side: THREE.DoubleSide
  }),
  new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load(
      "https://cdn.glitch.com/9f965adc-2efd-41ac-adc5-ad1d2ecd1279%2F6.png?v=1600033859633"
    ),
    side: THREE.DoubleSide
  })
];

var material = new THREE.MeshFaceMaterial(dicesMaterials);
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

controls = THREE.OrbitControls(camera, renderer.domElement);
var bottomBox = new THREE.CubeGeometry(20, 1, 20);
var bottomMaterial = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
  wireframe: true
});
bottomCube = new THREE.Mesh(bottomBox, bottomMaterial);
bottomCube.position.y = -10;
scene.add(bottomCube);

var topBox = new THREE.CubeGeometry(20, 1, 20);
var topMaterial = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
  wireframe: true
});
topCube = new THREE.Mesh(topBox, topMaterial);
topCube.position.y = 10;
scene.add(topCube);

var leftBox = new THREE.CubeGeometry(1, 20, 20);
var leftMaterial = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
  wireframe: true
});
leftCube = new THREE.Mesh(leftBox, leftMaterial);
leftCube.position.x = -10;
scene.add(leftCube);

var rightBox = new THREE.CubeGeometry(1, 20, 20);
var rightMaterial = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
  wireframe: true
});
rightCube = new THREE.Mesh(rightBox, rightMaterial);
rightCube.position.x = 10;
scene.add(rightCube);

var ambientLight = new THREE.AmbientLight(0xfffff, 5);
ambientLight.castShadow = true;
scene.add(ambientLight);

camera.position.z = 20;
var update = function() {
  cube.rotation.x += 0.03;
  cube.rotation.y += 0.03;
  cube.rotation.x += 0.01;

  leftCube.rotation.x += 0.04;
  rightCube.rotation.x += 0.04;
  bottomCube.rotation.x += 0.04;
  topCube.rotation.x += 0.04;
};

var render = function() {
  renderer.render(scene, camera);
};

var ScriptLoop = function() {
  requestAnimationFrame(ScriptLoop);
  update();
  render();
};

ScriptLoop();
