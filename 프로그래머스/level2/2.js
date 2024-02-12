function solution(s) {
    const stack = [];
    
    s.split('').forEach(char => {
        if (char === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        } else {
            stack.push(char);
        }
    });

    return stack.length === 0;
}

console.log(solution("()()"));    // true
console.log(solution("(())()"));  // true
console.log(solution(")()("));    // false
