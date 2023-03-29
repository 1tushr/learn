let gh ={name:'tushar',surmname:'verma'}
// console.log(gh);
let th=Object.entries(gh);
th.forEach(element => {
    console.log(element[0],element[1]);
});
console.log();
console.log(th);


var book ={
    title:"secret",
    author:{name:"tushar",
age:23}
}

console.log(book.author.age)

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);
console.log(result);
function checkAdult(age) {
  return age >= 18;
}
