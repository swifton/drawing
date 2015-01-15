function frame(x1, y1, width, height) {
  line([x1, y1], [x1 + width, y1], [0, 0, 0]);
  line([x1, y1 + height], [x1, y1], [0, 0, 0]);
  line([x1, y1 + height], [x1 + width, y1 + height], [0, 0, 0]);
  line([x1 + width, y1 + height], [x1 + width, y1], [0, 0, 0]);
}

frame = new drawing([0, 0, 0], );
frame.points = []

function iron(x, y, size) {
  var color = [0, 175, 0]
  line(x, y + 30, x + 30, y + 30, color);
  line(x, y + 30, x + 10, y + 20, color);
  line(x + 10, y + 20, x + 30, y + 20, color);
  line(x + 30, y + 20, x + 30, y + 30, color);
  line(x + 12, y + 20, x + 12, y + 15, color);
  line(x + 12, y + 15, x + 28, y + 15, color);
  line(x + 28, y + 15, x + 28, y + 20, color);
}
