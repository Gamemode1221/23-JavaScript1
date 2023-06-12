const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

// 사각형
ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect(10, 10, 50, 100);

// 삼각형
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.lineTo(100, 200);
// ctx.stroke();
ctx.closePath();
ctx.fillStyle = 'rgb(0, 200, 0)';
ctx.fill();

// 원
ctx.beginPath();
ctx.arc(300, 150, 100, 0, Math.PI * 2, true);
ctx.closePath();
ctx.fillStyle = 'rgb(0, 0, 200)';
ctx.fill();
ctx.stroke();