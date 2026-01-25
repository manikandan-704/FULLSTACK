// let str="manikandan";
let rev="";
function Reverse(str){
   for(let i=str.length-1;i>=0;i--){
    rev+=str[i];
   }
//    console.log(rev);
   return rev
}
console.log(Reverse("Hello"));