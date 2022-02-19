var myArray = [];
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday"];
myArray = [0, 1, 2, "hello", true];
var counties = ["Belknap", "Stratford", "Carroll", "Rockingham"];

//manipuating Arrays
console.log(counties[2]);
console.log(counties[0]);
console.log(counties[1]);
console.log(counties[3]);
counties.push("world");
console.log(counties.length);
console.log(counties[4]);
counties.push("coss");
console.log(counties[5]);
delete counties[2];
counties.splice(2, 1);
