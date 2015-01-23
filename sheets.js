function premature() {
  premOpt();
  frame.draw(50, 50, 100, 300)
  iron.draw(200, 200, 5, 5);
  house.draw(400, 200, 5, 5);

}

function shit() {
  ironn(600, 200, 5);
  houseWindow(200, 400, 20, 30);
  housee(400, 400, 500, 100, 50, 5, 2);
}

function houses() {
  for (k = 0; k < 5; k++) {
    for (l = 0; l < 3; l++) {
      housee(-250 + k * 300, -200 + l * 350, 100 * k, 100 * l, 50, k, l);
    }
  }
}

