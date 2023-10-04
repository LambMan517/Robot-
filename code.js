var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var eye1 = randomNumber(30, 50);
var eye2 = randomNumber(40, 70);
var eye3 = randomNumber(50, 25);
var MouthWidth = randomNumber(100, 250);
// 
background("purple");
fill("red");
rect(284, 151, 30, 30);
rect(69, 174, 30, 30);
rect(44, 244, 30, 30);
rect(335, 243, 30, 30);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(1, 255)));
regularPolygon(200, 200, 3, 200);
fill("yellow");
ellipse(142, 119, eye1, eye1);
ellipse(254, 119, eye2, eye2);
ellipse(199, 60, eye3, eye3);
fill(rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(1, 255)));
regularPolygon(200, 200, 4, 50);
fill("orange");
rect(125, 259, MouthWidth, 25);
fill("red");
rect(284, 151, 30, 30);
rect(69, 174, 30, 30);
rect(44, 244, 30, 30);
rect(335, 243, 30, 30);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
