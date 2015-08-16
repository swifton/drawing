function rightKeyDown() {
  num += 1;
  if (num > sheets.length - 1) num = 0;
  clear();
  sheets[num](); 
}
