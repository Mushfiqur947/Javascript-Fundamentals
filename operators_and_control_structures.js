var one = 1,
  two = 2;
one === one; // Strict equality
one !== one; // strict inequality
one !== two; // true

one === 1;
one === "1";

///logical operators
var animal1 = "monkey";
var animal2 = "bear";
var animal3 = "tiger";

animal1 === "monkeyoy" && animal2 === "bear"; // true
animal1 === "ape" && animal2 === "bear"; // false
animal1 === "ape" && animal2 === "bear" && animal3 === "tiger"; //false
animal1 === "monkey" && animal2 === "bear" && animal3 === "tiger"; // true

animal1 === "monkey" || animal2 === "bear"; // true
animal1 === "ape" || animal2 === "bear"; // true
animal1 === "ape" || animal2 === "ostrich"; // false

!true; //false
!false; //true

animal1 === "monkey" || (animal2 === "monkey" && animal3 === "tiger"); //true
(animal1 === "monkey" || animal2 === "monkey") && animal3 === "tiger"; //true

// conditionals if
var answer = window.confirm("Click OK, get true. Click Cancel,get false");
answer;

if (answer === true) {
  console.log("you said true");
} else {
  console.log("you said something else");
}

var answer = window.prompt("Type YES, NO, or MAYBE. Then click OK");

if (answer === "YES") {
  console.log("you type yes");
} else if (answer === "NO") {
  console.log("you type no");
} else if (answer === "MAYBE") {
  console.log("you said maybe");
} else {
  console.log("you rebel , you");
}

//Switch Statement
switch (answer) {
  case "YES":
    console.log("You said YES");
    break;
  case "Maybe":
    console.log("you said maybe");
    break;
  case "NO":
    console.log("you said no");
    break;
}

//TErse if
var cherub = "Cupid";
var cherub = "Some Other Guy";

if (cherub === "Cupid") console.log("Oouch, an arrow! I am in love!");
if (cherub === "cupid") console.log("Oouch, an arrow! I am in love");
else console.log("I feel nothing");

var wantForEid = "puppy";
var gotForEid = "puppy";
cryAboutIt = false;

if (wantForEid === gotForEid) {
  console.log("Yay, The little children are so pleased");
  cryAboutIt = false;
} else {
  console.log("Oh No!");
  cryAboutIt = true;
}
if (cryAboutIt) {
  console.log("child says: waaaaaaaaaaaaaaaaaaa!");
}
if (!cryAboutIt) {
  console.log("child says: Yaaaaay!");
}

//ternery operator
var animal = "cat";
var animal1 = "dog";
animal === "cat"
  ? console.log("you are a cat lover")
  : console.log("you are a dog lover");
