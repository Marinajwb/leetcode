/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

  if(x <0 || x%10 == 0 && x!=0 ) 
  return false
12321


  var r = 0;
  while(x > r){
    r = r * 10 + x%10
    x = Math.floor(x/10)
  }

  return x == r || x == Math.floor(r/10) 
  

 
};