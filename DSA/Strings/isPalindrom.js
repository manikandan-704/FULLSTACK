let rev="";
function isPalindrom(str){
    for(let i=str.length-1;i>=0;i--){
        rev+=str[i];
    }
    
    if(str===rev){
        return `${str} is a palindrom.`
    }
    else{
        return `${str} is a not palindrom.`
    }
}
console.log(isPalindrom("malayalam"));
console.log(isPalindrom("hi"));
