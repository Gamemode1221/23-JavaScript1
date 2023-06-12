const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(400, 100);
ctx.lineTo(150, 300);
ctx.lineTo(250, 0);
ctx.lineTo(350, 300);
ctx.lineTo(100, 100);
ctx.closePath();
ctx.stroke();
