//  rule no .1=> string(coverted to ascii code) + string(coverted to ascii code)
// rule 2.=> string(first to boolean then number) +number
// rule 3=>number + boolean(covert to number)
// rule 4=> Boolean(covert to number) + Boolean(covert to number)

// string vs String comparision
// java script convert both the string into the ascii code and check one by one if any string encountered with bigger value 
console.log('A'<'a'); //65<97 => true

console.log('sushant' < 'SUSHANT'); 

console.log('ABCD'<'D');

// number vs boolean
// here boolean will be coberted into number true = > 1, false => 0
console.log(2 > true);  // 
console.log(true > false);

// string vs number

console.log('AAAA'>5);


// null, undefined(nothing - javascript assigned undefined value to each variable which is not assigned anywhere || it will be assigned to the variable which is declared but not intialized), NaN

var checker;
console.log(checker);

// coverting undefined into boolean always gives false

//  Null (it will be assined by us)

//  importan question

console.log(typeof null) //object

// null and undefined are diff data type, null if object and undefined is undefined datatype
// null will be assigned by the devloper, undefined can be assigned by devloper but javascript also assigned undefined value to the unintialized variable


// coverting boolean

console.log(Boolean(null));

// NaN => JS consider it as one of the value of number in js
// datatype of NaN => number

// compare // Boolean

console.log(Boolean(NaN));

// null => primitive vs non-primitive
// typeof null is => object ,, but null is not a non-primitive datatype

var employee =  {}; //this is object
console.log(employee instanceof Object); //true
console.log(null instanceof Object); // false

console.log(NaN instanceof Number);


console.log(Number('1')); //1
console.log(Number(false)); //0
console.log(Boolean('false')); // true
console.log(Boolean(false)); // false
console.log('13'-11); //2
console.log('2'/'2'); 1

console.log(35 + -'3' - false + true + '80'); 


// console.log(New String('Hey'));

var a = new String('Sushant');
console.log(typeof a);

var b = String('Sushant');
console.log(typeof b);


console.log('1', true == 1);
console.log(false == null);
console.log(null == undefined);
console.log(undefined == NaN);
console.log(undefined == 0);
console.log(null<=1)
console.log(null<='hey');
console.log(NaN == false);
console.log(undefined == 'undefined');
console.log(null == 'null');
console.log(null == 0);
// https://262.ecma-international.org/5.1/#sec-11.9.3