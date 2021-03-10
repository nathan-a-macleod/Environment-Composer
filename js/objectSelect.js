// ----------
// Handle the selection of objects with the sceneTree, and clicking on an object in the canvas
// ----------

// Make it so that when an object in "sceneTree" is clicked, it selects the clicked object
// "selectedObject" contains the clicked object as a THREE.js object
sceneTree.addEventListener("click", function(event){
    let sceneObject = scene.getObjectByName(event.target.innerHTML);

    if (sceneObject != undefined){
        selectedObject = sceneObject;
    }

    update_sceneTree();
});

// Make it so that you can select an object by clicking on the canvas - but not by dragging
let dragged = false;
document.body.addEventListener('mousedown', function () { dragged = false });
document.body.addEventListener('mousemove', function () { dragged = true });

/*renderer.domElement.addEventListener("click", function(e){
    if (dragged == true){
        return;
    }

    let ray = new THREE.Raycaster();

    let mouse = {};
  	mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  	mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;

    ray.setFromCamera(mouse, camera);

    let intersects = ray.intersectObjects(scene.children);
    let intersectedObject = intersects[0].object;

    selectedObject = intersects[0].object;
    update_project();
});*/