let keyId = localStorage.length;

const menu = [
	{
		name: "ขาหมู",
		price: 120,
	},
	{
		name: "หมูกรอบน้ำแดง",
		price: 120,
	},
	{
		name: "ปีกไก่ทอดเกลือ",
		price: 90,
	},
	{
		name: "ปีกไก่ทอดสมุนไพร",
		price: 90,
	},
	{
		name: "เอ็นข้อไก่ทอด",
		price: 80,
	},
];

document.addEventListener("DOMContentLoaded", function () {
	loadMenu();
	loadOrder();
});

function saveData() {
	const key = document.getElementById("inputKey").value;
	const value = document.getElementById("inputValue").value;
	localStorage.setItem(key, value);
	document.getElementById("inputKey").value = "";
	document.getElementById("inputValue").value = "";
	loadOrder();
}

function loadMenu() {
	const container = document.getElementById("menu");
	container.innerHTML = "";

	for (var i = 0; i < menu.length; i++) {
		const div = document.createElement("div");
		div.textContent = ` ${menu[i].name}, ราคา : ${menu[i].price}  `;
		const addBtn = document.createElement("button");
		addBtn.textContent = "Add";
		let value = [menu[i].name, menu[i].price];
		addBtn.onclick = function () {
			localStorage.setItem(keyId, JSON.stringify(value));
			keyId++;
			loadOrder();
		};
		div.appendChild(addBtn);
		container.appendChild(div);
	}
}

function loadOrder() {
	const container = document.getElementById("order");
	container.innerHTML = "";
	let sum = 0;

	const sortOrder = Object.entries(localStorage)
		.map(([key, value]) => ({
			key: parseInt(key),
			value: JSON.parse(value),
		}))
		.sort(({ key: keyA }, { key: keyB }) => keyA - keyB);

	// console.log(sortOrder);

	for (var i = 0; i < localStorage.length; i++) {
		// const value = JSON.parse(sortOrder[i].value);
		const key = sortOrder[i].key;
		const value = sortOrder[i].value;
		sum = sum + value[1];
		const div = document.createElement("div");
		div.textContent = `${value[0]}, ราคา : ${value[1]} `;
		const removeButton = document.createElement("button");
		removeButton.textContent = "Remove";
		removeButton.onclick = function () {
			localStorage.removeItem(key);
			loadOrder();
		};
		div.appendChild(removeButton);
		container.appendChild(div);
	}
	const div = document.createElement("div");
	div.textContent = `Sum : ${sum} Baht`;
	container.appendChild(div);
}

function clearBill() {
	localStorage.clear();
	loadOrder();
	keyId = 0;
	alert("All data cleared 💥");
}
