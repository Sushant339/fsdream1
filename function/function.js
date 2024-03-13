console.log('function in javascript');


// actions == functions

//  in the js functions => we write the blcok of the code to perform specific actions or task, this is called functions

// multiple by 3

//  function declaration

// function functionName (param1, param2){
// // action
// // function body
// }

//  write a function to multiply by 2 and print the output
// this function will take one single number and multiply it by 2 and console the out put
function multipleByTwo(z){
 var result = z*2;
console.log(result);
}

multipleByTwo(30); //function call, invoke function

// multipleByTwo(ar1); // argument

multipleByTwo(60);

// function invocation
// arguments


// create a function which will devide by 3 and return the result

function devideByThree(l){
var res = l/3;
return res;
}

var two = devideByThree(4);
console.log(two);


function callMe () {
 // default js return the undefined
 console.log('Checker123')
//  return undefined
}


var result  = callMe();
console.log(result) // undefined



console.log(callMe()); //  checker and undefined


function getName(){
    var d = 'sushant';
    return 
    d;

}

var s = getName();

console.log(s);

function printData(data){
    console.log(data);
}


printData(true);
printData(2);
printData([1,2,3]);
printData({a:2});
printData("hello");

printData();


printData(2, 'Hello', 'shi' ); //multiple arguments


// if there is no argument passed respeccted to the declare parameter, that parameter value will be undefined


// default parameter in js function



function multipyByNumber(val, multiplier){
    return val*multiplier;
}

multipyByNumber(10, 10);

var tech = multipyByNumber(10);
console.log(tech);

// if there is argument passed corresponding to the params then variable params will get that value else it will get the default value

function multipyByNumber3(val, multiplier=3){
    return val*multiplier;
}

var tech1 = multipyByNumber3(10);
console.log(tech1);

function returnNumber(){
    return 7979751091;
}


var a = function (){
    console.log('hey');
}

a();

// annonymous function

//  a function which is not named 

// function (){
//     console.log('hey');
// }

var y = function getanme(){
    console.log('suprise');
}

y();
//getanme();

// types of function


// difference b/w normal function and arrow functions in terms of 'this'|| TODO
// arrow function 
// we can assign function into variable
// we can pass any number of argumetns
// we can pass any type of data in argumensts



// we can pass function as a arguments
// the function which accept the function as paramente is caller higher order function

function returnmultiply(func, a){
//func => callback function
    var result = func(30, 30);
return result*a;
}

function multiplytwodigit(a, b){
    return a*b;

}


// the function which is passed as arguments is called as callback function
returnmultiply(multiplytwodigit, 30); // here we are passing the functionn as arguments


// functions
// return keyword
// parameters
// arguments
// higher order function
// function expression
// function declaration
// anonymous function
// we can assign function to variable

function funcz(){
    console.log('hey')
}

funcz();


console.log(typeof funcz);

// iife => immedeate invoced function expression
// when the function is called as soon as function is created, this type of function does not need explicit call or invoked
// IIFE function refrecne will not be available in memory for later use like another functions, this will help us to optimize memorY AND REMOVE UNNCESSORY FUNCTION REFRENCE FROM MEMORY, THIS TYPE OF THE FUNCTION CALLED ONLY ONCE SO WE DONOT NEED REFRENCE TO STORE FOR FURHTER CALL

(
    function (){
        console.log('hey i am invoked immedeatly')
    }
) 

();

// 