/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  str=str.toUpperCase();
  let newstr=[]
  for(let i=0;i<str.length;i++){
    if((str[i]>='A' && str[i]<='Z') || (str[i]>='a' && str[i]<='z')){
      newstr.push(str[i])
    }
  }
  console.log(newstr);
  for(let i=0;i<=newstr.length/2;i++){
    // if(str[i]=="." || str[i]=='!' || str[i]=='?') continue;
    if(newstr[i]!==newstr[newstr.length-1-i]){
      return false;
    }
  }
  return true;
  
}

module.exports = isPalindrome;
const mystr='A man a plan a canal Panama';
console.log(isPalindrome(mystr));
