function cipherText(str){
  let key = 13;
  let cipher_text = "";
  for (let i = 0, count = str.length; i < count; i++){
    if ((str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90)){
      cipher_text += String.fromCharCode( 65 + ((str[i].charCodeAt(0) -  65) + key) % 26);
    }else if(str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122){
      cipher_text += String.fromCharCode( 97 + ((str[i].charCodeAt(0) -  97) + key) % 26);
    }else{
      cipher_text += str[i];
    }
  } 
  console.log(cipher_text)
}

cipherText("hello, world");
