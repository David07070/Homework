console.log("Connected");

let inputText = document.getElementById("searchInp");
let searchBtn = document.getElementById("searchBtn");
let resetBtn = document.getElementById("resetBtn");
let notification = document.getElementById("notification");
let btnCurrency = document.getElementById("btnCurrency");
let btnEnglish = document.getElementById("btnEnglish");
let btnMacedonia = document.getElementById("btnMacedonia");
let cardContainer = document.getElementById("cardContainer");
let url = ("https://restcountries.com/v3.1/all");


function getCountries() {
    let promise = fetch(url);
    console.log(promise);

    promise
        .then(function (response) {
            console.log(response);
            return response.text();
        })
        .then(function (result) {
            let parsedResult = JSON.parse(result);
            console.log("Parsed result: ", parsedResult);
        })
        .catch(function (error) {
            console.log(error);
        });

}

console.log(getCountries());


function createCard(country) {
    return `
    <div class="col mb-4">
        <div class="card">
            <img src="${country.flags.png}" class="card-img-top" alt="${country.name.official} Image">
            <div class="card-body">
            <h5 class="card-title">${country.name.official}</h5>
            <p class="card-text">${country.capital} is the catpital city of ${country.name.official}. The country has population of ${country.population}, with area of ${country.area} square killometers.</p>
            </div>   
        </div>
    </div>`
};

searchBtn.addEventListener("click", function () {
    fetch(`https://restcountries.com/v3.1/name/${inputText.value}`)
        .then(data => data.json())
        .then(function (result) {
            cardContainer.innerHTML = "";
            notification.innerHTML = "";
            try {
                for (let country of result) {
                    cardContainer.innerHTML += createCard(country);
                }
            }
            catch (error) {
                notification.innerHTML = `
            <div class="alert alert-danger" role="alert">
                You have entered wrong country name, try again! 
            </div>`

            }

        })
});

inputText.addEventListener("keydown", function (event) {
    if(event.key === "Enter"){
        fetch(`https://restcountries.com/v3.1/name/${inputText.value}`)
        .then(data => data.json())
        .then(function (result) {
            cardContainer.innerHTML = "";
            notification.innerHTML = "";
            try {
                for (let country of result) {
                    cardContainer.innerHTML += createCard(country);
                }
            }
            catch (error) {
                notification.innerHTML = `
            <div class="alert alert-danger" role="alert">
                You have entered wrong country name, try again! 
            </div>`

            }

        })
    }    
});

resetBtn.addEventListener("click", function(){
    cardContainer.innerHTML = "";
    inputText.innerHTML = "";
    inputText.value = "";
    notification.innerHTML = "";
});

btnEnglish.addEventListener("click", function(){
    cardContainer.innerHTML = "";
    notification.innerHTML = "";
    
    fetch("https://restcountries.com/v3.1/lang/English")
    .then(data => data.json())
    .then(function(result){
        for (let country of result) {
            cardContainer.innerHTML += createCard(country);
        }
    })

});

btnCurrency.addEventListener("click", function(){
    cardContainer.innerHTML = "";
    notification.innerHTML = "";
    
    fetch("https://restcountries.com/v3.1/currency/EUR")
    .then(data => data.json())
    .then(function(result){
        for (let country of result) {
            cardContainer.innerHTML += createCard(country);
        }
    })

});

btnMacedonia.addEventListener("click", function(){
    cardContainer.innerHTML = "";
    notification.innerHTML = "";
    
    fetch("https://restcountries.com/v3.1/lang/mkd")
    .then(data => data.json())
    .then(function(result){
        for (let country of result) {
            cardContainer.innerHTML += createCard(country);
        }
    })

});


   