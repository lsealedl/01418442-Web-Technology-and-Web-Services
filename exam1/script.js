let machineNumber = Math.ceil(Math.random() * 21);
let score = 10;
let highscore = 10;

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "ว้าา!! แพ้อีกละ";

// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 15;
// document.addEventListener("DOMContentLoaded", () => {
// 	const btnCheck = document.querySelector(".btn check");

// 	btnCheck.addEventListener("click", () => {
// 		console.log("click");
// 	});
// });

// const btnCheck = document.querySelector(".btn check");

// btnCheck.addEventListener("click", () => {});

console.log("คำตอบ คือ " + machineNumber);

document.querySelector(".check").addEventListener("click", () => {
	guess = document.querySelector(".guess").value;
	if (guess == machineNumber) {
		document.querySelector(".message").textContent = "ยินดีด้วยคุณทายถูกแล้ว";
	} else if (guess > machineNumber) {
		document.querySelector(".message").textContent =
			"เลขที่คุณทายมีค่ามากเกินไป";
	} else if (guess < machineNumber) {
		document.querySelector(".message").textContent =
			"เลขที่คุณทายมีค่าน้อยเกินไป";
	}
});
