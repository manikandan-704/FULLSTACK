function Handeling(success) {
    return new Promise((resolve, reject) => {

        if (success) {
            resolve(" the program is success")
        }
        else {
            reject("error")
        }
    })
}
let Solve= async () => {             //errors are handeled by try and catch
    try{
        let correct= await Handeling(true);
        console.log(correct);
    }
    catch(message){
         console.log(message);
    }
}

Solve();