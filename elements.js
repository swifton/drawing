var svg = document.getElementById("svg");

function style(color, thickness) {
  thickness = thickness || 2;
  return "stroke:rgb(" + color[0] + "," + color[1] + "," + color[2] + ");stroke-width:" + thickness.toString();
}

function line(point1, point2, color, thickness) {
  color = color || [0, 0, 0];
  var shape = document.createElementNS("http://www.w3.org/2000/svg", "line");
  shape.setAttribute("style", style(color, thickness));
  shape.setAttribute("x1", point1[0]);
  shape.setAttribute("x2", point2[0]);
  shape.setAttribute("y1", point1[1]);
  shape.setAttribute("y2", point2[1]);
  svg.appendChild(shape);
}

function circle(x, y, r, color) {
  var shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  shape.setAttribute("style", style(color));
  shape.setAttribute("fill", "none");
  shape.setAttribute("r", r);
  shape.setAttribute("cx", x);
  shape.setAttribute("cy", y);
  svg.appendChild(shape);
}

function pToS(p) {
  return p[0].toString() + ", " + p[1].toString();
}

function myarc(center, a1, a2, r) {
  var shape = document.createElementNS("http://www.w3.org/2000/svg", "path");
  var startP = pOnCir(center, r, a1);
  var endP = pOnCir(center, r, a2);
  var start = pToS(startP);
  var end = pToS(endP);
  var R = pToS([r, r]);

  shape.setAttribute("d", "M " + start + " A " + R + " 0 1 0 " + end);
  shape.setAttribute("stroke", "black");
  shape.setAttribute("stroke-width", 2);
  shape.setAttribute("fill", "none");
  svg.appendChild(shape);
}

function arc(start, end, r, or, large) {
  var shape = document.createElementNS("http://www.w3.org/2000/svg", "path");
  var start = pToS(start);
  var end = pToS(end);
  var R = pToS([r, r]);


  shape.setAttribute("d", "M " + start + " A " + R + " 0 " + large.toString() + " " + or.toString() + " " + end);
  shape.setAttribute("stroke", "black");
  shape.setAttribute("stroke-width", 2);
  shape.setAttribute("fill", "none");
  svg.appendChild(shape);
}

function rect(x, y, wid, heit, fill) {
  fill = fill || "white";
  var shape = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  shape.setAttribute("x", x);
  shape.setAttribute("y", y);
  shape.setAttribute("width", wid);
  shape.setAttribute("height", heit);
  shape.setAttribute("fill", fill);
  svg.appendChild(shape);
}

function clear() {
  rect(0, 0, 2000, 2000);
}

function rectangle(LT, length, height, color) {
  var LB = add(LT, [0, height]);
  var RB = add(LB, [length, 0]);
  var RT = add(LT, [length, 0]);

  fourGon(LT, RT, LB, RB, color);
}

function triangle(x, y, z, color) {
  line(x, y, color);
  line(y, z, color);
  line(z, x, color);
}

function fourGon(LT, RT, LB, RB, color) {
  line(LT, RT, color);
  line(LB, RB, color);
  line(LT, LB, color);
  line(RT, RB, color);
}

function roundedRectangle(LT, length, height, radius, color) {
  var LB = add(LT, [0, height]);
  var RB = add(LB, [length, 0]);
  var RT = add(LT, [length, 0]);

  line(LT, RT, color);
  line(LB, RB, color);
  line(LT, LB, color);
  line(RT, RB, color);

  // unfinished
}

function hexagon(center, radius, fill) {
  var fill = fill || "white";
  var shape = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  var points = '';
  for (i = 0; i < 6; i++) {
    var angle = i * (2 * Math.PI / 6) + Math.PI / 6;
    var p = pOnCir(center, radius, angle);
    points += p[0].toString() + ', ' + p[1].toString() + ' ';
  }
  shape.setAttribute("points", points);
  shape.setAttribute("fill", fill);
  svg.appendChild(shape);
}

















