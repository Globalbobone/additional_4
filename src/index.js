module.exports = function multiply (first, second) {
  var arrres = [];
  var first = first.split('');
  first = first.reverse();
  var second = second.split('');
  second = second.reverse();
  for (var i = 0; first[i] >= 0; i++) {
    for (var j = 0; second[j] >= 0; j++) {
      if (!arrres[i + j]) arrres[i + j] = 0;
      arrres[i + j] += first[i] * second[j];
    }
  }
  for (var i = 0; arrres[i] >= 0; i++) {
    if (arrres[i] >= 10) {
      if (!arrres[i + 1]) arrres[i + 1] = 0;
      arrres[i + 1] += Number.parseInt(arrres[i] / 10);
      arrres[i] %= 10;
    }
  }
  arrres = arrres.reverse();
  return arrres.join('');
}
