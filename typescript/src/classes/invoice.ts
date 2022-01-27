 import { HasFormatter } from "../Interfaces/HasFormatter"
 export class Invoice implements HasFormatter{
constructor(
      readonly client:string,
      private amount:string,
      public details:number
    ){}
    
    format(){
      return `${this.client} owes $ ${this.amount}  for ${this.details}`
    }
  }