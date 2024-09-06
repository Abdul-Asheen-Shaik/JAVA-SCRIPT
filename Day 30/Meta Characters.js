/*
console.log("Meta Characters");
//dot(.)

var re = /h.t/g;
var text = "I wear a hot hat pot";
var res = text.match(re);
console.log(res);


//caret(^)

var re = /^The/gi;
var text = "the car";
var res = text.match(re);
console.log(res);


//dollar($)

var re = /.$/g;
var text = "Iam a girl.";
var res = text.match(re);
console.log(res);


//asterisk(*)

var re = /ab*c/g;
var text = "abc bac abbc abd";
var res = text.match(re);
console.log(res);


//plus(+)

var re = /ab+c/g;
var text = "abc bac abbc abd";
var res = text.match(re);
console.log(res);

//question mark(?)

var re = /colors?/g;
var text = "I have a black color toy";
var res =text.match(re);
console.log(res);

//curly braces({})

var re = /\d{3}-\d{3}-\d{4}/g;
var text = "8985459786,898-545-9786";
var res = text.match(re);
console.log(res);

//square brackets([])

var re = /[ch]at/g;
var text = "I have a cat with hat and bat";
var res = text.match(re);
console.log(res);

//pie(|)

var re = /cat|hat/g;
var text = "Ihave a cat with hat and bat";
var res = text.match(re);
console.log(res);
*/

//Objects
/*
console.log("Objects - Literal Notation");

//Creation
var obj = {
    name : "Asheen",
    mobile : "8985459786",
    age : "21"
}
console.log(obj);

//Accessing
console.log(obj.mobile);

//Adding
obj.gender = "Female";
console.log(obj);

//Modifying
obj.name = "Abdul Asheen";
console.log(obj);

//Deleting
delete obj.age;
console.log(obj);

//Methods
var keys = Object.keys(obj);
console.log(keys);

var values = Object.values(obj);
console.log(values);

var entries = Object.entries(obj);
console.log(entries);
*/

//object constructors
console.log("Object Constructors");

//Creation
var obj = new Object();
console.log(obj);

//Adding
obj["name"] = "Abdul Asheen";
obj["mobile"] = "8985459786";
obj["age"] = "21";
obj["gender"] = "Female";
console.log(obj);

//Modifying
obj["mobile"] = "7995557496";
console.log(obj);

//Accessing
console.log(obj["mobile"]);

//Deleting
delete obj["mobile"];
console.log(obj);

//Methods
var k = Object.keys(obj);
console.log(k);

var v = Object.values(obj);
console.log(v);

var e = Object.entries(obj);
console.log(e);





