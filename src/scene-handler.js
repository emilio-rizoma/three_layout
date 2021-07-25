class SceneHandler {

    constructor () {
        //  Creating the scene
        //
        // To actually be able to display anything with three.js, we need 
        // three things: scene, camera and renderer, so that we can render 
        // the scene with camera.
        //
        this.scene = new THREE.Scene();

        //  PerspectiveCamera
        //
        //  The first attribute is the field of view. FOV is the extent of 
        //  the scene that is seen on the display at any given moment. 
        //  The value is in degrees.
        //
        //  The second one is the aspect ratio. You almost always want to 
        //  use the width of the element divided by the height, or you'll 
        //  get the same result as when you play old movies on a widescreen 
        //  TV - the image looks squished.
        //
        //  The next two attributes are the near and far clipping plane. 
        //  What that means, is that objects further away from the camera 
        //  than the value of far or closer than near won't be rendered. 
        //  You don't have to worry about this now, but you may want to 
        //  use other values in your apps to get better performance.
        //
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        //  WebGLRenderer
        //
        //  This is where the magic happens. In addition to the WebGLRenderer 
        //  we use here, three.js comes with a few others, often used as 
        //  fallbacks for users with older browsers or for those who don't 
        //  have WebGL support for some reason.
        //  
        //  In addition to creating the renderer instance, we also need to set 
        //  the size at which we want it to render our app. It's a good idea 
        //  to use the width and height of the area we want to fill with our 
        //  app - in this case, the width and height of the browser window. 
        //  For performance intensive apps, you can also give setSize smaller 
        //  values, like window.innerWidth/2 and window.innerHeight/2, which 
        //  will make the app render at quarter size.
        //
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    }

    //  Usefull methods
    //
    addElement (element) {
        this.scene.add(element);
    }

    position (x, y, z) {
        this.camera.position.x = x != null ? x : 0;
        this.camera.position.y = y != null ? y : 0;
        this.camera.position.z = z != null ? z : 0;

    }

    render () {
        this.renderer.render(this.scene, this.camera);
    }

}