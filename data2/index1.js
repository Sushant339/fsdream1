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