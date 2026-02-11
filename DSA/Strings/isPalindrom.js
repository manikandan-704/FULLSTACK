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

let str="hello";
let arr = str.split("");   //convert string to array
let left=0;
let right=str.length-1
while(left<right){
    let temp=arr[left];
    arr[left]=arr[right];
    arr[right]=temp;

    left++
    right--
}
let reversed = arr.join("");   // convert back to string
console.log(reversed);
