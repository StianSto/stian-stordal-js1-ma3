const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f48c9a81fe0c4f648e7ea036ea67fc51"; 
const corsFix = "https://noroffcors.herokuapp.com/"
const corsEnabledUrl = corsFix + url;

const listContainer = document.querySelector(".list-container");

async function callApi() {
	try {
		const response = await fetch(corsEnabledUrl);
		const result = await response.json();
		const arr = result.results;

		listContainer.innerHTML = "";

		for(let i = 0; i < 8; i++) {
			listContainer.innerHTML += `<div class="arr__item">
											<h2>${arr[i].name}</h2>
											<p>Rating: ${arr[i].rating}</p>
											<p>Tags: ${arr[i].tags.length}</p>
										</div>`;
		}
	}
	catch (error) {
		listContainer.innerHTML = `<div class="error--getApi">An error occurred while calling the API</div>`;
	}
}

callApi();