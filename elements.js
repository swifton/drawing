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


function arc(x, y, a1, a2, r, color) {
  var shape = document.createElementNS("http://www.w3.org/2000/svg", "path");
  var center = x.toString() + ", " + y.toString();
  var start = 

  shape.setAttribute("d", "M " + start + " A " + "76,55" + " 0 1 0 " + "433,278");
  shape.setAttribute("stroke", "black");
  shape.setAttribute("stroke-width", 2);
  shape.setAttribute("fill", "none");
  svg.appendChild(shape);
}

function rect(x, y, wid, heit) {
  var shape = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  shape.setAttribute("x", x);
  shape.setAttribute("y", y);
  shape.setAttribute("width", wid);
  shape.setAttribute("height", heit);
  shape.setAttribute("fill", "white");
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



















