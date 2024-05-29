document.addEventListener("DOMContentLoaded", () => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => makeCards(data.results))
    .catch((error) => console.error("Error fetching data:", error));

  function makeCards(characterArray) {
    const cardContainer = document.querySelector("#container");
    if (!cardContainer) {
      console.error("Card container not found");
      return;
    }
    let cardsHTML = "";
    characterArray.forEach((character, index) => {
      if (index % 3 === 0) {
        if (index !== 0) {
          cardsHTML += "</div>";
        }
        cardsHTML += '<div class="row">';
      }
      cardsHTML += `
        <article class="characterCard">
          <div class="characterImage">
            <img src="${character.image}" alt="${character.name}" />
          </div>
          <div class="characterInfo">
            <h2>${character.name}</h2>
            <p>Status: ${character.status}</p>
            <p>Species: ${character.species}</p>
            <p>Gender: ${character.gender}</p>
          </div>
        </article>`;
    });
    cardsHTML += "</div>";
    cardContainer.innerHTML = cardsHTML;
  }
});
