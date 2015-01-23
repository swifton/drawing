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


function addv(p1, p2) {
  return [p1[0] + p2[0], p1[1] + p2[1]];
}

function ironn(x, y, scale) {
  var color = [0, 0, 0];
  var height = scale * 10;
  var baseH = scale * 7;
  var handleH = height - baseH;
  var length = scale * 25;
  var smallL = scale * 20;
  var handleL = scale * 16;
  var handleOffset = scale * 2; 
  
  var baseLB = [x, y + height];
  var baseRB = [x + length, y + height];
  var baseLT = [x + length - smallL, y + height - baseH];
  var baseRT = [x + length, y  + height - baseH];
  var handleLB = addv(baseLT, [handleOffset,0]);
  var handleRB = addv(baseRT, [-handleOffset, 0]);
  var handleLT = addv(handleLB, [0, -handleH]);
  var handleRT = addv(handleRB, [0, -handleH]);
  
  line(baseLB, baseRB, color); // iron
  line(baseLB, baseLT, color);
  line(baseRB, baseRT, color);
  line(baseLT, baseRT, color);

  line(handleLB, handleLT, color); // hanldle
  line(handleRB, handleRT, color);
  line(handleLT, handleRT, color);
}
