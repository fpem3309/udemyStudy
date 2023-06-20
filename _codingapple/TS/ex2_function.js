function num(x) {
    return x * 2 + '문자';
}
num(1); // 파라미터가 타입지정되면 아규먼트 필수
num(); // 파라미터에 ?지정하면 아규먼트 옵션으로 가능 ( number | undefined 랑 같은 뜻)
function vo(x) {
    // return 1+1
    1 + 1;
}
function hello(name) {
    if (name) {
        return '안녕하세요' + name;
    }
    else {
        return '왜 입력안함?';
    }
}
console.log(hello('홍길동'));
function Len(param) {
    return param.toString().length;
}
function Marry(money, house, charm) {
    var total = money;
    if (house) {
        total += 500;
    }
    if (charm === '상') {
        total += 100;
    }
    if (total >= 600) {
        return '결혼가능';
    }
}
