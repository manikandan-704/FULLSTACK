let result=findLargest(1,7,6)                                                 //normal function
function findLargest(a,b,c){
    if(a>b && a>c){
        return `${a} is largest number`
    }
    else if(b>c){
        return `${b} is largest number`
    }
    else{
        return `${c} is largest number`
    }
}
console.log(result);

  

//arrow function

let arrow= (a,b,c) => {
    return a>b && a>c ? `${a} is largest` : b>c ? `${b} is largest` : `${c} is largest`;
}
console.log(arrow(1,5,6));


//Math.max()

let max=(a,b,c)=>{
    return Math.max(a,b,c)
}
console.log(max(1,3,4));