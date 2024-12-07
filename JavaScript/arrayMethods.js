//length
// push, unshift
// pop , shift
// map, filter, reduce, forEach
// some every, includes,
// sort join,slice,splice,indexOf,
//flat,reverse,Array.from, isArray,concat

let arr = [
    { name: "vaibhavi", age: 21 },
    { name: "kishor", age: 30 },
    { name: "sama", age: 17 },
    { name: "rutu", age: 19 },
  ];
  
  let names = arr
    .filter(person => person.age > 20)
    .map(person => person.name);
  
  console.log(names);


  const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

/* let a = fruits.reduce((acc,curr) => {
   acc[curr]  = (acc[curr] || 0) + 1
   return acc
},{}) */


let obj = {}

fruits.forEach((ele) => {
 obj[ele]  = (obj[ele] || 0) + 1
})

console.log(obj)