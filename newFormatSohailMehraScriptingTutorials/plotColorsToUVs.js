// Original script for pre v86 by Sohail Mehra
// https://www.youtube.com/user/SohailMehra
// plotting colors to matching UV values on a flat material

// How to load in modules
const Shaders = require('Shaders');
const Materials = require('Materials');
const Textures = require('Textures');
const Reactive = require('Reactive');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'


(async function () {  // Enables async/await in JS [part 1]

  // To access scene objects
  const [material0, cameraTexture] = await Promise.all([
    Materials.findFirst('material0'),
    Textures.findFirst('cameraTexture0')
  ]);

  const uv = Shaders.vertexAttribute({"variableName": Shaders.VertexAttribute.TEX_COORDS}); //vertex shader

  //map uv vertices to colors
  const uv_color = Reactive.pack4(uv.x, uv.y, 0, 1);

  //fragment shader
  const color = Shaders.textureSampler(cameraTexture.signal, uv); //fragment shader as its computing color

  //const final_color = uv_color;

  const textureSlot = Shaders.DefaultMaterialTextures.DIFFUSE; //fragment shader
  material0.setTextureSlot(textureSlot, uv_color); //fragment shader -> output
  

  // To access class properties
  // const directionalLightIntensity = directionalLight.intensity;

  // To log messages to the console
  // Diagnostics.log('Console message logged from the script.');

})(); // Enables async/await in JS [part 2]
