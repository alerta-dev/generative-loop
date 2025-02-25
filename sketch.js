let numCirclesSlider;
let baseRadiusSlider;
let radiusIncrementSlider;
let frequencySlider;
let maxStrokeWidthSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Create sliders with labels
  createP('Number of Circles').position(20, 0);
  numCirclesSlider = createSlider(1, 20, 5, 1);
  numCirclesSlider.position(20, 20);
  
  createP('Base Radius').position(20, 40);
  baseRadiusSlider = createSlider(10, 200, 50, 1);
  baseRadiusSlider.position(20, 60);
  
  createP('Radius Increment').position(20, 80);
  radiusIncrementSlider = createSlider(10, 50, 20, 1);
  radiusIncrementSlider.position(20, 100);
  
  createP('Oscillation Frequency').position(20, 120);
  frequencySlider = createSlider(0.001, 0.1, 0.01, 0.001);
  frequencySlider.position(20, 140);
  
  createP('Max Stroke Width').position(20, 160);
  maxStrokeWidthSlider = createSlider(1, 20, 10, 1);
  maxStrokeWidthSlider.position(20, 180);
}

function draw() {
  background(0); // Black background
  
  // Retrieve current parameter values
  let numCircles = numCirclesSlider.value();
  let baseRadius = baseRadiusSlider.value();
  let radiusIncrement = radiusIncrementSlider.value();
  let frequency = frequencySlider.value();
  let maxStrokeWidth = maxStrokeWidthSlider.value();
  
  let time = millis() / 1000; // Time in seconds
  let phaseOffset = 2 * PI / numCircles;
  let centerX = width / 2;
  let centerY = height / 2;
  
  noFill(); // Circles are outlines only
  stroke(255); // White stroke color
  
  // Draw each circle
  for (let i = 0; i < numCircles; i++) {
    let radius = baseRadius + i * radiusIncrement;
    let arg = 2 * PI * frequency * time + i * phaseOffset;
    let strokeWidth = maxStrokeWidth * (0.5 + 0.5 * sin(arg));
    strokeWeight(strokeWidth);
    ellipse(centerX, centerY, radius * 2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
