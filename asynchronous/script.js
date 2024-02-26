// Synchronous
// function brewCoffee() {
// 	console.log("Start brewing coffee☕");
// 	const startTime = new Date().getTime();
// 	while (new Date().getTime() < startTime + 5000) {}
// 	console.log("Cofee is ready☕");
// }

// console.log("Ordering cofee");
// brewCoffee();
// console.log("Waiting for cofee, doing other task.");
// ---------------------------------------------------------------------------

//Asynchronous
// function brewCoffee(callback) {
// 	console.log("Start brewing coffee☕");
// 	setTimeout(() => {
// 		console.log("Cofee is ready☕");
// 		callback();
// 	}, 3000); //ชงกาแฟใน 3 วินาทีและเรียก callback
// }

// console.log("Ordering cofee");
// brewCoffee(() => {
// 	console.log("Cofee recieved, doing other task.");
// });
// console.log("Waiting for cofee, doing other task.");
// ---------------------------------------------------------------------------

//Asynchronous 2: asysnc - await
// function brewCoffee(callback) {
// 	return new Promise((resolve) => {
// 		console.log("Start brewing coffee☕");
// 		setTimeout(() => {
// 			console.log("Cofee is ready☕");
// 			resolve();
// 		}, 3000); //ชงกาแฟใน 3 วินาทีและเรียก callback
// 	});
// }

// async function orderCoffee() {
// 	console.log("Ordering cofee");
// 	await brewCoffee();
// 	console.log("Cofee recieved, doing other task.");
// }

// orderCoffee();
// console.log("Waiting for cofee, doing other task.");
// ---------------------------------------------------------------------------
