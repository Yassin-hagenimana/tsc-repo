function combine(number1:number | string | boolean,number2:number | string | boolean){
    let result;
        if(typeof number1==="number" && typeof number2==="number"){
        result=number1+number2
        }else{
            result=number1.toString()+" "+number2.toString()
        }
        return result;
    }
    
    let combinedValues:(a:number,b:number)=>number
    combinedValues=combine
    console.log(combinedValues(101,101))
    
    const combinedEdges=combine(30,26)
    console.log(combinedEdges)
    const combinedNames=combine("yassin","Draxler")
    console.log(combinedNames)
    
    
    //callbacks
    function addAndHandle(n1:number,n2:number,cb:(num:number)=>void){
        const result=n1+n2
        cb(result)
    }
    
    addAndHandle(20,100,(result)=>{
        console.log(result)
    });
    
    
    function names(name:string):void{
        console.log(name)
    }
    names("Hagenimana Yassin")