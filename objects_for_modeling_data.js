var bird = {
  genus: "corvus",
  species: "corvax",
  commonNAme: "raven",
  callType: "squawky",
  qoute: "Nevermore",
  maxOfSpring: 5,
  noisy: true,
  deadly: false,
};

var bear = {
  genus: "ursus",
  species: "actors",
  commonNAme: "brown bear",
  callType: "roar",
  qoute: "",
  maxOfSpring: 3,
  noisy: true,
  deadly: true,
};

var bookOfKnowledge = {
  "Lunch Time": "12:30 pm",
  "the ultimate answer": 45,
  bestSong: "Lonnie's lament",
  earth: "Mostly harmless",
};
//string between qoutes will work only if we use [] brackets not the dot.
//bird.whereItLives = "in a tree";
var bear2 = bear;
// two variables pointing out the same value. (not a copy) proof :
bear2.genus = "ursus";
// it changed the values. thats means its pointing out that both of them have same values.

//making a copy of a objects:
var bookOfKnowledge2 = bookOfKnowledge;
bookOfKnowledge2 = JSON.parse(JSON.stringify(bookOfKnowledge)); //This code makes a copy of the selected object
bookOfKnowledge2.bestSong = "It's my life";
