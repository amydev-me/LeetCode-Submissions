function readability(str){
  let letter_count = 0,sentence_count = 0, word_count=1;
  for(let i=0, count = str.length; i < count;i++){
    if((str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) || (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122)){
      letter_count ++;
    }else if(str[i] == '!' || str[i] == '?' || str[i] == '.'){
      sentence_count ++;
    }else if(str[i] == ' ' && str[i + 1] != ' '){
      word_count ++;
    }
  }
  let l =  ((letter_count / word_count) * 100).toFixed(2)
  let s = (sentence_count / word_count * 100).toFixed(2);
  let res = Math.round(0.0588 * l - 0.296 * s - 15.8);
  if(res >= 16){
    console.log("Grade " + 16 + "+")
  }else if (res >= 1){
    console.log("Grade " + res);
  }else{
    console.log("Before Grade 1");
  }
}

readability("When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow. When it healed, and Jem's fears of never being able to play football were assuaged, he was seldom self-conscious about his injury. His left arm was somewhat shorter than his right; when he stood or walked, the back of his hand was at right angles to his body, his thumb parallel to his thigh.");
