function premOpt() {
  frame = new picture([0, 0, 0], "frame");
  frame.points = [[0, 0], [0, 1], [1, 0], [1, 1]];
  frame.elements = [['line', 0, 1], ['line', 0, 2], ['line', 1, 3], ['line', 2, 3]];
  frame.check();

  iron = new picture([0, 175, 0], "iron"); 
  iron.parameters = [5, 16, 7, 25, 20, 2]; // handle height, handle length, iron heigth, iron length, iron small length, handle offset
  iron.genFunc = [[1, 0, 3, 'x', '+'], [2, 1, 2, 'y', '-'], [3, 2, 4, 'x', '-'], [4, 2, 2, 'y', '+'], [5, 3, 5, 'x', '+'], [6, 5, 0, 'y', '-'], [7, 6, 1, 'x', '+'], [8, 7, 0, 'y', '+']];
  iron.generate();
  iron.elements = [['line', 0, 1], ['line', 0, 3], ['line', 2, 3], ['line', 2, 4], ['line', 5, 6], ['line', 6, 7], ['line', 7, 8]];
  iron.check();

  house = new picture([0, 175, 0], "house"); 
  house.parameters = [20, 15, 10, 5, 3]; // length, height, roof height, window offset, window size
  house.genFunc = [[1, 0, 0, 'x', '+'], [2, 1, 1, 'y', '-'], [3, 2, 0, 'x', '-'], [4, 3, 2, 'xy', '+-'], [5, 4, 2, 'xy', '--'], [6, 0, 3, 'xy', '+-'], [7, 6, 4, 'x', '+'], [8, 7, 4, 'x', '+'], [9, 8, 4, 'y', '-'], [10, 9, 4, 'y', '-'], [11, 10, 4, 'x', '-'], [12, 11, 4, 'x', '-'], [13, 12, 4, 'y', '+']];
  house.generate();
  house.elements = [['line', 0, 1], ['line', 1, 2], ['line', 2, 3], ['line', 0, 3], ['line', 3, 4], ['line', 4, 2], ['line', 6, 7], ['line', 7, 8], ['line', 8, 9], ['line', 9, 10], ['line', 10, 11], ['line', 11, 12], ['line', 12, 13], ['line', 9, 13], ['line', 11, 7], ['line', 13, 6]];
  house.check();
}

function add(p1, p2) {
  return [p1[0] + p2[0], p1[1] + p2[1]];
}

function ironn(x, y, scale) {
  var color = [0, 0, 0];
  var height = scale * 10;
  var baseH = scale * 7;
  var handleH = height - baseH;
  var length = scale * 25;
  var smallL = scale * 20;
  var handleOffset = scale * 2; 
  
  var origin = [x, y];
  var baseLB = add(origin, [0, height]);
  var baseRB = add(baseLB, [length, 0]);
  var baseLT = add(baseRB, [- smallL, - baseH]);
  var baseRT = add(baseRB, [0, - baseH]);
  var handleLB = add(baseLT, [handleOffset,0]);
  var handleRB = add(baseRT, [-handleOffset, 0]);
  var handleLT = add(handleLB, [0, -handleH]);
  var handleRT = add(handleRB, [0, -handleH]);
  
  line(baseLB, baseRB, color); // iron
  line(baseLB, baseLT, color);
  line(baseRB, baseRT, color);
  line(baseLT, baseRT, color);

  line(handleLB, handleLT, color); // hanldle
  line(handleRB, handleRT, color);
  line(handleLT, handleRT, color);
}

function houseWindow(x, y, length, height) {
  var halfH = height / 2;
  var halfL = length / 2;
  var color = [0, 0, 0];

  var LT = [x, y];
  var LM = add(LT, [0, halfH]);
  var BM = add(LM, [halfL, halfH]);
  var TM = add(LT, [halfL, 0]);
  var RM = add(TM, [halfL, halfH]);

  rectangle(LT, length, height, color);
  line(LM, RM, color);
  line(TM, BM, color);
}

function rectangle(LT, length, height, color) {
  var LB = add(LT, [0, height]);
  var RB = add(LB, [length, 0]);
  var RT = add(LT, [length, 0]);

  line(LT, RT, color);
  line(LB, RB, color);
  line(LT, LB, color);
  line(RT, RB, color);
}

function triangle(x, y, z, color) {
  line(x, y, color);
  line(y, z, color);
  line(z, x, color);
}

function housee(x, y, length, height, roofH, windowsX, windowsY) {
  var LT = [x, y];
  var color = [0, 0, 0];
  var roofT = add(LT, [length / 2, -roofH]);
  var RT = add(LT, [length, 0]); 

  triangle(LT, roofT, RT, color);
  rectangle(LT, length, height, color);

  var winL = length / (2 * windowsX + 1);
  var winH = height / (2 * windowsY + 1);

  for (i = 0; i < windowsX; i++) {
    for (j = 0; j < windowsY; j++) {
      houseWindow(x + (2 * i + 1) * winL, y + (2 * j + 1) * winH, winL, winH);
    }
  }
}


























