const sceneHandler = new SceneHandler();

const cube = new Cube(0x1BB24C);

sceneHandler.addElement(cube.body);
sceneHandler.position(null, null, 3)

//  Rendering the scene
//
//  A render or animate loop. This will create a loop that causes the 
//  renderer to draw the scene every time the screen is refreshed 
//  (on a typical screen this means 60 times per second). If you're 
//  new to writing games in the browser, you might say "why don't we 
//  just create a setInterval ?" The thing is - we could, but 
//  requestAnimationFrame has a number of advantages. Perhaps the most 
//  important one is that it pauses when the user navigates to another 
//  browser tab, hence not wasting their precious processing power 
//  and battery life.
const animate = function () {
  requestAnimationFrame(animate);

  // Here you are able to run some animations
  cube.rotateAt(0.08, 0.02);

  sceneHandler.render();
}

animate();
