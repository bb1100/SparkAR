var Materials = require('Materials');
var TouchGestures = require('TouchGestures');
var objectToChange = Scene.root.find("facemesh0");

var mats = [ 
Materials.get("green"),
Materials.get("red"),
Materials.get("blue")
];

var mat_index = 0;
objectToChange.material = mats[mat_index];
TouchGestures.onTap().subscribe(toggleMaterial);

function toggleMaterial() {
  mat_index++;

  if (mat_index >= mats.length) {
    mat_index = 0;
  }

  objectToChange.material = mats[mat_index];
}

const Instruction = require('Instruction');
Instruction.bind(true, 'tap_to_change');
