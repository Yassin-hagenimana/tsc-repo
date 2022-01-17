const character ="yassin"
console.log(character)
const inputs=document.querySelectorAll("input")
console.log(inputs)

inputs.forEach(input=>{
  console.log(input)
})

//arrays
let arrayNames=["yassin","hagenimana","Draxler"];
arrayNames.push("Ki")

//objects

let address={
  name:"Yassin",
  district:"Kayonza",
  age:30,
  phone:"0786621407"
}

console.log(address)

const form=document.querySelector("form")!
//inputs
const type=document.querySelector("#type") as HTMLSelectElement
const toFrom=document.querySelector("#tofrom") as HTMLInputElement
const details=document.querySelector("#details") as HTMLInputElement
const amount=document.querySelector("#amount") as HTMLInputElement

form.addEventListener("submit",(e:Event)=>{
  e.preventDefault();
  
  console.log(
    type.value,
    toFrom.value,
    details.value,
    amount.value
  );
})