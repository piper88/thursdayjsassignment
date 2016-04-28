'use strict';

// LAB: SORTING AND CAMPY SCI-FI

// Be sure to read all the comments!
// That's where the instructions are!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.
    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |
 TODO: First, make a constructor function, called Blob, that makes blobs.*/

function Blob (blobname) {
  this.blobname = blobname;
}

 /*TODO: Next, create an instance of Blob named blob. */

var blob = new Blob(blob);

 /*TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

function hoursToEatTown() {
  var population = 1000;
  var hour = 0;
  while (population > 0) {
    hour ++;
    population -= hour;
  };
  return hour;
}

var hoursSpentInDowington; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

var hoursSpentInDowington = hoursToEatTown();

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.

Blob.prototype.hoursToOoze = function hoursToOoze(population, peoplePerHour) {
  var hoursSpent = 0;
  if (population === 0) {
    return population;
  } else {
    while (population > 0) {
      hoursSpent ++;
      population -= peoplePerHour;
      peoplePerHour ++;
    }
    return hoursSpent;
  }
};

console.log(blob.hoursToOoze(888, 20));

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

assert(blob.hoursToOoze(500, 2) === 31, 'hourstoOoze\'s result for 500 should equal 32');
assert(blob.hoursToOoze(10, 1) === 4, 'hourstoOoze\'s result for 10 should equal 4');
assert(blob.hoursToOoze(888, 20) === 27, 'hourstoOoze\'s result for 888 should equal 20');

//*********************************************************
// PROBLEM 2: Universal Translator
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing (planet, language) {
  this.planet = planet;
  this.language = language;
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
  // console.log(hello[this.language]);
  // console.log(hello[sb.language]);
  return(hello[sb.language]);
};

//TODO: put this on the SentientBeing prototype

function Human () {}

Human.prototype = new SentientBeing('Earth', 'federation standard');

function Klingon () {}

Klingon.prototype = new SentientBeing('Qo\'noS', 'klingon');

function Romulan () {}

Romulan.prototype = new SentientBeing('Romulus', 'romulan');

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');

assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru', 'the romulan should hear Jolan\'tru');

assert((new Klingon()).sayHello(new Human()) === 'hello', 'the human should hear hello');

assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru', 'the romulan should hear Jolan\'tru');

assert((new Romulan()).sayHello(new Human()) === 'hello', 'the humna should hear hello');

assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH', 'the klingon should hear nuqneh');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Sorting
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1);
    //TODO: Sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
  }
  console.log(stringArray.sort(byLastLetter));
  return stringArray.sort(byLastLetter);
}

assert(JSON.stringify(lastLetterSort(['cat', 'dog', 'spa'])) == JSON.stringify(['spa', 'dog', 'cat']), 'The order of the words should be spa, dog, cat');

assert(JSON.stringify(lastLetterSort(['apple', 'computer', 'stop'])) == JSON.stringify(['apple', 'stop', 'computer']), 'The order of the words should be apple, stop, computer');

function sumArray(numberArray) {
  var sum = 0;
  numberArray.forEach(function(element) {
    sum += element;
  });
  // TODO: implement me using forEach
  return sum;
}

assert((sumArray([1,2,3]) === 6), 'The sum should be 4');
assert((sumArray([3,4,5]) === 12), 'The sum should be 12');

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    return sumArray(a) - sumArray(b);
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
  });
}

var one = [[1,2,3], [7,8,9], [4,5,6]];
var two = [[9,9,9], [2,2,2], [4,4,4]];

assert((one.toString() === 1,2,3,4,5,6,7,8,9), 'the order of the arrays shoud be [[1,2,3], [4,5,6], [7,8,9]]' );

assert((two.toString() === 2,2,2,4,4,4,9,9,9), 'the order of the arrays should be [[2,2,2], [4,4,4], [9,9,9]]');
