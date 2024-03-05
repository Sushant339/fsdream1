// string in datatype

// creating string variable
// 1. strin literal
var orname = 'Newton';

// 2. using string constructor

var orgname1 = new String('Newton School');

console.log(orgname1);
console.log(typeof orgname1);

// concatenation of string(jodna)

var s = orname + orgname1;
console.log(s);

var a = 'a' + 'b' + 'c';
console.log(a);

// length of the string -- (.length)=> it will give the count of character or any special character

console.log(s.length);


var ss = '@3$#.!~234sushant';
console.log(ss.length);

// sometimes we need to convert numner into the string 

var num = 234567;
var numS = num.toString(); //convert the number into the string
console.log(typeof numS);


var firstname = 'Sushant';  //('S,'u','s','h','a','n','t')
console.log(firstname[0]);
console.log(firstname.charAt(0));

var ss ='';

function reversestring(l){
    for(var z=l.length-1;z>=0;z--){
        ss = ss+ l[z];
    }
    console.log(ss);
}

reversestring('sushant');

var d1 = 'Sushant';

console.log(d1.indexOf('S'));
console.log(d1.toLowerCase());
console.log(d1.toUpperCase());
console.log(d1.lastIndexOf('s'));


// converting the string to array

// Split method
// split()

console.log(d1.split(''));

var words = 'sushant hello how are you';
console.log(words.split(''));
console.log(words.split(' '));

var sent = 'sushant-hello-how-are-you';
console.log(sent.split('-'));
console.log(sent.split('a'));


var tense = 'i have a great craze of thins that i can not have at all';

console.log(tense.split('a'));

