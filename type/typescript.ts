function sum(a: number, b: number) {
  return a + b;
}

// basic datatype
let isCool: boolean = true;
let age: number = 56;
let eyeColor: string = 'brown';
let favoriteQuote: string = `I'm not old, i'm only ${age}`;

// array
let pets: string[] = ["cat", "dog", "fish"];
let pets2: Array<string> = ["lion", "dragon", "lizard"];

// object
let wizard: object = {
  a: 'John'
}

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// tuple 
let basket: [string, number];
basket = ['car', 5000];

// enum
enum Size {Small = 1, Medium = 2, Large =3}
let sizeName: string = Size[2]  // this will print Medium

// Any - Not recommended, only use it if you know what you're doing
let whatever: any = 'ahhhhh';
whatever = 5; //this will work
whatever = true; //still works
whatever = Size.Small //still works

// void
let sing = (): void => {
  console.log("lala")
}

// never , function that never return
let error = (): never => {
  throw Error('oops');
}

// interface
interface RobotArmy {
  count: number,
  type: string,
  magic?: string //the question mark make this prop an optional
}

// this will makesure our function takes in a RobotArmy object with the above attributes
let fightRobotArmy = (robots: RobotArmy) => {
  console.log("Fight!");
}

// same as above but not using interface
let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
  console.log("Fight!");
}

// Type assertion
interface CatArmy {
  count: number,
  type: string,
  magic: string
}

// dog shouldnt have count but we can use type assertion to use dog as CatArmy
let dog = {} as CatArmy
dog.count

