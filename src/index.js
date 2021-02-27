module.exports = function check(str, bracketsConfig) {

  if  (str.length % 2 != 0)
  {
    return false;
  }
let strBracketsOpenClose = bracketsConfig.map(function(element){ return element.join("");}) 


for (let i= 0; i < strBracketsOpenClose.length; i++)
{
  if (str.includes(strBracketsOpenClose[i]))
  {
    str = str.replace(strBracketsOpenClose[i], "")
    i = -1;
  }
}
 if (str.length == 0 ) return true;
else return false; 
    
}


