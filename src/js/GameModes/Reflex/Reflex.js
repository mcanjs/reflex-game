import * as THREE from 'three';
import { Interaction } from 'three.interaction';

// Utils
import GamePoints from '../../Utils/GamePoints/GamePoints';
import GameReflexTimer from '../../Utils/GameTimer/GameReflexTimer';

export default class Reflex {
    constructor () {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 190, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer();
        this.state = {
            gameMode: 'reflex',
            X: {
                cubeRotation: .01,
            },
            Y: {
                cubeRotation: .01
            },
            Z: {
                cameraPosition: 5
            },
            level: 1
        }
        
        // Initialize Interactions ( EVENTS )
        this.interaction = new Interaction(this.renderer, this.scene, this.camera);
        
        // Initialize WebGL Renderer
        this.initializeWebGLRenderer();
    }
    
    initializeWebGLRenderer () {
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement );
        
        this.initializeGame();
    }
    
    async initializeGame () {
        
        // Start Timer
        // new GameTimer(true);
        
        // Create Mesh
        this.createMesh();
        
        this.camera.position.z = this.state.Z.cameraPosition;
        
        const animate = () => {
            requestAnimationFrame( animate );
            
            this.renderer.render( this.scene, this.camera );
        }
        
        animate();
    }
    
    createMesh () {
        const geometry = new THREE.CircleGeometry( 5, 32 );
        const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
        const circle = new THREE.Mesh( geometry, material );
        const randomTime = Math.floor(Math.random() * 5) + 2;
        
        circle.material.color.setHex( 0x47c63 );
        
        setTimeout( _ => {
            const createdTime = new Date();
            this.scene.add(circle);
            circle.on('click', this.meshOnClickEvent.bind(this, createdTime, circle));
        }, randomTime * 1000);
    }
    
    meshOnClickEvent (date, mesh) {
        new GameReflexTimer.DiffTime(date, true);
        // Destroy Mesh
        this.destroyMesh(mesh, true);
    }

    destroyMesh (mesh, isCreateNewMesh) {
        this.scene.remove(mesh);
        mesh.geometry.dispose();
        mesh.material.dispose();
        mesh = undefined;
        
        if ( isCreateNewMesh ) {
            this.createMesh();
        }
    }
}
