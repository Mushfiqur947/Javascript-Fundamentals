function speak() {
  console.log("ami");
  console.log("cesta");
  console.log("korchi");
  console.log("tai amar");
  console.log("kharap laga nei");
}
speak();

//fuddify
fuddify("Rabbit tracks!");

function fuddify(speech) {
  if (typeof speech !== "String") {
    console.error("nice twy, wabbit!");
    return;
  }
  speech = speech.replace(/r/g, "w");
  speech = speech.replace(/R/g, "w");
  return speech;
}

function speakSomething(what, howmany) {
  var what = typeof what !== "undefined" ? what : "default speech";
  var howmany = typeof howmany !== "undefined" ? howmany : 10;
  for (var i = 0; i < howmany; i++) {
    console.log(what + i);
  }
}
speakSomething("hey", 5);
speakSomething("hey");
speakSomething();

//adding
function addingmachine() {
  var total = 0;
  for (var i = 0; i < arguments.length; i += 1) {
    var number = arguments[i];
    if (typeof number === "number") {
      total += number;
    }
  }
  return total;
}
function abc(what) {
  what = what || "say something";
  for (var i = 0; i < 10; i++) {
    console.log(what);
  }
}
window.setTimeout(abc, 5000);

function doubleit(number) {
  return (number *= 2);
}
var mynumbers = [1, 2, 3, 4, 5];
var mydoubles = mynumbers.map(doubleit);
