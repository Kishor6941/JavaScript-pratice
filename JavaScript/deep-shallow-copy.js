
let person1 = {
    name : "Kishor",
    location : {
        pin : 413520,
        address : {
            city : "Pune"
        }
    }
}

let person2 = {
    ...person1,
    location : {
        ...person1.location,
        address : {
             city : "latur"
        }
    }   
}

console.log(person1)
console.log(person2)