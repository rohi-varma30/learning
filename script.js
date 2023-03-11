
let countryInp = document.getElementById("country-input");
let srhBtn = document.getElementById("search-btn");
srhBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
       result.innerHTML = `
      <img src="${data[0].flags.svg}" class="flag-img">
      <h2>${data[0].name.common}</h2>
      <div class="wrapper">
          <div class="data-wrapper">
              <h4>Capital:</h4>
              <span>${data[0].capital[0]}</span>
          </div>
      </div>
      <div class="wrapper">
          <div class="data-wrapper">
              <h4>Continent:</h4>
              <span>${data[0].continents[0]}</span>
          </div>
          <div class="wrapper">
          <div class="data-wrapper">
              <h4>Currency:</h4>
              <span>${
                data[0].currencies[Object.keys(data[0].currencies)].name
              } - ${Object.keys(data[0].currencies)[0]}</span>
          </div>
      </div>
      </div>
       <div class="wrapper">
          <div class="data-wrapper">
              <h4>Population:</h4>
              <span>${data[0].population}</span>
          </div>
      </div>
       <div class="wrapper">
          <div class="data-wrapper">
              <h4>Common Languages:</h4>
              <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
          </div>   
    `;
  })
  .catch(() => {
    if (countryName.length == 0) {
      result.innerHTML = `<h3>PLEASE ENTER COUNTRY NAME !!!....</h3>`;
    } else {
      result.innerHTML = `<h3>PLEASE CHECK COUNTRY NAME!!!....</h3>`;
    }
  });
});