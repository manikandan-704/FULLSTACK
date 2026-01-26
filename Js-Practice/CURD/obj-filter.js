//find object by id

let obj = [{ id: 1, name: "mani" }, { id: 2, name: "jeeva" }]

function Find() {

    let userName = obj.find(user => user.id === 2)
    return (userName.name);

}

console.log(Find());


//filter object  by id and name

let obj1 = [
    { id: 1, name: "mani", age: 15 },
    { id : 2, name: "isac", age: 18 }, 
    { id: 3, name: "harish", age: 20 }, 
    { id: 4, name: "bharath", age: 19 }, 
    { id: 5, name: "hari", age: 13 }
]

function flitering() {

    let Age = obj1.filter(get => get.id < 4)

    let Name = obj1.filter(get => get.name.slice(0, 1) === 'h').map(get => get.name);

    console.log(Age);
    return Name;

}

console.log(flitering());