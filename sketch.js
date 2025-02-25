let numCirclesSlider, baseRadiusSlider, radiusIncrementSlider, frequencySlider;
let minStrokeWidthSlider, maxStrokeWidthSlider, phaseOffsetSlider;

function setup() {
  createCanvas(600, 600);

  // Create sliders for existing controls
  createP('Number of Circles').position(20, 80);
  numCirclesSlider = createSlider(1, 20, 10, 1);
  numCirclesSlider.position(20, 100);

  createP('Base Radius').position(20, 120);
  baseRadiusSlider = createSlider(10, 200, 50, 1);
  baseRadiusSlider.position(20, 140);

  createP('Radius Increment').position(20, 160);
  radiusIncrementSlider = createSlider(10, 50, 20, 1);
  radiusIncrementSlider.position(20, 180);

  createP('Oscillation Frequency').position(20, 200);
  frequencySlider = createSlider(0.001, 0.1, 0.02, 0.001);
  frequencySlider.position(20, 220);

  // Create new sliders for additional controls
  createP('Min Stroke Width').position(20, 240);
  minStrokeWidthSlider = createSlider(0, 20, 1, 0.1);
  minStrokeWidthSlider.position(20, 260);

  createP('Max Stroke Width').position(20, 280);
  maxStrokeWidthSlider = createSlider(1, 20, 10, 0.1);
  maxStrokeWidthSlider.position(20, 300);

  createP('Phase Offset Factor').position(20, 320);
  phaseOffsetSlider = createSlider(0, 1, 1, 0.01);
  phaseOffsetSlider.position(20, 340);
}

function draw() {
  background(0); // Black background

  // Retrieve slider values
  let numCircles = numCirclesSlider.value();
  let baseRadius = baseRadiusSlider.value();
  let radiusIncrement = radiusIncrementSlider.value();
  let frequency = frequencySlider.value();
  let minStrokeWidth = minStrokeWidthSlider.value();
  let maxStrokeWidth = maxStrokeWidthSlider.value();
  let phaseOffsetFactor = phaseOffsetSlider.value();

  // Ensure min and max stroke widths are ordered correctly
  let actualMinSW = min(minStrokeWidth, maxStrokeWidth);
  let actualMaxSW = max(minStrokeWidth, maxStrokeWidth);

  let time = millis() / 1000; // Time in seconds for animation
  let phaseOffset = phaseOffsetFactor * 2 * PI / numCircles;
  let centerX = width / 2;
  let centerY = height / 2;

  noFill(); // Draw outlines only
  stroke(255); // White stroke color

  // Draw each circle
  for (let i = 0; i < numCircles; i++) {
    let radius = baseRadius + i * radiusIncrement;
    let arg = 2 * PI * frequency * time + i * phaseOffset;
    let strokeWidth = actualMinSW + (actualMaxSW - actualMinSW) * (0.5 + 0.5 * sin(arg));
    strokeWeight(strokeWidth);
    ellipse(centerX, centerY, radius * 2);
  }
}
