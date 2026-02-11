let arr=[1,2,3,4];

//map
let result = arr.map(arr1 => arr1 * 2);
console.log(result); 

//doesn't affect the orginal array
console.log(arr);

//filter
let filter = result.filter(arr2 => arr2 % 2 === 0);
console.log(filter);
 
 //find
let array=[1,12,23,45];
let find = array.find (arr3 => arr3 > 12);
console.log(find);

//reduce
let array1=[5,10,15];
let final = array1.reduce ((acc,curr) => acc + curr,0);
console.log(final);
