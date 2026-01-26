//filer() method

let arr=[4,3,2,1];
function Filter(){
    let newarr = arr.filter(even=>even % 2 === 0)
    return newarr;
}
console.log("Even number in an array: ",Filter());
console.log("original array: "+ arr);

//find()method

let a1=[4,3,2,1];
let arrow=()=>{
    let newarray=a1.find(min=>min<3);
    return newarray;
}
console.log(arrow());