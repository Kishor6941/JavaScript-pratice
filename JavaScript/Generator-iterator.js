function* generatorExample() {
    yield "user Logged in"
    yield "post is created"
    yield "added comment on post"
    yield "post is deleted"
}


let gen = generatorExample()

console.log(gen.next())

function myName() {
    console.log("kishor phawade")
}
myName()

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())