import Pokemon from './Pokemon.js';

const button = document.querySelector("button");
var pokemons = [];
var desirelist =[]
var selectedPokemons = [];


button.addEventListener("click", (e) => {
  document.querySelectorAll("#filtrotipo").forEach((e) => {
    e.style.visibility = "visible";
  });

  document.querySelectorAll("#filtropeso").forEach((e) => {
    e.style.visibility = "visible";
  });

  document.querySelectorAll("#filtropoder").forEach((e) => {
    e.style.visibility = "visible";
  });

  document.querySelectorAll("#btn_lista_deseo").forEach((e) => {
    e.style.visibility = "visible";
  });
  document.querySelectorAll("#btn_alista_deseo").forEach((e) => {
    e.style.visibility = "visible";
  });

  let Lista_Pokemon = document.querySelector(".Lista_Pokemon");
  Lista_Pokemon.style.visibility = "visible";

  document.querySelector('#button').style.visibility = 'hidden';

  document.querySelector('#pokedex').style.visibility = 'visible';

  startPokedex();
});

const confirmButton = document.getElementById('btn_alista_deseo');

confirmButton.addEventListener('click', () => {
  if (selectedPokemons.length === 0) {
    alert("No Pokémon selected. Please select at least one Pokémon.");
    return;
  }

  const confirmMessage = `Are you sure you want to add ${selectedPokemons.length} Pokémon to your desire list?`;
  
  if (confirm(confirmMessage)) {
    selectedPokemons.forEach(pokemonId => {
      const pokemon = pokemons.find(p => p.id.toString() === pokemonId);
      if (pokemon && !desirelist.includes(pokemon)) {
        desirelist.push(pokemon);
      }
      // Remove 'selected' class for all selected Pokémon
      const card = document.getElementById(pokemonId);
      if (card) {
        card.classList.remove('selected');
      }
    });
    console.log(desirelist);
    // Clear selection
    selectedPokemons = [];
  }
});


const startPokedex = async () => {
  for (var i = 1; i <= 151; i++) {
    await fetch("https://pokeapi.co/api/v2/pokemon/" + i + "/")
      .then(function (result) {
        return result.json();
      })
      .then(function (result) {
        const data = result;
        const pokemon = new Pokemon(data);
        pushPokemon(pokemon);
      });
  }

  await showPokedex(pokemons);
  
  const filterInputP = document.getElementById('filtropoder');
  const filterInput = document.getElementById('filtrotipo');
  const filterInputPeso = document.getElementById('filtropeso')
  const pokedex = document.getElementById("pokedex");
  const pokemonCards = pokedex.children;
  

  filterInputP.addEventListener('input', filterPokemons);
  filterInput.addEventListener('input', filterPokemons);
  filterInputPeso.addEventListener('input', filterPokemons);
};

// Add the filterPokemons function
function filterPokemons(event) {
  const filterValue = event.target.value.toLowerCase();
  const pokemonCards = document.getElementById("pokedex").children;

  for (let i = 0; i < pokemonCards.length; i++) {
    const pokemonCard = pokemonCards[i];
    let showPokemon = false;

    // Depending on the filter type, check the corresponding element
    if (event.target.id === 'filtropoder') {
      const pokemonPoder = pokemonCard.querySelectorAll('.attack');
      for (let j = 0; j < pokemonPoder.length; j++) {
        const pokemonPoderText = pokemonPoder[j].textContent;
        if (pokemonPoderText.includes(filterValue)) {
          showPokemon = true;
          break;
        }
      }
    } else if (event.target.id === 'filtrotipo') {
      const pokemonTypes = pokemonCard.querySelectorAll('.type');
      for (let j = 0; j < pokemonTypes.length; j++) {
        const pokemonType = pokemonTypes[j].textContent.toLowerCase();
        if (pokemonType.includes(filterValue)) {
          showPokemon = true;
          break;
        }
      }
    } else if (event.target.id === 'filtropeso') {
      const pokemonPeso = pokemonCard.querySelectorAll('.weight');
      for (let j = 0; j < pokemonPeso.length; j++) {
        const pokemonPesoText = pokemonPeso[j].textContent;
        if (pokemonPesoText.includes(filterValue)) {
          showPokemon = true;
          break;
        }
      }
    }

    if (showPokemon) {
      pokemonCard.style.display = 'block';
    } else {
      pokemonCard.style.display = 'none';
    }
  }
}


function pushPokemon(pokemon) {
  pokemons.push(pokemon);
}

const showPokedex = async (pokemons) => {
  const pokedex = document.getElementById("pokedex");

  for (let i = 0; i < pokemons.length; i++) {
    let tipo1 = "";
    let tipo2 = "";

    for (let aux = 0; aux < pokemons[i].pkm_type.length; aux++) {
      if (aux == 0) {
        tipo1 = pokemons[i].pkm_type[aux].type.name;
      } else if (aux == 1) {
        tipo2 = pokemons[i].pkm_type[aux].type.name;
      }
    }

    const tipo1Color = getColorByType(tipo1);
    const tipo2Color = tipo2 ? getColorByType(tipo2) : "";
    pokemons.pkm_price = ((5 + pokemons[i].pkm_attack * (20 - 5)) / 100).toFixed(2)
    const singleTypeClass = !tipo2 ? "single-type" : "";

    pokedex.innerHTML += `
      <div class="card" id="${pokemons[i].id}">
        <div class="idname">
          ${pokemons[i].id}. ${pokemons[i].name} 
        </div>
        <div class="type">${pokemons.pkm_price}€</div>
        <br>
        <div class="attack">Attack ${pokemons[i].pkm_attack}</div>
        <br>
        <img src="${pokemons[i].pkm_back}">
        <img src="${pokemons[i].pkm_sback}">
        <img class="front" src="${pokemons[i].pkm_front}">
        <img class="front" src="${pokemons[i].pkm_sfront}">
        <br>
        <div class="type ${singleTypeClass}" style="background-color: ${tipo1Color};">
          ${tipo1}
        </div>
        <div class="type ${singleTypeClass}" style="background-color: ${tipo2Color}; opacity: ${NoEmptyTypes(tipo2)};">
          ${tipo2}
        </div>
        <div class="phy">
          <div class="size">
             height: ${pokemons[i].pkm_weight}
            <div class="weight">weight: ${pokemons[i].pkm_height}</div>
          </div>
        </div>
      </div>
    `;
  }
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => togglePokemonSelection(card)); });
};
function togglePokemonSelection(card) {
  const pokemonId = card.id;
  const index = selectedPokemons.indexOf(pokemonId);

  if (index === -1) {
    // Pokemon is not in the list, add it
    selectedPokemons.push(pokemonId);
    card.classList.add('selected');
  } else {
    // Pokemon is in the list, remove it
    selectedPokemons.splice(index, 1);
    card.classList.remove('selected');
  }

  console.log('Selected Pokemons:', selectedPokemons);
}
// Función para obtener el color por tipo
function getColorByType(type) {
    const colors = {
        fire: "#ff4422",
        water: "#3399ff",
        electric: "#ffcc33",
        grass: "#77cc55",
        ice: "#66ccff",
        fighting: "#bb5544",
        poison: "#aa5599",
        ground: "#ddbb55",
        flying: "#8899ff",
        psychic: "#ff5599",
        bug: "#aabb22",
        rock: "#bbaa66",
        ghost: "#6666bb",
        dragon: "#7766ee",
        dark: "#775544",
        steel: "#aaaabb",
        fairy: "#ee99ee",
        default: "#aaaa99"
    };
    return colors[type] || colors.default;
}

// Función para verificar si el tipo es vacío
function NoEmptyTypes(tipo) {
    return tipo === "" ? "0" : "1";
}

