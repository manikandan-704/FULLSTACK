let marks={
    mark1: 55,
    mark2: 55,
    mark3: 45,
    mark4: 50
}
console.log(Math.max(...Object.values(marks)));    //finding max value

let max=Math.max(...Object.values(marks));
console.log(max);

console.log(Object.keys(marks));                    //prints object keys in array

console.log(Object.values(marks));                  //prints object values in array

console.log(Object.entries(marks));                 //prints object properties in array
console.log(Object.entries(marks).length);          //length of the object


let sumOfkeys=0;                                    //sum of keys
for(keys in marks){
  sumOfkeys+=marks[keys]
}
console.log("total mark is: " + sumOfkeys);