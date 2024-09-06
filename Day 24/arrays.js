//literal notation & array constructor
console.log("Arrays");
var a = [10,20,"abdul",3.5]; //literal notation
var b = new Array(100,200,"asheen"); //array constructor
console.log(a);
console.log(b);

console.log("accessing elements");
//accessing elements
console.log(a[2]);
console.log(b[1]);

console.log("modifying elements");
//modifying elements
a[0] = 1000;
console.log(a);

b[3] = 400.577;
console.log(b);

//array methods
x = [10,20,30,"a","b","c"];
console.log(x);

console.log("push");
//push
y = x.push("d");
console.log(y);
console.log(x);

console.log("pop");
//pop
y = x.pop();
console.log(x);

console.log("shift");
//shift
y = x.shift();
console.log(y);
console.log(x);

console.log("unshift");
//unshift
y = x.unshift(70);
console.log(y);
console.log(x);

console.log("slice");
//slice
y = x.slice(2,4);
console.log(y);
console.log(x);

console.log("concat");
//concat
a = [10,20,30];
b = [40,50,60];
y = a.concat(b);
console.log(y);

console.log("join");
//join
var x = ["a","b","c"];
var y = x.join(" ");
console.log(y);

console.log("indexOf");
//indexOf
var y = x.indexOf("b");
console.log(y);

console.log("forEach");
//forEach
var x = [10,20,30,40,50];
var y = x.forEach(function(i){
    console.log(i+100);
});

console.log("map");
//map
var x = [1,2,3,4,5];
var y = x.map(function(i){
    return i+30;
});
console.log(y);

console.log("filter");
//filter
var x = [1,2,3,4,5];
var y = x.filter(function(i){
    return i%2==0;
});
console.log(y);

console.log("reduce");
//reduce
var x = [1,2,3,4,5];
var y = x.reduce(function(acc,cv){
    return (cv+acc);
},10);
console.log(y); 