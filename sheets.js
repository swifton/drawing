function premature() {
  premOpt();
  framee.draw(50, 50, 100, 300)
  ironn.draw(200, 200, 5, 5);
  housee.draw(400, 200, 5, 5);

}

function shit() {
  helmet(100, 100, 2);
  axe(300, 200, 4);
  iron(600, 200, 5);
  houseWindow(200, 400, 20, 30);
  house(400, 400, 500, 100, 50, 5, 2);
  //roundedRectangle([20, 20], 100, 100, 5, [175, 0, 0]);
  bikeWheel(1000, 200, 50);
  lamp(1200, 400, 8);
}

function texturing() {
  texture(20, 20, 100, 100);
  texturedWheel(650, 150, 50);
  texturedWheel(450, 150, 100);
  texturedLamp(800, 350, 8)
  snowflake(150, 500, 100);
}

function houses() {
  for (k = 0; k < 5; k++) {
    for (l = 0; l < 3; l++) {
      house(-250 + k * 300, -200 + l * 350, 100 * k, 100 * l, 50, k, l);
    }
  }
}

function carpets() {
  var size = 20;

  for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
      carpet1(50 + i * size * 3, 50 + j * size * 3, size);
    }
  }

  for (i = 0; i < 10; i++) {
    for (j = 0; j < 5; j++) {
      carpet1(850 + i * size * 3, 50 + j * size * 9, size);
      carpet1(850 + size + i * size * 3, 50 + size * 3 + j * size * 9, size);
      carpet1(850 + size * 2 + i * size * 3, 50 + size * 6 + j * size * 9, size);
    }
  }  
}






















