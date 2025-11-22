const searchInput = document.getElementById('search-input'),
  searchButton = document.getElementById('search-button'),
  creatureName = document.getElementById('creature-name'),
  creatureId = document.getElementById('creature-id'),
  creatureWeight = document.getElementById('weight'),
  creatureHeight = document.getElementById('height'),
  creatureTypes = document.getElementById('types'),
  hp = document.getElementById('hp'),
  attack = document.getElementById('attack'),
  defense = document.getElementById('defense'),
  specialAttack = document.getElementById('special-attack'),
  specialDefense = document.getElementById('special-defense'),
  speed = document.getElementById('speed'),
  getCreature = async () => {
    try {
      const creatureNameOrId = searchInput.value.toLowerCase(),
        response = await fetch(
          `https://rpg-creature-api.freecodecamp.rocks/api/creature/${creatureNameOrId}`
        ),
        data = await response.json();
      setCreatureInfo(data);
    } catch (err) {
      /* ResetDisplay(); */
      alert('Creature not found');
      console.log(err);
    }
  },
  setCreatureInfo = (data) => {
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
      .map((obj) => `<span>${obj.name[0].toUpperCase() + obj.name.slice(1)}</span>`)
      .join(' ');
  };

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  getCreature();
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchButton.click();
  }
});
