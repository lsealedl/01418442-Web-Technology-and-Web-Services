// เชื่อม form, name, email, password, confirm
// ดักจับ event 'submit'ใน form
// เขียน function checkPassword() เช็ค password เท่ากับ
// confirm หรือไม่ ถ้าไม่ ให้แสดง รหัสผ่านไม่ตรงกัน

const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const username = document.getElementById("username");
	const password = document.getElementById("password");
	const confirm = document.getElementById("confirm");
	checkPassword(password, confirm);
});

function checkPassword(password, confirm) {
	if (password.value !== confirm.value) {
		const formControl = confirm.parentElement;
		const small = formControl.querySelector("small");
		small.innerText = "รหัสผ่านไม่ตรงกัน";
		// alert("รหัสผ่านไม่ตรงกัน");
		formControl.className = "frmDiv error";
	} else {
		alert("ตรงกัน");
		formControl.className = "frmDiv";
	}
}
