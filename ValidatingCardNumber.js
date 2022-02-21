function isValidCardNumber(num){
  let  total = 0 ;
  while(num > 0){
    // get the first last number.
    total += Math.floor(num % 10);
    // remove the first last number.
    num = Math.floor(num / 10);
    
     // multiply the last second number
    let second_num = Math.floor(num % 10) * 2;
    
    // get the first last number from second number
    total += Math.floor(second_num / 10);
    // get the last number from second number
    total += Math.floor(second_num % 10);
    
    //remove the last second number;
    num = Math.floor(num / 10);
  }
  return total % 10 == 0; 
}

console.log(isValidCardNumber(4177850106987990));
