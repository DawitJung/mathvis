import P5 from "p5";

const sketch = p5 => {
  let time = 0;
  const canvasSize = 1000;
  const O = Math.floor(canvasSize / 2);
  p5.setup = () => {
    p5.createCanvas(canvasSize, canvasSize);
  };
  p5.draw = () => {
    time += 0.005;
    const x = O + 250 * Math.sin(time * Math.PI);
    const y = O + 250 * Math.cos(time * Math.PI);
    p5.background(0);
    drawAxes();
    drawPoint(x, y);
  };
  function drawAxes() {
    p5.stroke("rgb(0,255,0)");
    p5.line(0, O, canvasSize, O);
    p5.line(O, 0, O, canvasSize);
  }

  function drawPoint(x, y) {
    p5.stroke("rgb(0,255,255)");
    p5.fill("rgb(0,255,255)");
    p5.ellipse(x, y, 2, 2);
  }
};

new P5(sketch);
