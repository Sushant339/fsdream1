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