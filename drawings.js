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


