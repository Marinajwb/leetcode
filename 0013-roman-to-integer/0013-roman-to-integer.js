/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   const  roman = {'I': 1, 'V' : 5, 'X':10, 'L':50, 'C' : 100, 'D':500, 'M':1000}

  return [...s].reduce((acc,curr,i,arr)=>{
        a = roman[curr]
        b = roman[arr[i+1]]

        return acc += (a<b? -a : a) 
   },0)


    

};