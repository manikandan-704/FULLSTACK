let obj={
    uName : "Manikandan",
    uRole : "software dev",
    age: "21"
}
console.log(obj["uName"]);  //access property
console.log(obj["age"]);

obj.uName="madesh"  //update property
obj.age=22

console.log(obj.uName);
console.log(obj.age);

delete obj.age;   //delete property

obj.Year="Final year"    //add property

console.log("age" in obj); // check property exists

console.log(obj.hasOwnProperty("Year")); // check property exists

console.log(obj);  // final object