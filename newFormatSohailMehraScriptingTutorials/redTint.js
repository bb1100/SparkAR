// Original script for pre v86 by Sohail Mehra 
// https://www.youtube.com/user/SohailMehra
//This project adds a red tint to the flat material0 to rectangle0

// How to load in modules
const Material = require('Materials');
const Shaders = require('Shaders');
const Textures = require('Textures');
const Reactive = require('Reactive');
const Time = require('Time');


// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');


(async function () {  // Enables async/await in JS [part 1]

  // To access scene objects
  const [material0, cameraTexture] = await Promise.all([
    Material.findFirst('material0'),
    Textures.findFirst('cameraTexture0')
  ]);

  // To log messages to the console
  // Diagnostics.log('hi');
  
    const uvs = Shaders.vertexAttribute({"variableName" : Shaders.VertexAttribute.TEX_COORDS});
    
    //add animation
    const currentTime = Reactive.mul(Time.ms, 0.0001);
    const curve = Reactive.abs(Reactive.tan(currentTime));
    
    
    const color = Shaders.textureSampler(cameraTexture.signal, uvs);
    //changes blue value for color animation - use Reactive.pack4(1,0,0,1) for constant color
    const modulationColor = Reactive.pack4(1, 0, curve, 1);
    const finalColor = Reactive.mul(color, modulationColor);
  
    const textureSlot = Shaders.DefaultMaterialTextures.DIFFUSE;
    material0.setTextureSlot(textureSlot, finalColor);

})(); // Enables async/await in JS [part 2]
