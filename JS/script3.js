const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const numbers = [9, 10, 11, 12];
let sumFor = 0;
let sumForEach = 0;
let sumForIn = 0;
let sumForOf = 0;
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 3 == 0) {
		sumFor = sumFor + numbers[i];
	}
}

numbers.forEach(function (i) {
	if (i % 3 == 0) {
		sumForEach = sumForEach + i;
	}
});

for (const i in numbers) {
	if (numbers[i] % 3 == 0) {
		sumForIn = sumForIn + numbers[i];
	}
}

for (const i of numbers) {
	if (i % 3 == 0) {
		sumForOf = sumForOf + i;
	}
}

console.log(
	`sumFor : ${sumFor}, sumForEach : ${sumForEach}, sumForIn : ${sumForIn}, sumForOf : ${sumForOf}`
);
