var pos1 = {x:100, y:200};
var pos2 = {x:500, y:1200};

pos1.x = pos2.x;
console.log(pos1.x);

pos2 = pos1;
pos1.x = pos2.y;
console.log(pos1.x);