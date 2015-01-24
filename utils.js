function add(p1, p2) {
  return [p1[0] + p2[0], p1[1] + p2[1]];
}

function sub(p1, p2) {
  return add(p1, [-p2[0], -p2[1]]);
}

function pOnCir(center, radius, angle) {
  return add(center, [radius * Math.cos(angle), -radius * Math.sin(angle)]);
}
