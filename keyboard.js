function doKeyDown(e) {
  var i = e.keyCode;
//  console.log(i);
  if (i == 39 || i == 37) {
    num += 1;
    if (num > sheets.length - 1) num = 0;
    clear();
    sheets[num]();
  }
}

window.addEventListener( "keydown", doKeyDown, true);
