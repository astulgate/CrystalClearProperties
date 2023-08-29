import buildingDataArray from "./components/buildingData.js";

const buildingList = buildingDataArray.map((building) => {
  let buildingArticle = document.createElement("article");
  buildingArticle.classList.add("building");
  buildingArticle.setAttribute("id", building.id);

  buildingArticle.innerHTML = `
    <h2>${building.address}</h2>
  
  `;

  const apartmentList = building.apartments.map((apartment) => {
    let apartmentArticle = document.createElement("article");
    apartmentArticle.classList.add("apartment");
    apartmentArticle.setAttribute("id", apartment.id);

    apartmentArticle.innerHTML = `
        <h3>${apartment.id}</h3>
        <ul>
            <li>${apartment.bedrooms}</li>
            <li>${apartment.bathrooms}</li>
            <li>${apartment.squareFeet}</li>
            <li>${apartment.price}</li>
            <li>${apartment.available}</li>
            

        </ul>

      
      
      `;

    return apartmentArticle;
  });

  apartmentList.forEach((apartment) => {
    buildingArticle.append(apartment);
  });

  return buildingArticle;
});

const main = document.querySelector(".maincontent");

buildingList.forEach((building) => {
  main.append(building);
});

console.log(buildingList);
