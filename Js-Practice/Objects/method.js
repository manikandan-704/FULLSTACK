let find={                                                          //object method(Functions Inside Object)
    name:"mani",

    Greatest(a,b){                                                  //normal function
        return a>b ? `${a} is greatest` : `${b} is greatest`
    },

    Small:(a,b)=>{
        return a<b ? `${a} is smallest` : `${b} is smallest`         //arrow function
    }
    
    }

console.log(find.Greatest(2,3));
console.log(find.Small(2,3));
