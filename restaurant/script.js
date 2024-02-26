document.addEventListener("DOMContentLoaded", function () {
	LoadMenuItems();
});

function LoadMenuItems() {
	console.log("menu is loading");
	fetch("menu.json")
		.then((response) => response.json())
		.then((menuItems) => {
			const menuContainer = document.querySelector(".menu");
			menuContainer.innerHTML = "";

			menuItems.forEach((item) => {
				const menuItemElement = document.createElement("div");
				menuItemElement.classList.add("menu-item");
				menuItemElement.innerHTML = `
                <img src="${item.imgSrc}" alt="${item.name}" srcset="" />
				<h2>${item.name}</h2>
				<p>${item.price}</p>
                `;
				menuContainer.appendChild(menuItemElement);

				menuItemElement.addEventListener("click", function () {
					let orders = JSON.parse(localStorage.getItem("customerOrders")) || [];
					console.log(orders);
				});
			});
		});
}
