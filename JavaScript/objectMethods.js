// ways to create object
// by using new keyword

// 1)================================================================
// function Person(name,age) {
//     this.name = name,
//     this.age = age,
//     this.printPerson = function() {
//         console.log('====================================');
//         console.log(`${this.name} ${this.age}`);
//         console.log('====================================');
//     }
// }

// const person1 = new Person("Kishor",29);

// console.log(person1.printPerson())

// 2)By using constructor ================================================================

// class Person{
//     constructor(name,age) {
//         this.name = name,
//         this.age = age
//     }

//     printPerson() {
//         console.log(`${this.name} ${this.age}`)
//     }
// }

// const p1 = new Person("Kishor",30)

// p1.printPerson()


// 3)By using object literal ================================================================


// const obj = {
//     name : "Kishor",
//     age : 30
// }

// console.log(obj)


// 4)By using object create ================================================================

const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
  };
  
  // Create new Object
  const man = Object.create(person);
console.log(man.firstName)