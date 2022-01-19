//classes
class invoice{
  client:string;
  details:string;
  amount:number;

  constructor(client:string,details:string,amount:number){
    this.client=client,
    this.details=details,
    this.amount=amount
  }

  format(){
    return `${this.client} owes $ ${this.amount}  for ${this.details}`
  }
}

const invOne=new invoice("Yassin","worked on website",400)
const invTwo=new invoice("Draxler","Worked on social media",700)
//console.log(invOne,invTwo)

let invoices:invoice[]=[];
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv=>{
  console.log(inv.client,inv.details,inv.amount,inv.format())
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