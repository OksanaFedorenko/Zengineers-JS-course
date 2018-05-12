

var arr = [];
 var a = 1, b = 1;
   arr.push(a, b);
while (arr.length < 15) {
  var c = a + b;
  a = b, b = c;
  arr.push(c);
}
console.log(arr);
