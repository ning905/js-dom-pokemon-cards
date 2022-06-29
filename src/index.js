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
  const cardText = document.createElement("li");
  cardText.innerText = statName + ": " + baseStat;
  cardText.style.textTransform = "uppercase";
  return cardText;
};

const createCardStatList = (pokemon) => {
  const cardStatList = document.createElement("ul");
  cardStatList.classList.add("card--text");
  cardStatList.style.listStyle = "none";

  pokemon.stats.forEach((stat) => {
    cardStatList.append(createCardStatText(stat.stat.name, stat.base_stat));
  });

  return cardStatList;
};

const createCardItem = (pokemon) => {
  const cardItem = document.createElement("li");
  cardItem.classList.add("card");

  cardItem.appendChild(createCardTitle(pokemon));
  cardItem.appendChild(createCardImg(pokemon));
  cardItem.appendChild(createCardStatList(pokemon));

  return cardItem;
};

const generateCardList = (pokemonList) => {
  const cardList = document.querySelector("ul");
  cardList.style.display = "grid";
  cardList.style.listStyle = "none";

  pokemonList.forEach((pokemon) => {
    cardList.append(createCardItem(pokemon));
  });

  return cardList;
};

generateCardList(data);
