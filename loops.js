for (var i = 0; i <= 10; i++) {
  console.log(i);
}
var pagesName = [
  "home",
  "JavaScript Fundamentals – Part 1",
  "about us",
  "document",
  "log out",
];
for (var i = 0; i < pagesName.length; i++) {
  if (document.title === pagesName[i]) {
    console.log("you are in the " + pagesName[i]);
  } else {
    console.log("you are not here" + pagesName[i]);
  }
}

//iterate over an array
var pages = ["home", "resume", "amout me", "contact", "footer"];
for (var p in pages) {
  console.log(p, pages[p]);
}

var pages = {
  first: "home",
  secound: "resume",
  third: "about me",
  fourth: "log out",
};
for (var p in pages) {
  if (pages.hasOwnProperty(p)) {
    console.log(p, pages[p]);
  }
}

//while loop
var i = 0;
while (i <= 10) {
  console.log([i]);
  i++;
}

var fact = [true, true, true, false, true, true];
var isNotFact = null;
while (isNotFact !== false) {
  console.log(fact.length);
  isNotFact = fact.pop();
}
