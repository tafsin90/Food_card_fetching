let country = "";

let inputValue = document.querySelector("input");
let searchBtn = document.querySelector("button");
let container = document.querySelector(".container");

async function foodApp() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
    // console.log(response);
    let data = await response.json();
    console.log(data);
    let foods = data.meals;

    container.innerHTML = ""
    for (namee of foods) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let h2 = document.createElement("h2");
        div.className = "card";
        img.className = "image ";
        h2.className = "foodName";

        container.appendChild(div);
        div.appendChild(img);
        div.appendChild(h2);
        h2.textContent = namee.strMeal;
        img.src = namee.strMealThumb;
    }

    inputValue.value = "";
}


searchBtn.addEventListener("click", () => {
    country = inputValue.value;
    country = country.trim();
    if (country) {
        foodApp();
    }
})
inputValue.addEventListener("keypress", (element) => {
    if (element.key == "Enter") {
        country = inputValue.value;
        country = country.trim();
        if (country) {
            foodApp();
        }
    }



})


