직육면체 안에 들어가는 모서리가 n인 정육면체가 최대 몇개 들어가는지? 

function solution(box, n) {
    let answer = box.map((x) => ~~(x/n)).reduce((acc, cur) => acc * cur);
    return answer;
}