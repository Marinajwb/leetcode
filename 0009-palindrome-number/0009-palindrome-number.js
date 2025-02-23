/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

  if(x <0 || x%10 == 0 && x!=0 ) 
  return false
//음수이거나 10,100,1000 의 경우 false ! 


  var r = 0;
  while(x > r){
    r = r * 10 + x%10
    x = Math.floor(x/10)
  }

  return x == r || x == Math.floor(r/10) 
  // 자릿수가 짝수일경우와 홀수일경우 고려해서 
  // 홀수일경우 마지막 자릿수 버려서 가운데 수를 제외하고 비교 
  // 단계가 easy인데 애먹었다 갈길이 멀다~ 아잣아잣 

 
};
