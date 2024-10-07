import Pokemon from './Pokemon.js';

const button = document.querySelector("button");
var pokemons = [];

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

  let Lista_Pokemon = document.querySelector(".Lista_Pokemon");
  Lista_Pokemon.style.visibility = "visible";

  document.querySelector('#button').style.visibility = 'hidden';

  document.querySelector('#pokedex').style.visibility = 'visible';

  startPokedex();
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

  filterInputP.addEventListener('input', (e) => {
    const filterValueP = e.target.value.toLowerCase();

    for (let i = 0; i < pokemonCards.length; i++) {
      const pokemonCard = pokemonCards[i];
      const pokemonPoder = pokemonCard.querySelectorAll('.attack');

      let showPokemon = false;
      for (let j = 0; j < pokemonPoder.length; j++) {
        const pokemonPoderText = pokemonPoder[j].textContent;
        if (pokemonPoderText.includes(filterValueP)) {
          showPokemon = true;
          break;
        }
      }

      if (showPokemon) {
        pokemonCard.style.display = 'block';
      } else {
        pokemonCard.style.display = 'none';
      }
    }
  });

  filterInputPeso.addEventListener('input', (e) => {
    const filterValuePeso = e.target.value.toLowerCase();

    for (let i = 0; i < pokemonCards.length; i++) {
      const pokemonCard = pokemonCards[i];
      const pokemonPeso = pokemonCard.querySelectorAll('.weight');

      let showPokemon = false;
      for (let j = 0; j < pokemonPeso.length; j++) {
        const pokemonPesoText = pokemonPeso[j].textContent;
        if (pokemonPesoText.includes(filterValuePeso)) {
          showPokemon = true;
          break;
        }
      }

      if (showPokemon) {
        pokemonCard.style.display = 'block';
      } else {
        pokemonCard.style.display = 'none';
      }
    }
  });

  filterInput.addEventListener('input', (e) => {
    const filterValue = e.target.value.toLowerCase();

    for (let i = 0; i < pokemonCards.length; i++) {
      const pokemonCard = pokemonCards[i];
      const pokemonTypes = pokemonCard.querySelectorAll('.type');

      let showPokemon = false;
      for (let j = 0; j < pokemonTypes.length; j++) {
        const pokemonType = pokemonTypes[j].textContent.toLowerCase();
        if (pokemonType.includes(filterValue)) {
          showPokemon = true;
          break;
        }
      }

      if (showPokemon) {
        pokemonCard.style.display = 'block';
      } else {
        pokemonCard.style.display = 'none';
      }
    }
  });
};


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

    const singleTypeClass = !tipo2 ? "single-type" : "";

    pokedex.innerHTML += `
      <div class="card">
        <div class="idname">
          ${pokemons[i].id}. ${pokemons[i].name}<br>
        </div>
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
};

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

