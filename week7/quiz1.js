const year = document.querySelector("#year");
const month = document.querySelector("#month");
const date = document.querySelector("#date");
const button = document.querySelector("#button");

const current = document.querySelector("#current");
const resultDays = document.querySelector("#days");
const resultHours = document.querySelector("#hours");

const today = new Date();  // 오늘
current.innerText = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분 현재`;

button.addEventListener("click", () => {
    const birthDay = new Date(year.value, month.value - 1,  date.value);

    let passed = today.getTime() - birthDay.getTime();
    let passedDays = Math.floor(passed / (1000 * 60 * 60 * 24));   // 일 수 계산
    let passedHours = Math.floor(passed / (1000 * 60 * 60));   // 시간 수 계산

    resultDays.innerText = `날짜로는 ${passedDays} 일이 흐르고, `;
    resultHours.innerText = `시간으로는 ${passedHours} 시간이 흘렀습니다.`;

    year.value = "";
    month.value = "";
    date.value = "";

});

