/*num = 8
let a = 0
let b = 1
let c

console.log('Fibonacci Series:');

for (let i = 1; i <= num; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
}*/


// using for loop
/*"use strict";
const prompt = require("prompt-sync")({sigint:true})
let a=prompt("enter a:")
let b=prompt("enter b:")*/
var a=0
var b=1
var c
var i=1
for (i=1;i<=8;i++){
    console.log(a)
    c=a+b
    a=b
    b=c
    c=a

}
// using while loop
/*
"use strict";
const prompt = require("prompt-sync")({sigint:true})
let a=prompt("enter a:")
let b=prompt("enter b:")
var c
var i=1
while(i<=8){
    console.log(a)
    c=a+b
    a=b
    b=c
    c=a
    i++
}*/
