function picture(color, parameters) {
  this.parameters = parameters;
  this.points = [];
  this.elements = [];
  this.color = color;

  this.draw = draw;
  function draw(x, y) {
    for (i in this.elements) {
      drawElement(elements[i], [x,y]);
    }
  }

  function drawElement(element, pt) {
    if (element[0] = 'line') line(add(element[1], pt), add(element[2], pt), color);
  }

  function add(p1, p2) {
    return [p1[0] + p2[0], p1[1] + p2[1]]
  }
}