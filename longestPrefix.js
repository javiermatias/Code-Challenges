//14. Longest Common Prefix
/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings. */






let strs = ["flower","flow","flight"];


var longestCommonPrefix = function (strs) {
    let prefix = "";
    if (!strs.length) return prefix;
    prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) !==0) {
        prefix = prefix.substring(0, prefix.length - 1);
      }
      if(prefix == "") return "";
    }
    return prefix;
  };


  console.log(longestCommonPrefix(strs));




//let strs = ["flower","flow","flight"];
//console.log(prefix(strs));
function prefix(strs){
let menor = menor1(strs);
let valid= true;
for(let j=0; j<menor; j++){
 let prefix = strs[0].substring(0,menor-j);
 let encontrado=true;
    for(let i=0; i<strs.length; i++){
    
       if(prefix !== strs[i].substring(0,menor-j)){
           encontrado=false;
           break;
       }
     
    
    }
    if(encontrado) return prefix
}

return "";

}


                         
function menor1(strs){
let menor=strs[0].length;  
strs.forEach(x => {
    if(x.length < menor) menor = x.length; 
});

 return menor;
}