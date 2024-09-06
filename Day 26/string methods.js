/*
console.log("String methods");
//charAt
x = " Abdul Asheen";
console.log(x.charAt(6));

//charCodeAt
console.log(x.charCodeAt(2));

//concat
y = x.concat(" Shaik");
console.log(y);

//starts with
console.log(x.startsWith("Abdul"));

//ends with
console.log(x.endsWith("Asheen"));

//includes
console.log(x.includes("Abdul")); 

//indexOf
console.log(x.indexOf("s"));

//last indexOf
console.log(y.lastIndexOf("e"));

//match


//repeat
console.log(y.repeat("2"));

//replace
console.log(x.replace("Abdul", "Jaggu"));

//search

//slice
console.log(x.slice("0","8"));

//split
console.log(x.split(" "));

//substring
console.log(x.substring(0,8));

//toLowerCase
console.log(x.toLowerCase());

//toUpperCase
console.log(y.toUpperCase());

//trim
var a = "      jaggu       ";
console.log(a.trim());
*/


//Regular Expression
console.log("Regular Expression");

//Literal Notation
var re1 = /j.*t/i;
console.log(re1.test("JavaScript"));
console.log(re1.exec("Javascript ,JavapoinT"));

//Object Notation
var re2 = new RegExp("j.*t","i");
console.log(re2.test("JavaScript"));
console.log(re2.exec("Javascript, JavapoinT"));

//Factorial
var n = 5 ;
var result = 1;
for(var i=1; i<=n;i++){
    result = result*i;
}
console.log(result);
