/*
function fun1(name){
    console.log("My name is :" + name);
}
function fun2(){
    console.log("I am from Module 22.js");
}
export {fun1,fun2}
*/
//Renaming for importing
/*
function fun1(name){
    console.log("My name is :" + name);
}
function fun2(){
    console.log("I am from Module 22.js");
}
export {fun1,fun2}
*/
//Renaming in Exporting
function fun1(name){
    console.log("My name is : " + name);
}
function fun2(){
    console.log("I am from Module 22.js")
}

export {fun1 as sample1, fun2 as sample2} 