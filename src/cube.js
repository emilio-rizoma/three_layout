class Cube {
    constructor (color) {
        this.material = new THREE.MeshBasicMaterial({ color: color });
        this.geometry = new THREE.BoxGeometry();
        this.body = new THREE.Mesh(this.geometry, this.material);
    }

    rotateAt (x,y) {
        this.body.rotation.x += x;
        this.body.rotation.y += y;
    }
}