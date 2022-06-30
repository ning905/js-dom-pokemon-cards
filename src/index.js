const createCardTitle = (pokemon) => {
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card--title");
  cardTitle.innerText = pokemon.name;
  cardTitle.style.textTransform = "capitalize";
  return cardTitle;
};

const createCardImg = (pokemon) => {
  const cardImg = document.createElement("img");
  cardImg.classList.add("card--img");
  cardImg.setAttribute("width", "256px");
  cardImg.setAttribute(
    "src",
    pokemon.sprites.other["official-artwork"].front_default
  );
  return cardImg;
};

const createCardStatText = (statName, baseStat) => {
  const statText = document.createElement("li");
  statText.innerText = statName + ": " + baseStat;
  statText.style.textTransform = "uppercase";
  return statText;
};

const createGamesAppeared = () => {
  const gameText = document.createElement("li");
  return gameText;
};

const createCardContentList = (pokemon) => {
  const cardContentList = document.createElement("ul");
  cardContentList.classList.add("card--text");
  cardContentList.style.listStyle = "none";

  pokemon.stats.forEach((stat) => {
    cardContentList.append(createCardStatText(stat.stat.name, stat.base_stat));
  });

  const gameText = createGamesAppeared();
  cardContentList.append(gameText);
  const gameNamesArr = pokemon.game_indices.map((game) => {
    return (
      game.version.name.charAt(0).toUpperCase() + game.version.name.slice(1)
    );
  });
  const gameNames = gameNamesArr.join(", ");
  gameText.innerText = "APPEARED IN: " + gameNames;

  return cardContentList;
};

const createCardItem = (pokemon) => {
  const cardItem = document.createElement("li");
  cardItem.classList.add("card");

  cardItem.appendChild(createCardTitle(pokemon));
  cardItem.appendChild(createCardImg(pokemon));
  cardItem.appendChild(createCardContentList(pokemon));

  return cardItem;
};

const generateCardList = (pokemonList) => {
  const cardList = document.querySelector("ul");
  cardList.style.listStyle = "none";

  pokemonList.forEach((pokemon) => {
    cardList.append(createCardItem(pokemon));
  });

  return cardList;
};

generateCardList(data);
