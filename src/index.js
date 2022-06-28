const cardList = document.querySelector("ul");
cardList.style.display = "grid";
cardList.style.listStyle = "none";

for (let i = 0; i < data.length; i++) {
  const cardItem = document.createElement("li");
  cardList.appendChild(cardItem);
  cardItem.setAttribute("class", "card");

  const cardTitle = document.createElement("h2");
  cardItem.appendChild(cardTitle);
  cardTitle.setAttribute("class", "card--title");
  cardTitle.innerText = data[i].name;
  cardTitle.style.textTransform = "capitalize";

  const cardImg = document.createElement("img");
  cardItem.appendChild(cardImg);
  cardImg.setAttribute("class", "card--img");
  cardImg.style.width = "256px";
  cardImg.setAttribute(
    "src",
    data[i].sprites.other["official-artwork"].front_default
  );

  const cardTxtList = document.createElement("ul");
  cardItem.appendChild(cardTxtList);
  cardTxtList.setAttribute("class", "card--text");
  cardTxtList.style.listStyle = "none";

  for (let j = 0; j < data[i].stats.length; j++) {
    const thisStats = data[i].stats;
    const cardTxt = document.createElement("li");
    cardTxtList.appendChild(cardTxt);
    cardTxt.innerText = thisStats[j].stat.name + ": " + thisStats[j].base_stat;
    cardTxt.style.textTransform = "uppercase";
  }
}
