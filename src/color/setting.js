/**
 * @module Color
 * @submodule Setting
 * @for p5
 * @requires core
 * @requires constants
 */

'use strict';

var p5 = require('../core/main');
var constants = require('../core/constants');
require('./p5.Color');

/**
 * The <a href="#/p5/background">background()</a> function sets the color used for the background of the
 * p5.js canvas. The default background is light gray. This function is
 * typically used within <a href="#/p5/draw">draw()</a> to clear the display window at the beginning
 * of each frame, but it can be used inside <a href="#/p5/setup">setup()</a> to set the background on
 * the first frame of animation or if the background need only be set once.
 * <br><br>
 * The color is either specified in terms of the RGB, HSB, or HSL color
 * depending on the current <a href="#/p5/colorMode">colorMode</a>. (The default color space is RGB, with
 * each value in the range from 0 to 255). The alpha range by default is also 0 to 255.
 * <br><br>
 * If a single string argument is provided, RGB, RGBA and Hex CSS color strings
 * and all named color strings are supported. In this case, an alpha number
 * value as a second argument is not supported, the RGBA form should be used.
 * <br><br>
 * A <a href="#/p5.Color">p5.Color</a> object can also be provided to set the background color.
 * <br><br>
 * A <a href="#/p5.Image">p5.Image</a> can also be provided to set the background image.
 *
 * @method background
 * @param {p5.Color} color     any value created by the <a href="#/p5/color">color()</a> function
 * @chainable
 *
 * @example
 * <div>
 * <code>
 * // Grayscale integer value
 * background(51);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // R, G & B integer values
 * background(255, 204, 0);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // H, S & B integer values
 * colorMode(HSB);
 * background(255, 204, 100);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // Named SVG/CSS color string
 * background('red');
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // three-digit hexadecimal RGB notation
 * background('#fae');
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // six-digit hexadecimal RGB notation
 * background('#222222');
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // integer RGB notation
 * background('rgb(0,255,0)');
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // integer RGBA notation
 * background('rgba(0,255,0, 0.25)');
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // percentage RGB notation
 * background('rgb(100%,0%,10%)');
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // percentage RGBA notation
 * background('rgba(100%,0%,100%,0.5)');
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // p5 Color object
 * background(color(0, 0, 255));
 * </code>
 * </div>
 *
 * @alt
 * canvas with darkest charcoal grey background.
 * canvas with yellow background.
 * canvas with royal blue background.
 * canvas with red background.
 * canvas with pink background.
 * canvas with black background.
 * canvas with bright green background.
 * canvas with soft green background.
 * canvas with red background.
 * canvas with light purple background.
 * canvas with blue background.
 */

/**
 * @method background
 * @param {String} colorstring color string, possible formats include: integer
 *                         rgb() or rgba(), percentage rgb() or rgba(),
 *                         3-digit hex, 6-digit hex
 * @param {Number} [a]         opacity of the background relative to current
 *                             color range (default is 0-255)
 * @chainable
 */

/**
 * @method background
 * @param {Number} gray   specifies a value between white and black
 * @param {Number} [a]
 * @chainable
 */

/**
 * @method background
 * @param {Number} v1     red or hue value (depending on the current color
 *                        mode)
 * @param {Number} v2     green or saturation value (depending on the current
 *                        color mode)
 * @param {Number} v3     blue or brightness value (depending on the current
 *                        color mode)
 * @param  {Number} [a]
 * @chainable
 */

/**
 * @method background
 * @param  {Number[]}      values  an array containing the red,green,blue &
 *                                 and alpha components of the color
 * @chainable
 */

/**
 * @method background
 * @param {p5.Image} image     image created with <a href="#/p5/loadImage">loadImage()</a> or <a href="#/p5/createImage">createImage()</a>,
 *                             to set as background
 *                             (must be same size as the sketch window)
 * @param  {Number}  [a]
 * @chainable
 */

p5.prototype.background = function() {
  if (arguments[0] instanceof p5.Image) {
    this.image(arguments[0], 0, 0, this.width, this.height);
  } else {
    this._renderer.background.apply(this._renderer, arguments);
  }
  return this;
};

/**
 * Clears the pixels within a buffer. This function only works on p5.Canvas
 * objects created with the <a href="#/p5/createCanvas">createCanvas()</a> function; it won't work with the
 * main display window. Unlike the main graphics context, pixels in
 * additional graphics areas created with <a href="#/p5/createGraphics">createGraphics()</a> can be entirely
 * or partially transparent. This function clears everything to make all of
 * the pixels 100% transparent.
 *
 * @method clear
 * @chainable
 * @example
 * <div>
 * <code>
 * // Clear the screen on mouse press.
 * function setup() {
 *   createCanvas(100, 100);
 * }
 *
 * function draw() {
 *   ellipse(mouseX, mouseY, 20, 20);
 * }
 *
 * function mousePressed() {
 *   clear();
 * }
 * </code>
 * </div>
 *
 * @alt
 * 20x20 white ellipses are continually drawn at mouse x and y coordinates.
 *
 */

p5.prototype.clear = function() {
  this._renderer.clear();
  return this;
};

/**
 * <a href="#/p5/colorMode">colorMode()</a> changes the way p5.js interprets color data. By default, the
 * parameters for <a href="#/p5/fill">fill()</a>, <a href="#/p5/stroke">stroke()</a>, <a href="#/p5/background">background()</a>, and <a href="#/p5/color">color()</a> are defined by
 * values between 0 and 255 using the RGB color model. This is equivalent to
 * setting colorMode(RGB, 255). Setting colorMode(HSB) lets you use the HSB
 * system instead. By default, this is colorMode(HSB, 360, 100, 100, 1). You
 * can also use HSL.
 * <br><br>
 * Note: existing color objects remember the mode that they were created in,
 * so you can change modes as you like without affecting their appearance.
 *
 *
 * @method colorMode
 * @param {Constant} mode   either RGB, HSB or HSL, corresponding to
 *                          Red/Green/Blue and Hue/Saturation/Brightness
 *                          (or Lightness)
 * @param {Number}  [max]  range for all values
 * @chainable
 *
 * @example
 * <div>
 * <code>
 * noStroke();
 * colorMode(RGB, 100);
 * for (let i = 0; i < 100; i++) {
 *   for (let j = 0; j < 100; j++) {
 *     stroke(i, j, 0);
 *     point(i, j);
 *   }
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * noStroke();
 * colorMode(HSB, 100);
 * for (let i = 0; i < 100; i++) {
 *   for (let j = 0; j < 100; j++) {
 *     stroke(i, j, 100);
 *     point(i, j);
 *   }
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * colorMode(RGB, 255);
 * let c = color(127, 255, 0);
 *
 * colorMode(RGB, 1);
 * let myColor = c._getRed();
 * text(myColor, 10, 10, 80, 80);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * noFill();
 * colorMode(RGB, 255, 255, 255, 1);
 * background(255);
 *
 * strokeWeight(4);
 * stroke(255, 0, 10, 0.3);
 * ellipse(40, 40, 50, 50);
 * ellipse(50, 50, 40, 40);
 * </code>
 * </div>
 *
 * @alt
 *Green to red gradient from bottom L to top R. shading originates from top left.
 *Rainbow gradient from left to right. Brightness increasing to white at top.
 *unknown image.
 *50x50 ellipse at middle L & 40x40 ellipse at center. Transluscent pink outlines.
 *
 */
/**
 * @method colorMode
 * @param {Constant} mode
 * @param {Number} max1     range for the red or hue depending on the
 *                              current color mode
 * @param {Number} max2     range for the green or saturation depending
 *                              on the current color mode
 * @param {Number} max3     range for the blue or brightness/lighntess
 *                              depending on the current color mode
 * @param {Number} [maxA]   range for the alpha
 * @chainable
 */
p5.prototype.colorMode = function(mode, max1, max2, max3, maxA) {
  p5._validateParameters('colorMode', arguments);
  if (
    mode === constants.RGB ||
    mode === constants.HSB ||
    mode === constants.HSL
  ) {
    // Set color mode.
    this._colorMode = mode;

    // Set color maxes.
    var maxes = this._colorMaxes[mode];
    if (arguments.length === 2) {
      maxes[0] = max1; // Red
      maxes[1] = max1; // Green
      maxes[2] = max1; // Blue
      maxes[3] = max1; // Alpha
    } else if (arguments.length === 4) {
      maxes[0] = max1; // Red
      maxes[1] = max2; // Green
      maxes[2] = max3; // Blue
    } else if (arguments.length === 5) {
      maxes[0] = max1; // Red
      maxes[1] = max2; // Green
      maxes[2] = max3; // Blue
      maxes[3] = maxA; // Alpha
    }
  }

  return this;
};

/**
 * Sets the color used to fill shapes. For example, if you run
 * fill(204, 102, 0), all subsequent shapes will be filled with orange. This
 * color is either specified in terms of the RGB or HSB color depending on
 * the current <a href="#/p5/colorMode">colorMode()</a>. (The default color space is RGB, with each value
 * in the range from 0 to 255). The alpha range by default is also 0 to 255.
 * <br><br>
 * If a single string argument is provided, RGB, RGBA and Hex CSS color strings
 * and all named color strings are supported. In this case, an alpha number
 * value as a second argument is not supported, the RGBA form should be used.
 * <br><br>
 * A p5 <a href="#/p5.Color">Color</a> object can also be provided to set the fill color.
 *
 * @method fill
 * @param  {Number}        v1      red or hue value relative to
 *                                 the current color range
 * @param  {Number}        v2      green or saturation value
 *                                 relative to the current color range
 * @param  {Number}        v3      blue or brightness value
 *                                 relative to the current color range
 * @param  {Number}        [alpha]
 * @chainable
 * @example
 * <div>
 * <code>
 * // Grayscale integer value
 * fill(51);
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // R, G & B integer values
 * fill(255, 204, 0);
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // H, S & B integer values
 * colorMode(HSB);
 * fill(255, 204, 100);
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // Named SVG/CSS color string
 * fill('red');
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // three-digit hexadecimal RGB notation
 * fill('#fae');
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // six-digit hexadecimal RGB notation
 * fill('#222222');
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // integer RGB notation
 * fill('rgb(0,255,0)');
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // integer RGBA notation
 * fill('rgba(0,255,0, 0.25)');
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // percentage RGB notation
 * fill('rgb(100%,0%,10%)');
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // percentage RGBA notation
 * fill('rgba(100%,0%,100%,0.5)');
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // p5 Color object
 * fill(color(0, 0, 255));
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 * @alt
 * 60x60 dark charcoal grey rect with black outline in center of canvas.
 * 60x60 yellow rect with black outline in center of canvas.
 * 60x60 royal blue rect with black outline in center of canvas.
 * 60x60 red rect with black outline in center of canvas.
 * 60x60 pink rect with black outline in center of canvas.
 * 60x60 black rect with black outline in center of canvas.
 * 60x60 light green rect with black outline in center of canvas.
 * 60x60 soft green rect with black outline in center of canvas.
 * 60x60 red rect with black outline in center of canvas.
 * 60x60 dark fushcia rect with black outline in center of canvas.
 * 60x60 blue rect with black outline in center of canvas.
 */

/**
 * @method fill
 * @param  {String}        value   a color string
 * @chainable
 */

/**
 * @method fill
 * @param  {Number}        gray   a gray value
 * @param  {Number}        [alpha]
 * @chainable
 */

/**
 * @method fill
 * @param  {Number[]}      values  an array containing the red,green,blue &
 *                                 and alpha components of the color
 * @chainable
 */

/**
 * @method fill
 * @param  {p5.Color}      color   the fill color
 * @chainable
 */
p5.prototype.fill = function() {
  this._renderer._setProperty('_fillSet', true);
  this._renderer._setProperty('_doFill', true);
  this._renderer.fill.apply(this._renderer, arguments);
  return this;
};

/**
 * Disables filling geometry. If both <a href="#/p5/noStroke">noStroke()</a> and <a href="#/p5/noFill">noFill()</a> are called,
 * nothing will be drawn to the screen.
 *
 * @method noFill
 * @chainable
 * @example
 * <div>
 * <code>
 * rect(15, 10, 55, 55);
 * noFill();
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div modernizr='webgl'>
 * <code>
 * function setup() {
 *   createCanvas(100, 100, WEBGL);
 * }
 *
 * function draw() {
 *   background(0);
 *   noFill();
 *   stroke(100, 100, 240);
 *   rotateX(frameCount * 0.01);
 *   rotateY(frameCount * 0.01);
 *   box(45, 45, 45);
 * }
 * </code>
 * </div>
 *
 * @alt
 * white rect top middle and noFill rect center. Both 60x60 with black outlines.
 * black canvas with purple cube wireframe spinning
 */
p5.prototype.noFill = function() {
  this._renderer._setProperty('_doFill', false);
  return this;
};

/**
 * Disables drawing the stroke (outline). If both <a href="#/p5/noStroke">noStroke()</a> and <a href="#/p5/noFill">noFill()</a>
 * are called, nothing will be drawn to the screen.
 *
 * @method noStroke
 * @chainable
 * @example
 * <div>
 * <code>
 * noStroke();
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div modernizr='webgl'>
 * <code>
 * function setup() {
 *   createCanvas(100, 100, WEBGL);
 * }
 *
 * function draw() {
 *   background(0);
 *   noStroke();
 *   fill(240, 150, 150);
 *   rotateX(frameCount * 0.01);
 *   rotateY(frameCount * 0.01);
 *   box(45, 45, 45);
 * }
 * </code>
 * </div>
 *
 * @alt
 * 60x60 white rect at center. no outline.
 * black canvas with pink cube spinning
 */
p5.prototype.noStroke = function() {
  this._renderer._setProperty('_doStroke', false);
  return this;
};

/**
 * Sets the color used to draw lines and borders around shapes. This color
 * is either specified in terms of the RGB or HSB color depending on the
 * current <a href="#/p5/colorMode">colorMode()</a> (the default color space is RGB, with each value in
 * the range from 0 to 255). The alpha range by default is also 0 to 255.
 * <br><br>
 * If a single string argument is provided, RGB, RGBA and Hex CSS color
 * strings and all named color strings are supported. In this case, an alpha
 * number value as a second argument is not supported, the RGBA form should be
 * used.
 * <br><br>
 * A p5 <a href="#/p5.Color">Color</a> object can also be provided to set the stroke color.
 *
 *
 * @method stroke
 * @param  {Number}        v1      red or hue value relative to
 *                                 the current color range
 * @param  {Number}        v2      green or saturation value
 *                                 relative to the current color range
 * @param  {Number}        v3      blue or brightness value
 *                                 relative to the current color range
 * @param  {Number}        [alpha]
 * @chainable
 *
 * @example
 * <div>
 * <code>
 * // Grayscale integer value
 * strokeWeight(4);
 * stroke(51);
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // R, G & B integer values
 * stroke(255, 204, 0);
 * strokeWeight(4);
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // H, S & B integer values
 * colorMode(HSB);
 * strokeWeight(4);
 * stroke(255, 204, 100);
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // Named SVG/CSS color string
 * stroke('red');
 * strokeWeight(4);
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // three-digit hexadecimal RGB notation
 * stroke('#fae');
 * strokeWeight(4);
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // six-digit hexadecimal RGB notation
 * stroke('#222222');
 * strokeWeight(4);
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // integer RGB notation
 * stroke('rgb(0,255,0)');
 * strokeWeight(4);
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // integer RGBA notation
 * stroke('rgba(0,255,0,0.25)');
 * strokeWeight(4);
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // percentage RGB notation
 * stroke('rgb(100%,0%,10%)');
 * strokeWeight(4);
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // percentage RGBA notation
 * stroke('rgba(100%,0%,100%,0.5)');
 * strokeWeight(4);
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // p5 Color object
 * stroke(color(0, 0, 255));
 * strokeWeight(4);
 * rect(20, 20, 60, 60);
 * </code>
 * </div>
 *
 * @alt
 * 60x60 white rect at center. Dark charcoal grey outline.
 * 60x60 white rect at center. Yellow outline.
 * 60x60 white rect at center. Royal blue outline.
 * 60x60 white rect at center. Red outline.
 * 60x60 white rect at center. Pink outline.
 * 60x60 white rect at center. Black outline.
 * 60x60 white rect at center. Bright green outline.
 * 60x60 white rect at center. Soft green outline.
 * 60x60 white rect at center. Red outline.
 * 60x60 white rect at center. Dark fushcia outline.
 * 60x60 white rect at center. Blue outline.
 */

/**
 * @method stroke
 * @param  {String}        value   a color string
 * @chainable
 */

/**
 * @method stroke
 * @param  {Number}        gray   a gray value
 * @param  {Number}        [alpha]
 * @chainable
 */

/**
 * @method stroke
 * @param  {Number[]}      values  an array containing the red,green,blue &
 *                                 and alpha components of the color
 * @chainable
 */

/**
 * @method stroke
 * @param  {p5.Color}      color   the stroke color
 * @chainable
 */

p5.prototype.stroke = function() {
  this._renderer._setProperty('_strokeSet', true);
  this._renderer._setProperty('_doStroke', true);
  this._renderer.stroke.apply(this._renderer, arguments);
  return this;
};

module.exports = p5;
