let Person={
    name:"Ragul",        //name-key 
    role:"Developer",    //Ragul-value
    Location:"Erode",     //name:ragul-property
    Profession:"software"
}


for(let items in Person){     // for in loop through object
    console.log(items , Person[items]);
}

delete Person.Profession;

for(let key in Person){
    console.log(key + " :",Person[key]);
} 

    
let count= Object.keys(Person).length;     // length of the object
console.log(`length of the` + Person + `is `+ count);