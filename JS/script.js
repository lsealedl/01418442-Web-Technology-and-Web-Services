console.log("Hello, JS");
console.log("เริ่มเรียนรู้ JS กันเล้ยย");

let title = "JavaScript";
console.log(title);

let firstname = "Pongsakorn";
let age = 20;
let my_gpa = 3.81;

console.log(age);
age = 21;
console.log(age);

console.log(2023 - age);

const thisYear = 2023;
const birthYear = 2003;
console.log("I am " + thisYear - birthYear);

console.log("My birtyear is " + birthYear);
console.log("I am " + (thisYear - birthYear));

const lastname = "Netprachak";
console.log("My name is " + firstname + " " + lastname + ".");

let score = 14;

console.log("Hello \n World");

console.log("I'm " + firstname + " " + lastname + ".");
console.log(`I'm ${firstname} ${lastname}.`);

const ageMax = 20;

if (ageMax >= 18) {
	console.log("He can drive a car.");
} else {
	console.log("He can't drive a car.");
}

const yrMoney = 75;
// สามารถซื้อของเล่นราคา 110 บาทได้ไหม ถ้าไม่ได้ต้งเพิ่มเงินอีกเท่าไร

// Excerise_JS #01 ใน classroom
if (yrMoney >= 110) {
	console.log("Yes, you can.");
} else {
	console.log("No, you cann't. You Need more " + (110 - yrMoney) + " Baht");
}
