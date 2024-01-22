const container = document.getElementById("container");
const fruitList = document.getElementById("fruitList");

const img = document.createElement("img");

img.src = "chinese-dragon.jpg";
img.alt = "Dragon";

container.appendChild(img);

const fruits = ["Apple", "Banana", "Mango", "Strawberry", "Orange"];

fruits.forEach((fruit) => {
	const li = document.createElement("li");

	li.textContent = fruit;
	fruitList.appendChild(li);
});
