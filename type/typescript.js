function sum(a, b) {
    return a + b;
}
// basic datatype
var isCool = true;
var age = 56;
var eyeColor = 'brown';
var favoriteQuote = "I'm not old, i'm only " + age;
// array
var pets = ["cat", "dog", "fish"];
var pets2 = ["lion", "dragon", "lizard"];
// object
var wizard = {
    a: 'John'
};
// null and undefined
var meh = undefined;
var noo = null;
// tuple 
var basket;
basket = ['car', 5000];
// enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2]; // this will print Medium
// Any - Not recommended, only use it if you know what you're doing
var whatever = 'ahhhhh';
whatever = 5; //this will work
whatever = true; //still works
whatever = Size.Small; //still works
// void
var sing = function () {
    console.log("lala");
};
// never , function that never return
var error = function () {
    throw Error('oops');
};
// this will makesure our function takes in a RobotArmy object with the above attributes
var fightRobotArmy = function (robots) {
    console.log("Fight!");
};
// same as above but not using interface
var fightRobotArmy2 = function (robots) {
    console.log("Fight!");
};
// dog shouldnt have count but we can use type assertion to use dog as CatArmy
var dog = {};
dog.count;
