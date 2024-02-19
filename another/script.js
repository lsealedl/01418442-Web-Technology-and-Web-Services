document.addEventListener("DOMContentLoaded", function () {
	loadData();
});

function saveData() {
	const key = document.getElementById("inputKey").value;
	const value = document.getElementById("inputValue").value;
	localStorage.setItem(key, value);
	document.getElementById("inputKey").value = "";
	document.getElementById("inputValue").value = "";
	loadData();
	alert("Data saved ☠️");
}

function loadData() {
	const container = document.getElementById("data");
	container.innerHTML = "";

	for (var i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i);
		const value = localStorage.getItem(key);

		const div = document.createElement("div");
		div.textContent = `Key : ${key}, Value: ${value}`;
		const removeButton = document.createElement("button");
		removeButton.textContent = "Remove";
		removeButton.onclick = function () {
			localStorage.removeItem(key);
			loadData();
		};
		div.appendChild(removeButton);
		container.appendChild(div);
	}

	// console.log(key + " : " + value);
}

function clearData() {
	localStorage.clear();
	loadData();
	alert("All data cleared 💥");
}
