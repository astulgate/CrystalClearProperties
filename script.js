import buildingDataArray from "./components/buildingData.js";

const buildingList = buildingDataArray.map((building) => {
  let buildingArticle = document.createElement("article");
  buildingArticle.classList.add("building");
  buildingArticle.setAttribute("id", building.id);

  buildingArticle.innerHTML = `
    <h2>${building.address}</h2>
    <div class="bldContain">
    <img src=${building.image} />
    <div class="aptContain"></div>
    </div>
  
  `;

  const apartmentList = building.apartments.map((apartment) => {
    let apartmentArticle = document.createElement("article");
    apartmentArticle.classList.add("apartment");
    apartmentArticle.setAttribute("id", apartment.id);

    apartmentArticle.innerHTML = `
        <h3>Apartment ${apartment.id}</h3>
        <ul>
            <li>${apartment.bedrooms} Bedrooms</li>
            <li>${apartment.bathrooms} Bathroom</li>
            <li>${apartment.squareFeet} SqFt</li>
            <li>$${apartment.price}</li>
            <li>Available: ${apartment.available ? "Yes" : "No"}</li>
            

        </ul>

      
      
      `;

    return apartmentArticle;
  });

  apartmentList.forEach((apartment) => {
    // buildingArticle.append(apartment);
    buildingArticle.querySelector(".aptContain").append(apartment);
  });

  return buildingArticle;
});

const main = document.querySelector(".maincontent");

buildingList.forEach((building) => {
  main.append(building);
});

console.log(buildingList);
