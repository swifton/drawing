frame = new picture([0, 0, 0], "frame");
frame.points = [[0, 0], [0, 1], [1, 0], [1, 1]];
frame.elements = [['line', 0, 1], ['line', 0, 2], ['line', 1, 3], ['line', 2, 3]];
frame.check();

iron = new picture([0, 175, 0], "iron"); 
iron.points = [[0, 30], [30, 30], [10, 20], [30, 20], [30, 30], [12, 20], [12, 15], [28, 15], [28, 20]];
iron.genFunc = [];
iron.generate();
iron.elements = [['line', 0, 1], ['line', 0, 2], ['line', 2, 3], ['line', 3, 4], ['line', 5, 6], ['line', 6, 7], ['line', 7, 8]];
iron.check();


