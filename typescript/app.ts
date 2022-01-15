type Combinable=number | string;
type ConversionDescriptor= "as-number" | "as-text";

function combine(n1:Combinable,n2:Combinable){
  let result;
  if(typeof n1 === 'number' && n2 === 'number'){
    result = n1 + n2
}else{
   result= n1.toString() +  n2.toString()
}
return result;
}
const combinedAges=combine(20,30)
console.log(combinedAges)

const combinedNames=combine("max","Yassin")

console.log(combinedNames)

let names="Hagenimana Yassin";
console.log("My names are:"+names)