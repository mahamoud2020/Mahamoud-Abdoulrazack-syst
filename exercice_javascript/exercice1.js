'use strict';
function min(a, b) {
  return (a < b)? a : b;
}

function max (a, b) {
  if (a > b)
  return a;
  else
  return b;
}
console.log("Minimun entre 2 et 8 : " + min(2, 8));
console.log("Minimun entre 8 et 2 : " + min(8, 2));
console.log("Maximun entre 2 et 8 : " + max(2, 8));
console.log("Maximun entre 8 et 2 : " + max(8, 2));
