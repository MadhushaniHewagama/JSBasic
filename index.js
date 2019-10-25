//console.log("hello madhushani");//alow u to see things in console
/* Data Types:
udefined,
null,
boolean,
string,
symbol,
number,
object

varible define
var myName = "madhu"//use anywhere
myName=8

let name ="hy"//with in the scope of where define

const pi=3.14//cant change

var a; //declearing varible
var b=2;    //declearing and assign
a=9;
b=a

console.log("a"+a)
console.log("b"+b)

var val=10;
val=val+1;
val++;
var remainder = 10 % 2; 

//short waies
+=,-=,*=,/=

//escape caracter use \
var str="i am \"madhu\"." 
console.log(str)

\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f from feed

//find length
var size=0
var a="asbdkjna"
size=a.length;


//first char in str
var a="dvaha";
var afirst=a[0]

//String imutable cant change string letter by letter a[0]="h"//error


*/

/*

function sentence(a,b,c,d){
    var result="";
    result=a+" "+b+" "+c+" "+d+".";
    return result;

}
console.log(sentence("hi","I","am","madhu"));
*/

/*
//array  

var array=["madhu",23,["a",7]];
console.log(array[0]);
console.log(array[2][0]);
array.push("udi");
console.log(array);
//last element remove
array.pop();
console.log(array);
//first element remove
array.shift();
console.log(array);
//add element as first
array.unshift("madhushani");
console.log(array);

*/
/*
//visiblaty of variable
var globalvar=5;
function fn1(){
    //since no var it will global, if put var then it will only visible for method
    var localvar=3;
}
function fn2(){
    var output="";
    if(typeof globalvar != "undefined"){
        output+= "gloable: "+globalvar+"\n";

    }
    if(typeof localvar != "undefined"){
        output+="local: "+localvar;
    }
    console.log(output);
}
fn1();
fn2();
//if we use global and local varible with same name, local varible president over global variable
  
*/
/*

function nextInLine(arr,item){
    arr.push(item);
    return arr.shift();
}
var arr1=[1,2,3,4,5]

console.log("before"+JSON.stringify(arr1));
console.log(nextInLine(arr1,6));
console.log("After:"+JSON.stringify(arr1));
*/
 
/*
3 == 3 True
3 == '3' True
3 === 3 True
3 === '3' False

same as != and !==
>=, <=
and - && 
or - ||

//if else
if(){

}else if(){

}else{

}

//switch statment
var ans="";
//type also check here
switch(val){
    case 1: //check 1===val
        ans="a";
        break;
    case "b":
        ans="b";
        break;
    default:
        //anything else

}

*/
/*
function fn(val){
    var ans="";
switch(val){
    case 1: //check 1===val
    case 2:       
    case 3:
        ans="a";
        break;
    case 4:
    case 5:       
    case 6:
        ans="b";    
        break;    
    case 7: 
    case 8:       
    case 9:
        ans="c";
        break;


}
return ans;
}
console.log(fn(5))
//this is spaecial senario because when one case is pass and if its not break here, other all ar execute automatically
*/
//math function in js
//console.log(Math.sqrt(2));

/*
//objects


var Dog={
    "name": "Buusy",
    "legs": 4,
    "tails": 1,
    "friends": ["everythings"]
};

var legs = Dog.legs;
console.log(legs);
console.log(Dog["name"]);
Dog.bark="bow-bow";
console.log(Dog.bark);
delete Dog.tails;
console.log(Dog.tails);

*/
/*
var mysic=[
    {
        "artist": "a",
        "title": "love",
        "formats": [
            "CD",
            "8T",
            "LP"        
        ],
        "gold": true
    },
    {
        "artist": "b",
        "title": "funny",
        "formats": [
            "CD",
            "yputubeT",
            "LP"        
        ],
        "gold": true
    }
]
console.log(JSON.stringify(mysic));
*/

/*
//loops
//while loop
var arr=[];
var i=0;
while(i<5){
    arr.push(i);
    i++
}
console.log(arr);

//do while
do{
    arr.push(i);
    i++;
}while(i<10)

//for loop
var arr2=[];
for(var i=0;i<10;i++){
    arr2.push(i);
}
console.log(arr2);
*/
//randome decimal Math.random()
//randome whole number(0-19)  Math.floor(Math.random()*20)

//console.log(Math.floor(Math.floor(Math.random()*5)));


//convert
//console.log(parseInt("10001",2));

//replace if else statement using  thernary operator----- condition ? true : false

//console.log(3===2 ? "equal": 3==1 ? "yes":"not 1 or 2");


//let --> limited to block of define instanceof, but var is global
/*
//try catch block
const a=1;
try{
    a=2;
}catch(ex){
    console.log("error"+ex);

}
*/
/*
//anananimus function---> var/const/let name (parameters) => body and return things;
var magic = () =>  Date();

console.log(magic());
const a=(ab) => {
    var c="a";
    return(c);
}
console.log(a());
*/
/*
const sum=(function(){
    return function sum(...args){
        return args.reduce((a,b) => a+b, 0);
    };
})();
console.log(sum(1,2,3,4));
*/

/* 
Here if two arrays are equal then one is changed other one is automaticaly changed

*/
/*
arr1=[1,2,34,4];
arr2=arr1;
arr1[0]=22;
console.log(arr1);
console.log(arr2);

let arr3 =[...arr1];
arr1[1]=100;
console.log(arr3);

//short way to assign value to variable
var a={
    x: 10,
    y: 5
};
var {x : c}=a;
console.log(c);
const [x,y, ,z]=[1,2,3,4,5,6];
*/
/*
const person ={
    name: "madhu",
    age: 23
};

const text=`Hello ${person.name} and i am ${person.age} years old.`;
console.log(text);
*/
/*
const result ={
    success: ["max-length","no-amd","prefer-arrow-functions"],
    failure: ["no-var","var-on-top","linebreak"],
    skipped: ["id-blacklist","no-dup-keys"]
};
function makeList(arr){
    const resultDisplayArray = [];
    for(let i=0; i< arr.length;i++){
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return resultDisplayArray;

}
const resultDisplayArray=makeList(result.failure);
console.log(resultDisplayArray);

//easy method to assign values
const person = (name,age,gender) => ({name,age,gender});
console.log(person("madhu",23,"female"));
*/

//create object with new key word
/*
class Person{
    constructor(name){
        this._name=name;//private varible use _ 
    }
    get name(){
        return this._name;
    }
    set name(updatename){
        this._name=updatename;
    }
}
const madhu=new Person('madhu');
console.log(madhu.name);

*/
/*
import { captalizeString } from "./string_function"
const cap=captalizeString("hello");
console.log(cap);
*/
//* use to import everything
//import * as sub from "capitalize_strings"

let str= "dfuaaaghahd"
//replace first character
console.log(str.replace("d","$"))
//replace all characters
console.log(str.replace(/a/g,"*"))
