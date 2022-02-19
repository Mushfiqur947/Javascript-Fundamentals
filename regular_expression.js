var String1 = "This is the longest String ever.";
var String2 = "This is the shortest String ever.";
var String3 = "Is this the thing called mount everest?";
var String4 = "This is the sherman on the mount";

var regax = /this/; //only this will true

console.log(regax.test(String1));
console.log(regax.test(String2));
console.log(regax.test(String3));
console.log(regax.test(String4));

regax = /this/i; //all true. not case sensitive

regax = /^this/i; // only this will false and three others will be true.

regax = /this$/i; // all false (will check if it is in the end off the line)

regax = /ever.$/i; //only ever in the last will come true

regax = /ever\.$/i; // for escape the dot.

regax = /mount.$/i; // only mount. will come true
