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


const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);
console.log(result);
function checkAdult(age) {
  return age >= 18;
}



var book ={
    title:"secret",
    author:{name:"tushar",
age:23}
}

console.log(book.author.age)