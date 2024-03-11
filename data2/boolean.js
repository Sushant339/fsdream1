// boolen type ot variable can have only two values
// True or False

var check = true;
var notcheck = false;

console.log(typeof check); // boolean
console.log(typeof notcheck); // boolean


// in javascript all the value except 0 and empty string considered as a true value, empty string and 0, null and undefined is a false

if(check){
    console.log('i am inside first if')
}
else{
    console.log('i am inside first else')
}

if(notcheck){
    console.log('i am inside second if')
}
else{
    console.log('i am inside second else')
}

var emptystring = '';
var zero = 0;
var samevalue = 'A';
var somenumber = 2;

if(emptystring){
    console.log('emptystring if')
}
else{
    console.log('emptystring else')
}

if(zero){
    console.log('zero if')
}
else{
    console.log('zero else')
}

if(samevalue){
    console.log('samevalue if')
}
else{
    console.log('samevalue else')
}
if(somenumber){
    console.log('somenumber if')
}
else{
    console.log('somenumber else')
}

var data = [];

if(data){
    console.log('sdata if')
}

var axis = 'i m bad';

if(axis){
    console.log('axis if')
} else{
    console.log('axis else')
}





var emp = '';
var nuz = 20;
var jaz = [];

if(emp){
    console.log('emp if')
} 
else if(nuz){
    console.log('nuz elseif')
} 
else{
    console.log('jaz else')
}

// logical operator

//  || (or), && (and), ! (not), ?? (nullish coalescing)

// OR (||) -- we can put OR between two values, such as A||B
// this will return a if A is truthy value, else B

console.log('true || false', true || false )
console.log('false || true', false|| true )

console.log(1||2||3||4||5||6||0);


console.log(''|| false || 0 ||4||5||6||0);

var result = (100/100-1) || 2

console.log(result)

var pass = [1,2,3,4,5];
console.log( pass || true  )


// Querry for i2
console.log( '' || false)

// AND (&&)

// this will retund false if anyone condition gives falsy value, whenever it gets false value
// it will return false and stop execution

function call () {
    console.log('hey call')
    return true;
}


var result2 =  2 && 3 && 4 && 0 && call();
console.log('result2' , result2)



if(8>7 && 5<6 && 2>3 && call()) {
     console.log('Hey')
} else {
     console.log('hey else')
}

if(8>7 & 5<6 & 2>3 & call()) {
    console.log('Hey')
} else {
    console.log('hey else')
}

// Not operator
// it will do the things in oposite

var res1 =  !2; 
console.log(res1)

console.log(typeof !3)

console.log(!0)


//  Ternary Operation
var check3 = true;
var a33 = 8>4 ? 'greater' : 'smaller';

// plus operator, assinment operator, equal operator, greater euqal, less equal

