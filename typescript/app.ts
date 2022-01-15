function combine(n1:number | string,n2:number | string){
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