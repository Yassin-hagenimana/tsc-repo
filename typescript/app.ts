import { Invoice } from "./src/classes/invoice.js";
import { Payment } from "./src/classes/Payment.js";
import { HasFormatter } from "./src/Interfaces/HasFormatter.js";


let docOne:HasFormatter
let docTwo:HasFormatter
docOne=new Invoice("Yassin","work of website",100)
docTwo=new Invoice("Draxler","work of backend",600)

let docs:HasFormatter[]=[]
docs.push(docOne)
docs.push(docTwo)

console.log(docs)

const invOne=new Invoice("Yassin","worked on website",400)
const invTwo=new Invoice("Draxler","Worked on social media",700)


let invoices:Invoice[]=[];
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv=>{
  console.log(inv.client,inv.details,inv.format())
})


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