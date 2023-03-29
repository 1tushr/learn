setTimeout(function sayHello(){
console.log('hello');
setTimeout(function sayHi(){
console.log("I am executing after 2 sec ")
setTimeout (function (){
console.log("i am another one ")
},1500)

},2000)
},3000)

console.log("hi");
