import { HasFormatter } from "../Interfaces/HasFormatter";

export class Payment implements HasFormatter{

    constructor(
        readonly recipient:string,
        private amount:string,
        public details:number
      ){}

      format(){
        return `${this.recipient} owed $ ${this.amount}  for ${this.details}`
      }

}