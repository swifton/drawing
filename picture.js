// premature optimization

function picture(color, namexyu) {
  this.parameters = [];
  this.genFunc = [];
  this.points = [[0, 0]];
  this.elements = [];
  this.color = color;
  this.namexyu = namexyu;

  this.generate = generate;
  function generate() {
    for (i in this.genFunc) this.evaluate(this.genFunc[i]);
  }

  this.evaluate = evaluate;
  function evaluate(command) {
      var par = this.parameters[command[2]];
      if (command[4] == '-') par = -par;
      if (command[3] == 'x') {par = [par, 0];}
      else if (command[3] == 'y') {par = [0, par];}
      else if (command[3] == 'xy') {
        sign1 = 1;
        sign2 = 1;
        if (command[4][0] == '-') sign1 = -1;
        if (command[4][1] == '-') sign2 = -1;
        par = [par * sign1, par * sign2];
      }
      else {console.log("The generating function for " + this.namexyu + " is fucked up!");}
      this.points[command[0]] = add(this.points[command[1]], par);
  }

  this.check = check;
  function check() {
    var n = this.points.length;
    for (i in this.elements) {
      if (this.elements[i][1] > n - 1 || this.elements[i][2] > n - 1) {
        console.log("The picture " + this.namexyu + " is fucked up!");
      }
    }
  }

  this.draw = draw;
  function draw(x, y, sizex, sizey) {
    for (i in this.elements) {
      this.drawElement(this.elements[i], [x,y], [sizex, sizey]);
    }
  }

  this.drawElement = drawElement;
  function drawElement(element, pt, size) {
    if (element[0] == 'line') {
      line(add(mul(this.points[element[1]], size), pt), add(mul(this.points[element[2]], size), pt), color);
    }
  }

  function add(p1, p2) {
    return [p1[0] + p2[0], p1[1] + p2[1]];
  }

  function mul(p, a) {
    return [p[0] * a[0], p[1] * a[1]];
  }
}
