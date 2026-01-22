//async function

async function fName() {             
    return "async function"
}
fName().then(result =>
    console.log(result));


//async in arrow function

let arrow= async(a,b)=>{
    return a+b
}
arrow(1,2).then(ans=>console.log(ans));
 


//async + await with promise    



function fNormal(){                  //this function returns a promise
    return new Promise((resole)=> {      
        setTimeout(()=>{
            resole("solved");
        },3000)
    })
}
async function wait() {
    let result=await fNormal();      //result get the return value from the promise
    console.log(result);
    console.log("end");
}
console.log("start");    //excutes first
wait();     
                    