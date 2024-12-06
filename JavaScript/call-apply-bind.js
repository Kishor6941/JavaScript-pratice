


const student = {
    name : 'kishor',
    surName : "Fawade"
}

const employee = {
    name : "Vaibhavi",
    surName : "Fawade"
}


const user = {
    name : "Hari",
    surName : "Fawade"
}


function printFullname(villege) {
   console.log(`my name is ${this.name} ${this.surName} and i am from ${villege}`) 
}

printFullname.call(student,'kanheri')

printFullname.apply(employee,['Ausa'])


printFullname.bind(user,['Ausa'])()

