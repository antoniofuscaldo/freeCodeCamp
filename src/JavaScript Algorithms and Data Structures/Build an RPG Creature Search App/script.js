const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const creatureWeight = document.getElementById("weight");
const creatureHeight = document.getElementById("height");
const creatureTypes = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const getCreature = async () => {
  try {
    const creatureNameOrId = searchInput.value.toLowerCase();
    const response = await fetch(
      `https://rpg-creature-api.freecodecamp.rocks/api/creature/${creatureNameOrId}`
    );
    const data = await response.json();
    setCreatureInfo(data);
  } catch (err) {
    /* resetDisplay(); */
    alert("Creature not found");
    console.log(err);
  }
};

const setCreatureInfo = (data) => {
  const { name, id, weight, height, types, stats } = data;

  creatureName.textContent = `${name[0].toUpperCase() + name.slice(1)}`;
  creatureId.textContent = `${id}`;
  creatureWeight.textContent = `${weight}`;
  creatureHeight.textContent = `${height}`;
  hp.textContent = `${stats[0].base_stat}`;
  attack.textContent = `${stats[1].base_stat}`;
  defense.textContent = `${stats[2].base_stat}`;
  specialAttack.textContent = `${stats[3].base_stat}`;
  specialDefense.textContent = `${stats[4].base_stat}`;
  speed.textContent = `${stats[5].base_stat}`;

  creatureTypes.innerHTML = types
    .map(
      (obj) => `<span>${obj.name[0].toUpperCase() + obj.name.slice(1)}</span>`
    )
    .join(" ");
};

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  getCreature();
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchButton.click();
  }
});
