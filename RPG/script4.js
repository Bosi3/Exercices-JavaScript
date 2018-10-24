/*obj[5].addEventListener("click", function() {
  console.log(  this.innerHTML + myPerso[1].name );
  /* Here, "this" refers to 2nd div */
/*});
obj[6].addEventListener("click", function() {
  console.log("Hello " + this + " (" + this.innerHTML);
  /* Here, "this" refers to 3rd div */
/*});
obj[7].addEventListener("click", function() {
  console.log("Hello " + this + " (" + this.innerHTML );
  /* Here, "this" refers to 3rd div */
/*});
obj[8].addEventListener("click", function() {
  console.log("Hello " + this + " (" + this.innerHTML );
  /* Here, "this" refers to 3rd div */
//});
/*obj.forEach(function(element) {
  element.addEventListener("click", function() {
      dispElementData(this);
  });
});*/
/*Object.entries(obj).map((object) => {
  // Here, object = Array[index, object] (object is the
  // HTML element object). This means that the actual element
  // is stored in object[1], not object. Do whatever you need
  // with it here. In this case we attach a click event:
  object[1].addEventListener("click", function () {
console.log(this + this.length);*/
    /*if(this.length = 4 ){
      console.log(myPerso[1]);
    }
    else if(this.lenght = 5){
      console.log(myPerso[1]);
    }
    else if(this.lenght = 6){
      console.log(myPerso[2]);
    }
    else if(this.lenght = 7){
      console.log(myPerso[3]);
    }   
    else if(this.lenght = 8){
      console.log(myPerso[4]);
    }
    else if(this.lenght = 9){
      console.log(myPerso[5]);
    }*/
    // Output innerHTML of the clicked element
    /*console.log("Hello " + this +
                    " (" + this.innerHTML + ") from map method...");*/
 // });
//});

/*function mySelect (){
  var obj = document.getElementsByTagName("image");
  console.log(obj);
  for (var i=0;i<obj.length;i++){
    obj[i].addEventListener( "click", function click(evt){
      console.log("object clicked");
    }, /*capturingPhase=*///false );
    /*obj[i].addEventListener("click", function() {
      alert ("Hello World!");
});*/
 /* }
}*/
/*for(var i = 0;i < buttons.length-1;i++){
  buttons[i].addEventListener("click", function() {
         this.innerHTML = "Vous m'avez cliqué";
  });
});*/
/*document.getElementsByTagName("image").addEventListener("click", function( event ) {

  alert ("Hello World!");
  
});*/
/*let select = mySelect(perso){
	//if(perso === Hermionie){
		
	}
}
------------------KEYDOWN-----------
var keyMap = {
  68: 'right',
  65: 'left',
  87: 'up',
  83: 'down'
}
function keydown(event) {
  var key = keyMap[event.keyCode]
  state.pressedKeys[key] = true
}
function keyup(event) {
  var key = keyMap[event.keyCode]
  state.pressedKeys[key] = false
}

window.addEventListener("keydown", keydown, false)
window.addEventListener("keyup", keyup, false)

function update(progress) {
  if (state.pressedKeys.left) {
    state.x -= progress
  }
  if (state.pressedKeys.right) {
    state.x += progress
  }
  if (state.pressedKeys.up) {
    state.y -= progress
  }
  if (state.pressedKeys.down) {
    state.y += progress
  }

  // Flip position at boundaries
  if (state.x > width) {
    state.x -= width
  }
  else if (state.x < 0) {
    state.x += width
  }
  if (state.y > height) {
    state.y -= height
  }
  else if (state.y < 0) {
    state.y += height
  }
}
function update(progress) {
  // Make a smaller time value that's easier to work with
  var p = progress / 16

  updateRotation(p)
  updateMovement(p)
  updatePosition(p)
}

function updateRotation(p) {
  if (state.pressedKeys.left) {
    state.rotation -= p * 5
  }
  else if (state.pressedKeys.right) {
    state.rotation += p * 5
  }
}

function updateMovement(p) {
  // Behold! Mathematics for mapping a rotation to it's x, y components
  var accelerationVector = {
    x: p * .3 * Math.cos((state.rotation-90) * (Math.PI/180)),
    y: p * .3 * Math.sin((state.rotation-90) * (Math.PI/180))
  }

  if (state.pressedKeys.up) {
    state.movement.x += accelerationVector.x
    state.movement.y += accelerationVector.y
  }
  else if (state.pressedKeys.down) {
    state.movement.x -= accelerationVector.x
    state.movement.y -= accelerationVector.y
  }

  // Limit movement speed
  if (state.movement.x > 40) {
    state.movement.x = 40
  }
  else if (state.movement.x < -40) {
    state.movement.x = -40
  }
  if (state.movement.y > 40) {
    state.movement.y = 40
  }
  else if (state.movement.y < -40) {
    state.movement.y = -40
  }
}

function updatePosition(p) {
  state.position.x += state.movement.x
  state.position.y += state.movement.y

  // Detect boundaries
  if (state.position.x > width) {
    state.position.x -= width
  }
  else if (state.position.x < 0) {
    state.position.x += width
  }
  if (state.position.y > height) {
    state.position.y -= height
  }
  else if (state.position.y < 0) {
    state.position.y += height
  }
}
-------------------------FOCUS
<style>
a:focus, a:active {
    color: green;
}
</style>
function getfocus() {
    document.getElementById("myAnchor").focus();
}

function losefocus() {
    document.getElementById("myAnchor").blur();
}
--------------DRAG___DROP-------------
<style>
//la partie active
.droptarget {
    float: left; 
    width: 100px; 
    height: 35px;
    margin: 15px;
    padding: 10px;
    border: 1px solid #aaaaaa;
}
</style>

<p>This example uses the addEventListener() method to attach "dragstart", "drag", "dragover" and "drop" events to the document object.</p>

<p>Drag the p element back and forth between the two rectangles:</p>

<div class="droptarget">
  <p draggable="true" id="dragtarget">Drag me!</p>
</div>

<div class="droptarget"></div>

<p style="clear:both;"><strong>Note:</strong> drag events are not supported in Internet Explorer 8 and earlier versions or Safari 5.1 and earlier versions.</p>

<p id="demo"></p>


// Events fired on the drag target 
document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", event.target.id);
});

document.addEventListener("drag", function(event) {
    document.getElementById("demo").innerHTML = "The p element is being dragged";
});

// Events fired on the drop target 
document.addEventListener("dragover", function(event) {
    event.preventDefault();
});

document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
        document.getElementById("demo").innerHTML = "The p element was dropped";
    }
});

.droptarget {
    float: left; 
    width: 100px; 
    height: 35px;
    margin: 15px;
    padding: 10px;
    border: 1px solid #aaaaaa;
}


<p>Drag the p element back and forth between the two rectangles:</p>

<div class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)">
  <p ondragstart="dragStart(event)" ondrag="dragging(event)" draggable="true" id="dragtarget">Drag me!</p>
</div>

<div class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

<p style="clear:both;"><strong>Note:</strong> drag events are not supported in Internet Explorer 8 and earlier versions or Safari 5.1 and earlier versions.</p>

<p id="demo"></p>

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
    document.getElementById("demo").innerHTML = "The p element is being dragged";
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "The p element was dropped";
}

*/