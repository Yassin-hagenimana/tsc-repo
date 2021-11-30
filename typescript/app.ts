function adding(n1:number,n2:number){
    return n1+n2;
}

const q=10;
const w=4.5

const e=adding(q,w)
console.log(e)

const person={
    name:"yassin",
    age:10,
    hobbies:["Cooking","Sports"]
}

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}
let favorites:string[]
favorites=["papa"]
console.log(person)