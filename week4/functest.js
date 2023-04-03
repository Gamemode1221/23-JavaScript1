// 화살표 함수
// 매개변수가 없는 화살표 함수
let hi = function() {
    return `안녕하세요?`;
}
hi();

let hi = () => { return `안녕하세요?` }
hi();

let hi = () => `안녕하세요?`;
hi();


// 매개변수가 1개 있는 화살표 함수
let hi = function (user) {
    console.log(`${user}님, 안녕하세요?`);
};
hi("홍길동");

let hi = (user) => console.log(`${user}님, 안녕하세요?`);
hi("홍길동");


// 매개변수가 2개 이상인 화살표 함수
let sum = function (a, b) {
    return a + b;
};
sum(10, 20);

let sum = (a, b) => a + b;
sum(10, 20);


// 콜백 함수
// 다른 함수의 인수로 사용하는 함수
const bttn = document.querySelector("button");
function display() {
    alert("클릭했습니다.");
}
bttn.addEventListener("click", display);

// 함수에 직접 작성해서 콜백 함수 실행하기
const bttn = document.querySelector("button");
bttn.addEventListener("click", () => {
    alert("클릭했습니다.");
});

// 변수에 함수 할당하기
let sum = (a, b) => a + b;
sum(2, 10);

function add(a, b) {
    return a + b;
}
let sum = add;
sum(2, 10)

// 함수를 다른 함수로 전달하기
function hello() {
    return "안녕하세요?";
}
function bye() {
    return "안녕히 가세요.";
}
function userCheck(name, fn) {
    console.log(`${name}님`, fn());
}
userCheck("홍길동", hello);
userCheck("도레미", bye);