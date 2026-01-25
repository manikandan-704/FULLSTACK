let vowels="aeiouAEIOU";

function vowelsCount(str){
    let count=0;
    for(let char of str){
        if(vowels.includes(char)){
        count++;
        }
    }
    return count;
}
console.log(vowelsCount("Manikandan"));
