/** immutable */
let a = 10;

let b = a;

b = 30

console.log(a)
console.log(b)


/** Mutable */

let obj = {
    name : "kishor",
    age:30
}

let obj1 = obj
obj1.name = "Kiran"

console.log(obj)
console.log(obj1)