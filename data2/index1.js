var n1 = 235;
var n2 = 555.923;

console.log('type of n1=>' ,typeof n1,', type of n2=>', typeof n2)

var a = new Number(50);
console.log('a=>',a, ', type of a =>', typeof a)

var big = 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
console.log('type of big=>', typeof big)
// technically n2 is decimal number, i want to get number from decimal value

// parseInt()

var n3= parseInt(n2)
console.log('n3=>',n3)

// floor and ceil

var n4 = Math.ceil(n2); //rrof
var n5 = Math.floor(n2); // jamin
console.log('n4=>', n4, 'n5=>', n5)

// parseFloat

//Math.random(); -- this will generate a random numeric value b/w 0-1 that will not incliude 1...


for(var k=0;k<=30;k++){
    var ran = Math.random();  
console.log('random 0-1', ran)
}

for(var l=0;l<=30;l++){
    var rand = Math.random()*10;  
console.log('random 0-10', rand)
}

var start = 50;
var end = 90;

for(var x=0;x<10;x++){
    // here i will create 10 random number between 50-90
// Math.random() - it will return decimal => parseInt(), Math.ceil(), MAth.floow()
    var rando = Math.floor(Math.random()*(end-start+1)+start);
console.log('random=>', rando)
}

for(var z=0;z<10;z++){
    // here i will create 10 random number between 50-90
// Math.random() - it will return decimal => parseInt(), Math.ceil(), MAth.floow()
    var randoz = Math.floor(Math.random()*(end-start)+start);
console.log('randoz=>', randoz)
}


var b = Math.random();
console.log( 'random number on reload',b)


var min = Math.min(10,20,30)
console.log(min)
// this function will take the multiple parameter and will retunr the value which is minimum among all
var max = Math.max(10,20,30)
console.log(max)
// this function will take the multiple parameter and will retunr the value which is maximum among all

// string - that value which is close by single quote or doublw quote is called string

var numberi = '23456'

console.log(typeof numberi)

// to convert numberi string into number we can use two  way
// 1. use parseInt()
var intS = parseInt(numberi)
console.log('instS=>', intS, 'type of instS=>', typeof intS)

var ints2 = +numberi
console.log('instS2=>', ints2, 'type of instS2=>', typeof ints2)

// Math.round();
//  to get the round off


// if we will apply any of the airthmatic operation to alpha numeric value it gives us a NAN

var a11 = '234Sushant';
var b11 = '23sush234';
var b12 = 'sush123';


var a12 = parseInt(a11);
var b13 = parseInt(b11);
var b14 = parseInt(b12);


console.log('a11=', +a11) //NAN
console.log('b11', +b11)  //NAN
console.log('b12=', +b12)  //NAN

console.log('a12=', a12) //234
console.log('b13=', b13) //23
console.log('b14=', b14)  //NAN


console.log('Type of NAN', typeof NaN)

// ver improtant function

// isNan

var n23 = 23;
// isNan() => is a function provided byb javascript and it is globally present and it takes number as sargument, if number is Nan than it will return true, else false

console.log(isNaN(n23));
console.log(isNaN(NaN));
console.log(isNaN('_123'));
console.log(isNaN('123'));
console.log(isNaN('123Sushant'));

var  tt = -("20" + "30" + "50") - ("30" - "30" +60);
console.log(tt);