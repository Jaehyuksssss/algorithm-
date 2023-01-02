// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

function solution(n) {
  var sum = 0
  do {
    sum += n % 10
    n = Math.floor(n / 10)
  } while (n > 0)
  return sum
}
