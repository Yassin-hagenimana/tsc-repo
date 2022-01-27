
enum Role{ADMIN,USER,AUTHOR};
const person={
    name:"Yassin",
    age:30,
    city:"Kayonza",
    hobbies:["Football","Cooking"],
    role:Role.ADMIN
};
let favorite:string[]

favorite=["Movies","Eating"]
console.log(person.name)
console.log(favorite)

if(person.role===Role.AUTHOR)
console.log("Is author")

for(const hobby of person.hobbies)
console.log(hobby)