//대소문자 바꾸기

function solution(s) {
    let words = s.split(' ');
    
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      
      for (let j = 0; j < word.length; j++) {
      
        if (j % 2 === 0) {
          words[i] = words[i].substring(0, j) + word[j].toUpperCase() + words[i].substring(j + 1);
        } else {
          words[i] = words[i].substring(0, j) + word[j].toLowerCase() + words[i].substring(j + 1);
        }
      }
    }
    
    return words.join(' '); 
  }
  
  console.log(solution("try hello world"));
  