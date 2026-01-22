let student={
    Sname:"mani",
    Skills:["HTML","CSS"]
}

let shallowCopy={...student}                //shallow copy -affects the main object
shallowCopy.Skills.push("Javascript")
console.log(shallowCopy);
console.log(student);

// let deepCopy=JSON.parse(JSON.stringify(student));   //deep copy-new memory allocated to the deepcopy
let deepCopy=structuredClone(student)
deepCopy.Skills.push("React")                         //main object not affected
console.log(deepCopy);
console.log(student);