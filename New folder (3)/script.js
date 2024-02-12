"use strict";

const countries = document.querySelector(".countries");

const getCountry = function (country) {
	// console.log(country);
	const req = new XMLHttpRequest();
	req.open("GET", `https://restcountries.com/v3.1/name/${country}`);
	req.send();

	req.addEventListener("load", function () {
		const [data] = JSON.parse(this.responseText);
		const lang = Object.entries(data.languages);
		const currency = Object.entries(data.currencies);
		console.log(lang);
		let allLang = "";

		for (let i = 0; i < lang.length; i++) {
			if (i == lang.length - 1) {
				allLang = allLang + lang[i][1];
			} else {
				allLang = allLang + lang[i][1] + ", ";
			}
		}
		console.log(allLang);
		const html = `
        <article class="country">
            <img src="${data.flags.png}" alt="" class="country_img" />
            <div class="country_data">
                <h3 class="country_name">${data.name.common}</h3>
                <h4 class="country_region">${data.region}</h4>
                <p class="country_row"><span>🗣️</span>${allLang}</p>
                <p class="country_row"><span>💰</span>${currency[0][1].name} (${currency[0][1].symbol})</p>
            </div>
        </article>`;
		countries.insertAdjacentHTML("beforeend", html);
		countries.style.opacity = 1;
	});
};
getCountry("Thailand");
getCountry("japan");
getCountry("USA");
getCountry("Republic of India");
// const emptySpace = document.querySelector(".space");

// const html = `<h2>New Message:</h2><p>this is a message from script</p>`;

// emptySpace.insertAdjacentHTML("beforeend", html);
