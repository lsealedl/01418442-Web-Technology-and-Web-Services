"use strict";

const countries = document.querySelector(".countries");

const getCountry = function (country) {
	console.log(country);
	const req = new XMLHttpRequest();
	req.open("GET", `https://restcountries.com/v3.1/name/${country}`);
	req.send();

	req.addEventListener("load", function () {
		const [data] = JSON.parse(this.responseText);
		console.log(data);
		console.log(data.name.common);
		const html = `
        <article class="country">
            <img src="${data.flags.png}" alt="" class="country_img" />
            <div class="country_data">
                <h3 class="country_name">${data.name.common}</h3>
                <h4 class="country_region">${data.region}</h4>
            </div>
        </article>`;
		countries.insertAdjacentHTML("beforeend", html);
		countries.style.opacity = 1;
	});
};
getCountry("Thailand");
getCountry("japan");
getCountry("USA");
// const emptySpace = document.querySelector(".space");

// const html = `<h2>New Message:</h2><p>this is a message from script</p>`;

// emptySpace.insertAdjacentHTML("beforeend", html);
