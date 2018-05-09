let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

myString = 'Hello world';
myNum = 223;
myBool = true;
myVar = 'any'

console.log(myString);
console.log(myNum);
console.log(myBool);


// Arrays
// let strArray: string[];
// let numArray: number[];
// let boolArr: boolean[];

// another way to define arrays
let strArray: Array<string>;
let numArray: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number];


strArray = ['one', 'two', 'three'];
numArray = [1, 2, 3];
boolArr = [true, false, false, true];

strNumTuple = ['Hello', 4];

console.log(strArray);
console.log(numArray);
console.log(boolArr);

console.log(strNumTuple);

let myVoid: void = undefined;
let myNull: void = null;
let myUndefined: undefined = null;

console.log(myVoid);
console.log(myNull);
console.log(myUndefined);
