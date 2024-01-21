function solution(phone_number) {
    let arr = [];
    const split = phone_number.split('');
    
    for (let i = 0; i < split.length; i++) {
   
      if (i < split.length - 4) {
        arr.push('*');
      } else {
        arr.push(split[i]);
      }
    }
    
    return arr.join(''); 
  }
  
  console.log(solution("01033334444")); 
  console.log(solution("027778888"));  

  
  //뒷자리 4자리 뺴고 *로 바꾸기