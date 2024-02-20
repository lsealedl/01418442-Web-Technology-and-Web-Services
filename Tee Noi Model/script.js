let keyId = 0;
let menuPosition = 0;

if (localStorage.length > 0) {
	let max = 0;
	for (let i = 0; i < localStorage.length; i++) {
		if (localStorage.key(i) >= max) {
			max = localStorage.key(i);
		}
	}
	keyId = parseInt(max) + 1;
	console.log(keyId);
}

const menu = [
	{
		name: "ขาหมู",
		price: 120,
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1024px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
	},
	{
		name: "หมูกรอบน้ำแดง",
		price: 120,
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1024px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
	},
	{
		name: "ปีกไก่ทอดเกลือ",
		price: 90,
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1024px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
	},
	{
		name: "ปีกไก่ทอดสมุนไพร",
		price: 90,
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1024px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
	},
	{
		name: "เอ็นข้อไก่ทอด",
		price: 80,
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1024px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
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
	const table = document.createElement("table");
	const tablebody = document.createElement("tbody");

	for (var i = 0; i < menu.length; i++) {
		const tableTr = [];
		for (var j = 0; j < 2; j++) {
			tableTr[j] = document.createElement("tr");
		}

		const tableTd = [];
		for (var j = 0; j < 4; j++) {
			tableTd[j] = document.createElement("td");
		}

		const image = document.createElement("img");
		image.src = menu[i].img;
		tableTd[0].appendChild(image);

		tableTd[2].textContent = ` ${menu[i].name}, ราคา : ${menu[i].price}  `;
		const addBtn = document.createElement("button");
		addBtn.textContent = "Add";
		let value = [menu[i].name, menu[i].price];
		addBtn.onclick = function () {
			localStorage.setItem(keyId, JSON.stringify(value));
			keyId++;
			loadOrder();
		};
		tableTd[1].appendChild(addBtn);
		tableTd[1].rowSpan = 2;
		tableTr[0].appendChild(image);
		tableTr[0].appendChild(tableTd[1]);
		tableTr[1].appendChild(tableTd[2]);
		tablebody.appendChild(tableTr[0]);
		tablebody.appendChild(tableTr[1]);
		table.appendChild(tablebody);
	}
	container.appendChild(table);
}

function loadOrder() {
	const container = document.getElementById("order");
	container.innerHTML = "";

	const table = document.createElement("table");
	const tablebody = document.createElement("tbody");
	let sum = 0;

	const sortOrder = Object.entries(localStorage)
		.map(([key, value]) => ({
			key: parseInt(key),
			value: JSON.parse(value),
		}))
		.sort(({ key: keyA }, { key: keyB }) => keyA - keyB);

	for (var i = 0; i < localStorage.length; i++) {
		const tableTr = document.createElement("tr");
		const tableTdLeft = document.createElement("td");
		const tableTdRight = document.createElement("td");

		const key = sortOrder[i].key;
		const value = sortOrder[i].value;
		sum = sum + value[1];
		const div = document.createElement("div");
		tableTdLeft.textContent = `${value[0]}, ราคา : ${value[1]} `;
		const removeButton = document.createElement("button");
		removeButton.textContent = "Remove";
		removeButton.onclick = function () {
			localStorage.removeItem(key);
			loadOrder();
		};
		tableTdRight.appendChild(removeButton);

		tableTr.appendChild(tableTdLeft);
		tableTr.appendChild(tableTdRight);
		tablebody.appendChild(tableTr);
		table.appendChild(tablebody);
	}
	const div = document.createElement("div");
	div.textContent = `Sum : ${sum} Baht`;
	container.appendChild(table);
	container.appendChild(div);
}

function clearBill() {
	localStorage.clear();
	loadOrder();
	keyId = 0;
	alert("All bills cleared 💲💲💲");
}
