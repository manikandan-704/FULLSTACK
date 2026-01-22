function isOddOrEven(num) {
    let Even= `The given number ${num} is Even`;
    let Odd= `The given number ${num} is Odd`;
    if(num % 2==0){
        return Even;
    }
    else{
        return Odd;
    }
}
console.log(isOddOrEven(5));
console.log(isOddOrEven(10));




// Arrow Function

// function out(){
    let Odd= `The given number is Odd`;
let arrow =(a)=>{
    if(a % 2==0){
        return `The given number ${a} is Even`;
    }
    else{
        return Odd;
    }
}

console.log(arrow(3));
console.log(arrow(4));

// }
// out();

let multiple= n =>  n*n     
console.log(multiple(2));