var plusOne = function(digits){
  let carry = 1; tmp = [];
  for(let i = digits.length - 1; i >= 0 ; i--){
    let digit = digits[i] + carry;

    if(digit > 9){
      carry = 1;
      tmp.unshift(0);
      if(i == 0 && digit > 9){
        tmp.unshift(1)
      }
    }else{
      tmp.unshift(digit);  
      carry = 0;
    }
  }
  return tmp;
}

console.log(plusOne[9,9,1,2,9])
console.log(plusOne[9,9,1,9,9])
console.log(plusOne([1,8,9]))
console.log(plusOne([1,9,9]))
console.log(plusOne([9,9,9]))
console.log(plusOne([9]))
