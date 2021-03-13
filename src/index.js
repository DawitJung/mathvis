import P5 from "p5";

const sketch = p5 => {
  const canvasSize = 1000;
  const O = 110;
  const r = 100;
  let t = 0;
  const speed = 0.005;
  let x, y;
  p5.setup = () => {
    p5.createCanvas(canvasSize, canvasSize);
  };
  p5.draw = () => {
    t += speed;
    p5.background(0);
    updateXY();
    drawAxes();
    drawCircle();
    drawCos();
    drawSin();
    drawPoint();
  };
  function updateXY() {
    x = getX();
    y = getY();
  }
  function getX(_t = t) {
    return O + r * Math.sin(_t * Math.PI);
  }
  function getY(_t = t) {
    return O + r * Math.cos(_t * Math.PI);
  }
  function drawAxes() {
    p5.strokeWeight(1);
    p5.stroke("rgb(0,255,0)");
    p5.line(0, O, canvasSize, O);
    p5.line(O, 0, O, canvasSize);
  }
  function drawCircle() {
    p5.strokeWeight(1);
    p5.stroke(255);
    p5.noFill();
    p5.circle(O, O, r * 2);
  }
  function drawPoint() {
    p5.stroke(255);
    p5.fill(255);
    p5.rect(x - 2, y - 2, 5, 5);
  }
  function drawCos() {
    p5.stroke("rgb(255,0,0)");
    p5.fill("rgb(255,0,0)");
    p5.strokeWeight(2);
    p5.line(x, y, O + r, y);
    let prevPoint = [O + r, y];
    for (let _x = 0; _x < canvasSize - O - r; _x++) {
      const y = getY(t - _x * speed);
      const newPoint = [_x + O + r, y];
      p5.line(...prevPoint, ...newPoint);
      prevPoint = [...newPoint];
    }
    p5.rect(O + r - 2, y - 2, 5, 5);
  }
  function drawSin() {
    p5.stroke("rgb(0,100,255)");
    p5.fill("rgb(0,100,255)");
    p5.strokeWeight(2);
    p5.line(x, y, x, O + r);
    let prevPoint = [x, O + r];
    for (let _y = 0; _y < canvasSize - O - r; _y++) {
      const x = getX(t - _y * speed);
      const newPoint = [x, _y + O + r];
      p5.line(...prevPoint, ...newPoint);
      prevPoint = [...newPoint];
    }
    p5.rect(x - 2, O + r - 2, 5, 5);
  }
};

new P5(sketch);
